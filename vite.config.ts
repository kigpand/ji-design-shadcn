import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ outDir: "dist", include: ["src"] })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "jiDesignSystem",
      fileName: (format) => `ji-design-shadcn.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
    },
    cssCodeSplit: false,
    outDir: "dist",
  },
});
