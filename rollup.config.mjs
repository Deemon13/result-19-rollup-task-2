import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";
import { babel } from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "./index.js",
  output: {
    // file: "./build/bundle.js",
    dir: "output",
    format: "cjs",
    assetFileNames: "[name]-[hash][extname]",
  },
  entry: "entry.js",
  dest: "bundle.js",
  plugins: [
    image(),
    styles(),
    babel({ babelHelpers: "bundled" }),
    serve(),
    livereload(),
  ],
};
