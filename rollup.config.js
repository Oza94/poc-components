import swc from "rollup-plugin-swc";
import styles from "rollup-plugin-styles";
import resolve from "@rollup/plugin-node-resolve";
import injectCss from "./rollup/inject-css";

export default {
  input: "src/index.ts",
  external: ["react"],
  output: [
    {
      dir: "esm",
      format: "esm",
      preserveModules: true,
      assetFileNames: "[name][extname]",
    },
    {
      dir: "cjs",
      format: "commonjs",
      preserveModules: true,
      assetFileNames: "[name][extname]",
      exports: "auto",
    },
    {
      dir: "standalone",
      format: "commonjs",
      assetFileNames: "[name][extname]",
      exports: "auto",
    },
  ],
  plugins: [
    resolve({
      extensions: [".ts", ".tsx", ".css"],
    }),
    swc({
      rollup: {
        exclude: "**/*.css",
      },
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true,
        },
        target: "es2018",
      },
    }),
    styles({
      config: false,
      mode: "extract",
      modules: true,
    }),
    injectCss(),
  ],
};
