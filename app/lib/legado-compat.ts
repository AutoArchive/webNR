export const LEGADO_COMPATIBILITY_SUITE_VERSION = '2026-08-30.1';
export const MAX_LEGADO_DEFINITION_BYTES = 2 * 1024 * 1024;

export type LegadoCapabilityLevel =
  | 'phase-1-inspect'
  | 'phase-2-declarative'
  | 'phase-3-stateful'
  | 'phase-4-script'
  | 'phase-5-bridge'
  | 'unknown';

export interface LegadoFieldInspection {
  field: string;
  capability: LegadoCapabilityLevel;
  status: 'supported-inspection' | 'runtime-not-yet-supported' | 'restricted' | 'unknown-preserved';
  note: string;
}

export interface LegadoSourceInspection {
  sourceName: string;
  sourceUrl: string;
  highestCapability: LegadoCapabilityLevel;
  fields: LegadoFieldInspection[];
  unknownFields: string[];
  original: Record<string, unknown>;
}

const INSPECTION_FIELDS = new Set([
  'bookSourceName',
  'bookSourceUrl',
  'bookSourceGroup',
  'bookSourceType',
  'bookSourceComment',
  'bookUrlPattern',
  'enabled',
  'enabledExplore',
  'customOrder',
  'lastUpdateTime',
  'respondTime',
  'weight',
]);

const DECLARATIVE_FIELDS = new Set([
  'searchUrl',
  'exploreUrl',
  'header',
  'ruleSearch',
  'ruleBookInfo',
  'ruleExplore',
  'ruleToc',
  'ruleContent',
  'ruleReview',
]);

const STATEFUL_FIELDS = new Set([
  'enabledCookieJar',
  'concurrentRate',
  'loginUrl',
  'loginUi',
]);

const SCRIPT_FIELDS = new Set([
  'loginCheckJs',
  'jsLib',
]);

const BRIDGE_FIELDS = new Set([
  'webView',
  'webViewDelayTime',
  'sourceRegex',
]);

const CAPABILITY_ORDER: LegadoCapabilityLevel[] = [
  'phase-1-inspect',
  'phase-2-declarative',
  'phase-3-stateful',
  'phase-4-script',
  'phase-5-bridge',
  'unknown',
];

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || Array.isArray(value) || typeof value !== 'object') return null;
  return value as Record<string, unknown>;
}

function asDisplayString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function containsMarker(value: unknown, pattern: RegExp): boolean {
  if (typeof value === 'string') return pattern.test(value);
  if (Array.isArray(value)) return value.some(item => containsMarker(item, pattern));
  const record = asRecord(value);
  return record ? Object.values(record).some(item => containsMarker(item, pattern)) : false;
}

function capabilityForField(field: string, value: unknown): LegadoCapabilityLevel {
  if (BRIDGE_FIELDS.has(field) || containsMarker(value, /\bwebview\b|\bjava\./i)) {
    return 'phase-5-bridge';
  }
  if (SCRIPT_FIELDS.has(field) || containsMarker(value, /<js>|@js:|\bjavaScript\b/i)) {
    return 'phase-4-script';
  }
  if (STATEFUL_FIELDS.has(field)) return 'phase-3-stateful';
  if (DECLARATIVE_FIELDS.has(field)) return 'phase-2-declarative';
  if (INSPECTION_FIELDS.has(field)) return 'phase-1-inspect';
  return 'unknown';
}

function inspectionForField(field: string, value: unknown): LegadoFieldInspection {
  const capability = capabilityForField(field, value);

  switch (capability) {
    case 'phase-1-inspect':
      return {
        field,
        capability,
        status: 'supported-inspection',
        note: 'Imported, preserved, and reported locally. This does not execute the source.',
      };
    case 'phase-2-declarative':
      return {
        field,
        capability,
        status: 'runtime-not-yet-supported',
        note: 'Recognized as a declarative source rule, but WebNR does not execute it yet.',
      };
    case 'phase-3-stateful':
      return {
        field,
        capability,
        status: 'runtime-not-yet-supported',
        note: 'Recognized as stateful behavior that needs explicit cookie, variable, and permission bounds.',
      };
    case 'phase-4-script':
      return {
        field,
        capability,
        status: 'restricted',
        note: 'Script-bearing behavior is never executed by the inspector and requires a capability-limited runtime.',
      };
    case 'phase-5-bridge':
      return {
        field,
        capability,
        status: 'restricted',
        note: 'WebView or bridge-dependent behavior is not executed in the browser inspector.',
      };
    default:
      return {
        field,
        capability: 'unknown',
        status: 'unknown-preserved',
        note: 'Unknown top-level field is preserved verbatim for inspection instead of being discarded.',
      };
  }
}

function highestCapability(fields: LegadoFieldInspection[]): LegadoCapabilityLevel {
  let highest: LegadoCapabilityLevel = 'phase-1-inspect';
  for (const field of fields) {
    if (field.capability === 'unknown') continue;
    if (CAPABILITY_ORDER.indexOf(field.capability) > CAPABILITY_ORDER.indexOf(highest)) {
      highest = field.capability;
    }
  }
  return highest;
}

export function inspectLegadoSourceDefinition(value: unknown): LegadoSourceInspection {
  const source = asRecord(value);
  if (!source) throw new Error('Each Legado source definition must be a JSON object.');

  const fields = Object.entries(source)
    .map(([field, fieldValue]) => inspectionForField(field, fieldValue))
    .sort((a, b) => a.field.localeCompare(b.field));

  return {
    sourceName: asDisplayString(source.bookSourceName) || 'Unnamed Legado source',
    sourceUrl: asDisplayString(source.bookSourceUrl),
    highestCapability: highestCapability(fields),
    fields,
    unknownFields: fields.filter(field => field.capability === 'unknown').map(field => field.field),
    original: { ...source },
  };
}

export function parseLegadoSourceDefinitions(text: string): LegadoSourceInspection[] {
  const byteLength = new TextEncoder().encode(text).byteLength;
  if (byteLength > MAX_LEGADO_DEFINITION_BYTES) {
    throw new Error('Legado definition file is larger than the 2 MiB inspection limit.');
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(text) as unknown;
  } catch {
    throw new Error('Legado definition must be valid JSON.');
  }

  const values = Array.isArray(parsed) ? parsed : [parsed];
  if (values.length === 0) throw new Error('Legado definition file does not contain any sources.');
  if (values.length > 500) throw new Error('Legado definition file contains more than 500 sources.');

  return values.map(inspectLegadoSourceDefinition);
}
