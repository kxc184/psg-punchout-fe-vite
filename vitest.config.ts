import { defineConfig } from "vitest/config";
import path from "path";
export default defineConfig({
    test: {
        setupFiles: ['./vitest-setup.ts'],
        globals: true,
            alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    environment: "jsdom",
    },
    
});
