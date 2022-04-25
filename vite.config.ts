import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@firestore": `${path.resolve(__dirname, "./src/firebase.ts")}`,
      "@pages": `${path.resolve(__dirname, "./src/pages")}`,
      "@types": `${path.resolve(__dirname, "./src/types")}`,
      "@components": `${path.resolve(__dirname, "./src/components")}`,
    },
  },
});
