import { defineConfig, globalIgnores } from "eslint/config";

if (typeof globalThis.structuredClone !== "function") {
  globalThis.structuredClone = (value) => JSON.parse(JSON.stringify(value));
}

const [nextVitalsModule, nextTsModule] = await Promise.all([
  import("eslint-config-next/core-web-vitals"),
  import("eslint-config-next/typescript"),
]);

const nextVitals = nextVitalsModule.default;
const nextTs = nextTsModule.default;

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
]);

export default eslintConfig;
