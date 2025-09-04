import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// cookie
const cookie = "";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // vite proxy config
  server: {
    proxy: {
      "/punchout-bff": {
        target: "https://dev-api.sherwin-williams.com",
        changeOrigin: true,
        // CERT is bad so use secure: false
        secure: false,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Cookie", cookie);
          });
        },
      },
      "/aem": {
        target: "https://dev-www.sherwin-williams.com",
        changeOrigin: true,
      },
      "/wcs": {
        target: "https://dev-punchout.sherwin-williams.com",
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Cookie", cookie);
          });
        },
      },
    },
  },
});
