import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// cookie
const cookie =
  "dtCookie=v_4_srv_6_sn_30597BEA62DAAD525C7BF8C81DC8199F_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_app-3A725a53d5e6f642d1_1_app-3A97fdcb436c22011a_1_rcs-3Acss_1; JSESSIONID=0000b-LZhm7Jy6S_C99bWEWq4Nt:-1; WC_SESSION_ESTABLISHED=true; WC_ACTIVEPOINTER=-1%2C10701; rxVisitor=1746107384749D7KOBPS3NI6IHVRVNBJQTVLFVFCTAPT2; SHERWIN_ENSIGHTEN_PRIVACY_BANNER_LOADED=1; _cls_v=d912071a-7e0b-4bce-a739-746295bb92d9; _cls_s=8eb4d4ba-eb38-4769-b3e0-f0e6ec302584:0; _ga=GA1.1.1932603715.1756309413; rto=c0; SHERWIN_ENSIGHTEN_PRIVACY_BANNER_VIEWED=1; WC_DeleteCartCookie_10701=true; priceMode=1; CompareItems_10701=; gig_bootstrap_3_kYqrS9kb69cPqSm4g9cIot7v9a89oDHqKlWtag6R911BL7PBoEWb6xuqcB9T_213=_gigya_ver4; seerid=690dd56f-11fe-42d5-9ea4-e1fbe4ee0541; glt_3_kYqrS9kb69cPqSm4g9cIot7v9a89oDHqKlWtag6R911BL7PBoEWb6xuqcB9T_213=st2.s.AtLtinlsyw.f2EqhyjeNcvWh_9Y5ry69k2QHS6XbA9E3lwLWIl2DjD2Gljbs345GdzHyi6oiyWAzQh9_Vx7PczEJ6Ahn_MxNSp4Ydl3XdLAXOAQl4hoTNurXTI4WI4_vMxYl-Axj8w0.72WEQouHBqY87sn3RQvWcZBbjSpT_MR8KM-Am65M9IyeDdvM2kn59RJYOXO8RqT_ZRSV16Xn6rUCarEP3-x_mg.sc3; _svsid=eca9c7ceb31a0495f5075e0542876f1b; SHERWIN_ENSIGHTEN_PRIVACY_MODAL_VIEWED=1; _ga_8SY41JT1X3=GS2.1.s1756494915$o6$g1$t1756495216$j29$l0$h0; _rdt_uuid=1756323082298.0cd11a68-28e5-4606-9e2d-5c8daf05788f; SHERWIN_ENSIGHTEN_PRIVACY_Targeted_Advertising=0; SHERWIN_ENSIGHTEN_PRIVACY_Performance_Cookies=0; SHERWIN_ENSIGHTEN_PRIVACY_Functional_Cookies=0; _ga_JE1HG4X4BF=GS2.1.s1756494914$o5$g1$t1756496058$j14$l0$h0; WC_AUTHENTICATION_6246013=6246013%2C47EAO%2BhqZpMZQSewBx23Lf8zwb92chR9yd9xiab6W%2FQ%3D; searchTermHistory=%7Cpaint%7Cpaint%7Cpaint%7Ctest%7Cgree%7Cgree; TS01dc4fc6=01da4c26b546fccb796d221ac9857b3c3076a22967f481ebf44b38250e1c78aa0ebb95daf2002ac4ce6cddb1d2884066d3ab1fde6b; WC_USERACTIVITY_6246013=6246013%2C10701%2Cnull%2Cnull%2C1756682257748%2C1756790287546%2Cnull%2Cnull%2C7465014%2C7000000000000645195%2C1877362032%2Cver_1756784664183%2CdMCdUjcElTi%2BnjiQKSkLAMTqVtGGGImSf%2FhtZ1ho76z4GfucdAvGax2eBVxZqybn165i4TRCHzO8vh2PSIQNQvoYqhLS6%2FFWqWgxdUjt%2BJHlZkTCgVsGJ%2FJVhBdI6AhppYYwRXT4KUepxLRsVzh5U7drcZvElCv59dqBTiAN9tC3M7CQ93ZtXm508v7%2FtHL91IFwzbtn5R%2FE2r%2FgUfa%2FDt9JYWFa4dcumkrOvgjwYMg5IzQ0qkQROZlzaAsLq8%2FCYNnsT3yghvHw5fui%2FhGamDiYSsbX%2Ba8%2FyN2Nv7NVxtLMesa2EkOVeP%2FLd3qu%2BcKb; WC_PERSISTENT=CzfJgWHQiBAhCrBA1E%2F3%2ByVLlE2yzvNM04rbIKTJpic%3D%3B2025-09-02+04%3A48%3A23.026_1756788502968-11_10701; 8a5403=TwP6A+YxBF8Av27vqezQpgNrTjKylJOHMaozBhQyogwTOvsZ4KlfeqXsrSsbzF7ZJjnEeZKZSgYOal/KJLykKhpoXEtFku9jhNzGW0e7Xfx5YFttcPZsWOBbBfB0E4D0V2Q7oNekMQNgKZ+1t2nvd65cpElCH7lT2YrKDihBSKjQYGis; dtPC=6$588503647_369h1vESUVCUCMGSTPUVKFLHPLHRCPKJDNMUKE-0e0; rxvt=1756790303654|1756788268284";
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
