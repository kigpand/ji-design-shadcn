import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      outDir: "dist", // 꼭 dist로 설정!
      copyDtsFiles: true,
      exclude: ["src/stories", "src/**/*.stories.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "jiDesignSystem",
      fileName: (format) => `ji-design-shadcn.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      input: path.resolve(__dirname, "src/components/index.ts"),
    },
    outDir: "dist",
  },
});
