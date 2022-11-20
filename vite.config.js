import { defineConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [ path.resolve(process.cwd(), "src/icons") ],
      symbolId: 'icon-[name]',
    })
  ]
})