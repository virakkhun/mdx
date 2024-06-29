import { Options, defineConfig } from "tsup";

const BROWSER: Options = {
  entry: ["packages/mdx-util/index.ts"],
  splitting: false,
  minify: true,
  format: ["esm"],
  platform: "browser",
  dts: true,
  outDir: "packages/mdx-util/dist/browser",
};

const NODE: Options = {
  ...BROWSER,
  platform: "node",
  outDir: "packages/mdx-util/dist/node",
};

export default defineConfig([{ ...BROWSER }, { ...NODE }]);
