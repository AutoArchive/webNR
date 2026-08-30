'use client';

import React, { useRef, useState } from 'react';
import {
  LEGADO_COMPATIBILITY_SUITE_VERSION,
  LegadoSourceInspection,
  parseLegadoSourceDefinitions,
} from '../lib/legado-compat';

const capabilityLabels: Record<LegadoSourceInspection['highestCapability'], string> = {
  'phase-1-inspect': 'L1 · import & inspect',
  'phase-2-declarative': 'L2 · declarative rules required',
  'phase-3-stateful': 'L3 · stateful runtime required',
  'phase-4-script': 'L4 · restricted script runtime required',
  'phase-5-bridge': 'L5 · Bridge / WebView required',
  unknown: 'Unknown fields present',
};

export const LegadoCompatibilityInspector: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [reports, setReports] = useState<LegadoSourceInspection[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);
    setReports([]);

    try {
      const text = await file.text();
      setReports(parseLegadoSourceDefinitions(text));
    } catch (inspectionError) {
      setError(inspectionError instanceof Error ? inspectionError.message : 'Unable to inspect this definition.');
    } finally {
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800" aria-labelledby="legado-inspector-heading">
      <h2 id="legado-inspector-heading" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Legado compatibility inspector / 书源兼容检查
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        Fixture suite {LEGADO_COMPATIBILITY_SUITE_VERSION}. JSON stays in this browser. WebNR only parses and reports fields here; it does not run source rules, scripts, cookies, login flows, WebView behavior, or target-site requests.
      </p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        当前可验证的是 L1：本地导入、字段识别、未知字段保留与能力分级。L2–L5 只是识别需求，不代表 WebNR 已能执行对应书源。
      </p>

      <label className="mt-4 block text-sm font-medium text-gray-800 dark:text-gray-200" htmlFor="legado-definition-file">
        Inspect a Legado JSON definition
      </label>
      <input
        id="legado-definition-file"
        ref={inputRef}
        type="file"
        accept=".json,.txt,application/json,text/plain"
        onChange={event => { void handleFile(event); }}
        className="mt-2 block w-full rounded-lg text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:file:bg-blue-900/20 dark:file:text-blue-300"
      />

      {error && (
        <div role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
          {error}
        </div>
      )}

      {reports.length > 0 && (
        <div className="mt-5 space-y-4" aria-live="polite">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Inspected {reports.length} source{reports.length === 1 ? '' : 's'} locally.
          </p>
          {reports.map((report, index) => (
            <article key={`${report.sourceUrl}-${report.sourceName}-${index}`} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{report.sourceName}</h3>
              <p className="mt-1 break-all text-xs text-gray-500 dark:text-gray-400">
                {report.sourceUrl || 'No bookSourceUrl supplied'}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                Highest required capability: <strong>{capabilityLabels[report.highestCapability]}</strong>
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {report.fields.length} top-level fields preserved; {report.unknownFields.length} unknown field{report.unknownFields.length === 1 ? '' : 's'}.
              </p>
              {report.unknownFields.length > 0 && (
                <p className="mt-1 break-words text-xs text-gray-500 dark:text-gray-400">
                  Unknown but preserved: {report.unknownFields.join(', ')}
                </p>
              )}
              <details className="mt-3">
                <summary className="cursor-pointer text-sm font-medium text-blue-700 dark:text-blue-300">Field report</summary>
                <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                  {report.fields.map(field => (
                    <li key={field.field}>
                      <code>{field.field}</code> — {field.capability} — {field.note}
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
