import { delay, http, HttpResponse } from "msw";

export const autoSuggestProductsResponse = {
  data: {
    productCategories: {
      catalogEntryView: [
        {
          catent_product_name: "Dupli-Color BHT",
        },
        {
          catent_product_name: "Graco RAC",
        },
        {
          catent_product_name: "LOXON Self-Cleaning",
        },
        {
          catent_product_name: "CONFLEX SHERLASTIC",
        },
      ],
    },
    products: {
      recordSetTotalMatches: 124,
      entry: [
        {
          name: "Purdy POWER LOCK Professional Grade Extension Pole",
          uniqueID: "12940",
          thumbnail:
            "https://sherwin.scene7.com/is/image/sw/paint_template-1?layer=comp&wid=100&fmt=jpeg&qlt=92%2c0&op_sharpen=0&resMode=sharp2&op_usm=0.0%2c0.0%2c0%2c0&iccEmbed=0&printRes=150&_tparam_layer_1_src=sw/716341406059_140855624_2to4PowerLock_hangtag",
          url: "dev-punchout.sherwin-williams.com/en/sherwinwilliamspunchout/purdy-power-lock-professional-grade-extension-pole",
        },
        {
          name: "ProMar 200 Zero VOC Interior Latex",
          uniqueID: "13326",
          thumbnail:
            "https://sherwin.scene7.com/is/image/sw/paint_template-1?layer=comp&wid=100&fmt=jpeg&qlt=92%2c0&op_sharpen=0&resMode=sharp2&op_usm=0.0%2c0.0%2c0%2c0&iccEmbed=0&printRes=150&_tparam_layer_1_src=sw/ProMar_200_Int_Ltx_1G_Parent",
          url: "dev-punchout.sherwin-williams.com/en/sherwinwilliamspunchout/promar-200-zero-voc-interior-latex",
        },
        {
          name: "Pro Industrial Pre-Catalyzed Waterbased Epoxy",
          uniqueID: "13358",
          thumbnail:
            "https://sherwin.scene7.com/is/image/sw/paint_template-1?layer=comp&wid=100&fmt=jpeg&qlt=92%2c0&op_sharpen=0&resMode=sharp2&op_usm=0.0%2c0.0%2c0%2c0&iccEmbed=0&printRes=150&_tparam_layer_1_src=sw/650362783-ProMar-400-Zero-VOC-Interior-Latex-Flat-Extra-White-1-Gallon_parent",
          url: "dev-punchout.sherwin-williams.com/en/sherwinwilliamspunchout/pro-industrial-pre-catalyzed-waterbased-epoxy",
        },
        {
          name: "Pro Industrial Urethane Alkyd Enamel",
          uniqueID: "13361",
          thumbnail:
            "https://sherwin.scene7.com/is/image/sw/paint_template-1?layer=comp&wid=100&fmt=jpeg&qlt=92%2c0&op_sharpen=0&resMode=sharp2&op_usm=0.0%2c0.0%2c0%2c0&iccEmbed=0&printRes=150&_tparam_layer_1_src=sw/Pro_Industrial_WB_Alkyd_Urethane_1G_Parent",
          url: "dev-punchout.sherwin-williams.com/en/sherwinwilliamspunchout/pro-industrial-urethane-alkyd-enamel",
        },
      ],
    },
  },
};

// migration to v2 https://mswjs.io/docs/migrations/1.x-to-2.x/
const searchHandlers = [
  http.get(/\/punchout-bff\/products\/auto-suggestion\/*/, async () => {
    await delay(2000); // 2 seconds
    return HttpResponse.json(autoSuggestProductsResponse.data, {
      status: 200,
    });
  }),
];

export default searchHandlers;
