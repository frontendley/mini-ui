import { defineConfig } from "tsup";
import {lessLoader} from "esbuild-plugin-less";
export default defineConfig({
  entry: ["index.ts"],
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