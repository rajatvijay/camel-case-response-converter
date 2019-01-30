// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import minify from "rollup-plugin-babel-minify";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "iife"
  },
  name: "MyModule",
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    minify(),
    uglify()
  ]
};
