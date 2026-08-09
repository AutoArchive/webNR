import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".cache/**",
    ".next/**",
    "site/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // Preserve the Next 15 lint baseline during the Next 16 toolchain upgrade.
    // These newly enabled rules require separate behavioral refactors.
    rules: {
      "@next/next/no-location-assign-relative-destination": "off",
      "react-hooks/immutability": "off",
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);

export default eslintConfig;
