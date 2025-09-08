import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// cookie
const cookie =
  "dtCookie=v_4_srv_6_sn_30597BEA62DAAD525C7BF8C81DC8199F_perc_100000_ol_0_mul_1_app-3Aea7c4b59f27d43eb_1_app-3A725a53d5e6f642d1_1_app-3A97fdcb436c22011a_1_rcs-3Acss_1; JSESSIONID=0000b-LZhm7Jy6S_C99bWEWq4Nt:-1; WC_SESSION_ESTABLISHED=true; WC_ACTIVEPOINTER=-1%2C10701; rxVisitor=1746107384749D7KOBPS3NI6IHVRVNBJQTVLFVFCTAPT2; SHERWIN_ENSIGHTEN_PRIVACY_BANNER_LOADED=1; _cls_v=d912071a-7e0b-4bce-a739-746295bb92d9; _cls_s=8eb4d4ba-eb38-4769-b3e0-f0e6ec302584:0; _ga=GA1.1.1932603715.1756309413; rto=c0; SHERWIN_ENSIGHTEN_PRIVACY_BANNER_VIEWED=1; WC_DeleteCartCookie_10701=true; priceMode=1; CompareItems_10701=; gig_bootstrap_3_kYqrS9kb69cPqSm4g9cIot7v9a89oDHqKlWtag6R911BL7PBoEWb6xuqcB9T_213=_gigya_ver4; seerid=690dd56f-11fe-42d5-9ea4-e1fbe4ee0541; glt_3_kYqrS9kb69cPqSm4g9cIot7v9a89oDHqKlWtag6R911BL7PBoEWb6xuqcB9T_213=st2.s.AtLtinlsyw.f2EqhyjeNcvWh_9Y5ry69k2QHS6XbA9E3lwLWIl2DjD2Gljbs345GdzHyi6oiyWAzQh9_Vx7PczEJ6Ahn_MxNSp4Ydl3XdLAXOAQl4hoTNurXTI4WI4_vMxYl-Axj8w0.72WEQouHBqY87sn3RQvWcZBbjSpT_MR8KM-Am65M9IyeDdvM2kn59RJYOXO8RqT_ZRSV16Xn6rUCarEP3-x_mg.sc3; _svsid=eca9c7ceb31a0495f5075e0542876f1b; SHERWIN_ENSIGHTEN_PRIVACY_MODAL_VIEWED=1; _ga_8SY41JT1X3=GS2.1.s1756494915$o6$g1$t1756495216$j29$l0$h0; _rdt_uuid=1756323082298.0cd11a68-28e5-4606-9e2d-5c8daf05788f; SHERWIN_ENSIGHTEN_PRIVACY_Targeted_Advertising=0; SHERWIN_ENSIGHTEN_PRIVACY_Performance_Cookies=0; SHERWIN_ENSIGHTEN_PRIVACY_Functional_Cookies=0; _ga_JE1HG4X4BF=GS2.1.s1756494914$o5$g1$t1756496058$j14$l0$h0; searchTermHistory=%7Cpaint%7Cpaint%7Cpaint%7Ctest%7Cgree%7Cgree; WC_AUTHENTICATION_6246013=6246013%2CcsK1Dk8xB%2FJi2HOO0kyip%2BwXGSpKF43vg6xJ5%2FCATlM%3D; TS01dc4fc6=01da4c26b5c6fb38d786b9abcf9ef05e6b5a18391fb4b12e8e8aa537e04ca18076da407b013a3631834e33971e1057b4384f79e15d; WC_USERACTIVITY_6246013=6246013%2C10701%2Cnull%2Cnull%2C1757025665916%2C1757096324726%2Cnull%2Cnull%2C7477013%2C7000000000000959803%2C1877362032%2Cver_1757090985857%2CiYWEjspeaBDK97dlR1iJNjD0JMX1oIlyausdfH4Gtbwo8MUy2PVxQXoHba871CVb2Fbtd7OjyWjyFQkTcDZFnkbq6PCc0zg7DVP%2BSCT2sOAF3jCVLLEsZCpQlsxo04zQifm3lUSGmLNY8g6LzeNEZqUKjQyKilAkqt7ii9jk1TiAmqaZF1egwdAlnggt3KVY9T5r3oZMBJpIhe0fy4NKHdIUQWCkkEjsLPa4Tg2ulWtPC8xOTU05TVFAsnccExkaGUwb5fxr2JaEs16nfDMK3RpNii%2BFmZcuct2ZrPMiSPSkNU8jEftQhK1s5bmEhAgT; WC_PERSISTENT=2%2Bqbu2fpoIcexhATDP8dH1mmnyez2pe9e08rI4IllKM%3D%3B2025-09-05+17%3A48%3A53.412_1757094533313-3_10701; dtPC=6$294533474_328h1vPPAHOCCBFTPDDRPAIRWURNBITCWQRMJC-0e0; rxvt=1757096333478|1757092789334; 8a5403=3pVre3gjf6lE9JXiivIlObhq0w32TK5vtGXY3ucLKdGXKowOo51CEpP+iiLEzMx2dEwEHDJEcLaNuOF2GXVQxh4BKucubWCPiRvDYgS46r1EouMlp+o2p1o+lXu+iGIzM/PD3bD5ekcdYb/sNKO89T1O15BdnU+776s/fT3fpV646fXl";
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
