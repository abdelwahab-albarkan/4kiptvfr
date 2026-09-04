import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // French content is apostrophe-heavy (l', d', qu'…). This rule only
      // asks to HTML-escape apostrophes that already render correctly in JSX;
      // escaping thousands of them would hurt source readability with no
      // runtime or accessibility benefit. Every other lint rule stays on.
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
