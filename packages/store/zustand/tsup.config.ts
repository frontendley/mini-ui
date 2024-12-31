import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["./src/index.ts"],
  dts: true,
  outDir: 'es',
  format: "esm",
  clean: true
})