import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const entry = `./packages/mdx-util/src/index.ts`;
const output = `./packages/mdx-util/dist`;

const pkgConfigs = [
  {
    entry: entry,
    output: output,
    type: "js",
  },
];

const configs = [];

pkgConfigs.forEach(({ entry, output, type }) => {
  if (type === "dts")
    configs.push({
      input: entry,
      plugins: [dts()],
      output: [
        {
          file: `${output}/index.d.ts`,
          format: "es",
        },
      ],
    });
  else
    configs.push({
      input: entry,
      plugins: [
        esbuild(),
        resolve({ extensions: [".ts"] }),
        commonjs(),
        terser(),
      ],
      output: [
        {
          file: `${output}/index.mjs`,
          format: "es",
        },
        {
          file: `${output}/index.cjs`,
          format: "cjs",
        },
      ],
      external: ["unified", "refractor/lang/markdown"],
    });
});

export default configs;
