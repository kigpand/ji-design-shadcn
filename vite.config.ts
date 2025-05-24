import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      outDir: "dist",
      copyDtsFiles: true,
      exclude: ["src/stories", "src/**/*.stories.tsx", "src/lib"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "jiDesignSystem",
      fileName: (format) => `ji-design-shadcn.${format}.js`,
    },
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"], // ✅ 올바른 위치
      input: path.resolve(__dirname, "src/index.ts"),
    },
  },
  optimizeDeps: {
    exclude: ["react", "react-dom"],
  },
  ssr: {
    external: ["react", "react-dom"],
  },
});
