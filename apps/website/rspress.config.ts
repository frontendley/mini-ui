import { defineConfig } from "rspress/config";
import { pluginPreview } from "@rspress/plugin-preview";

export default defineConfig({
  root: "docs",
  title: "mini-ui",
  plugins: [pluginPreview()],
})