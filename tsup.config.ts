import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["packages/mdx-util/src/index.ts"],
  splitting: false,
  clean: true,
  minify: true,
  dts: true,
  outDir: "packages/mdx-util/dist",
  format: ["esm", "cjs"],
});
