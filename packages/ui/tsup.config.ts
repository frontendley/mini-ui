import { defineConfig } from "tsup";
import {lessLoader} from "esbuild-plugin-less";
export default defineConfig({
  entry: ["src"],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: "dist",
  dts: true,
  format: ["esm"],
  esbuildPlugins: [
      lessLoader()
  ]
})