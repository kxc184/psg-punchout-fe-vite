import { http, HttpResponse } from "msw";

const megaMenuResponse = {
  data: {
    categories: [
      {
        name: "General Industrial",
        uniqueID: "67001",
        categories: [
          {
            name: "Solvent Coatings",
            uniqueID: "67006",
            categories: [
              {
                name: "Basecoats",
                uniqueID: "68518",
              },
              {
                name: "Catalysts & Hardeners",
                uniqueID: "68519",
              },
              {
                name: "Colorants",
                uniqueID: "68520",
              },
              {
                name: "Primers",
                uniqueID: "68521",
              },
              {
                name: "Topcoats",
                uniqueID: "68522",
              },
            ],
          },
          {
            name: "Water Coatings",
            uniqueID: "67012",
            categories: [
              {
                name: "Catalysts & Hardeners",
                uniqueID: "68524",
              },
              {
                name: "Primers",
                uniqueID: "68526",
              },
              {
                name: "Topcoats",
                uniqueID: "68527",
              },
              {
                name: "Colorants",
                uniqueID: "169001",
              },
            ],
          },
          {
            name: "100% Solids",
            uniqueID: "229501",
            categories: [
              {
                name: "Topcoats",
                uniqueID: "229502",
              },
            ],
          },
          {
            name: "Powder Coatings",
            uniqueID: "229503",
            categories: [
              {
                name: "Epoxy Coatings",
                uniqueID: "229504",
              },
            ],
          },
        ],
      },
      {
        name: "Industrial Wood",
        uniqueID: "67018",
        categories: [
          {
            name: "Solvent Coatings",
            uniqueID: "67019",
            categories: [
              {
                name: "Basecoats",
                uniqueID: "68528",
              },
              {
                name: "Catalysts & Hardeners",
                uniqueID: "68529",
              },
              {
                name: "Colorants",
                uniqueID: "68530",
              },
              {
                name: "Primers",
                uniqueID: "68531",
              },
              {
                name: "Stains, Glazes & Dyes",
                uniqueID: "68532",
              },
              {
                name: "Topcoats",
                uniqueID: "68533",
              },
            ],
          },
          {
            name: "Water Coatings",
            uniqueID: "67026",
            categories: [
              {
                name: "Basecoats",
                uniqueID: "68534",
              },
              {
                name: "Primers",
                uniqueID: "68537",
              },
              {
                name: "Stains, Glazes & Dyes",
                uniqueID: "68538",
              },
              {
                name: "Topcoats",
                uniqueID: "68539",
              },
              {
                name: "Colorants",
                uniqueID: "169002",
              },
            ],
          },
        ],
      },
      {
        name: "Floorcoverings",
        uniqueID: "264501",
        categories: [
          {
            name: "Hardwood",
            uniqueID: "264502",
          },
        ],
      },
      {
        name: "Interior Paint & Coatings",
        uniqueID: "20127",
        categories: [
          {
            name: "Paint & Coatings",
            uniqueID: "20145",
          },
          {
            name: "Primers",
            uniqueID: "20146",
          },
          {
            name: "Wood Stains, Sealers & Clear Topcoats",
            uniqueID: "20147",
          },
          {
            name: "Commercial High-Performance Coatings",
            uniqueID: "20129",
          },
          {
            name: "Concrete & Masonry Products",
            uniqueID: "20136",
            categories: [
              {
                name: "Commercial Concrete Joint Sealants",
                uniqueID: "20137",
              },
              {
                name: "Concrete Preparation Products",
                uniqueID: "20138",
              },
              {
                name: "Decorative Concrete Products",
                uniqueID: "20139",
              },
              {
                name: "Equipment & Supplies For Concrete",
                uniqueID: "20140",
              },
              {
                name: "Protective Concrete Coatings & Waterproofers",
                uniqueID: "20144",
              },
            ],
          },
          {
            name: "Aerosols",
            uniqueID: "20128",
          },
          {
            name: "Faux Finishing",
            uniqueID: "20130",
            categories: [
              {
                name: "Coatings",
                uniqueID: "20131",
              },
              {
                name: "Tools & Accessories",
                uniqueID: "20132",
              },
            ],
          },
          {
            name: "Floor Coatings",
            uniqueID: "20133",
            categories: [
              {
                name: "Resinous Performance Floor Coatings",
                uniqueID: "20134",
              },
              {
                name: "Terrazzo Floor Coatings",
                uniqueID: "20135",
              },
            ],
          },
          {
            name: "Lacquers",
            uniqueID: "20148",
          },
        ],
      },
      {
        name: "Exterior Paint & Coatings",
        uniqueID: "20104",
        categories: [
          {
            name: "Paint & Coatings",
            uniqueID: "20123",
          },
          {
            name: "Primers",
            uniqueID: "20124",
          },
          {
            name: "Wood Stains, Sealers & Clear Topcoats",
            uniqueID: "20126",
          },
          {
            name: "Commercial High-Performance Coatings",
            uniqueID: "20106",
          },
          {
            name: "Deck Stains & Supplies",
            uniqueID: "20107",
            categories: [
              {
                name: "Applicators",
                uniqueID: "20108",
              },
              {
                name: "Finishes",
                uniqueID: "20109",
              },
              {
                name: "Surface Preparation/Clean-Up",
                uniqueID: "20110",
              },
            ],
          },
          {
            name: "Siding Stains",
            uniqueID: "20125",
          },
          {
            name: "Concrete & Masonry Products",
            uniqueID: "20113",
            categories: [
              {
                name: "Commercial Concrete Joint Sealants",
                uniqueID: "20114",
              },
              {
                name: "Concrete Preparation Products",
                uniqueID: "20115",
              },
              {
                name: "Decorative Concrete Products",
                uniqueID: "20116",
              },
              {
                name: "Equipment & Supplies For Concrete",
                uniqueID: "20117",
              },
              {
                name: "Protective Concrete Coatings & Waterproofers",
                uniqueID: "20121",
              },
            ],
          },
          {
            name: "Aerosols",
            uniqueID: "20105",
          },
          {
            name: "Floor Coatings",
            uniqueID: "20111",
            categories: [
              {
                name: "Commercial Performance Floor Coatings",
                uniqueID: "20112",
              },
            ],
          },
        ],
      },
      {
        name: "Protective & Marine Coatings",
        uniqueID: "68501",
        categories: [
          {
            name: "Concrete Products",
            uniqueID: "68502",
            categories: [
              {
                name: "Concrete Coatings",
                uniqueID: "68503",
              },
              {
                name: "Decorative Concrete Products",
                uniqueID: "68504",
              },
              {
                name: "Cement & Mortar",
                uniqueID: "68505",
              },
            ],
          },
          {
            name: "Antifouling Coatings",
            uniqueID: "68506",
          },
          {
            name: "Fire Protection & High Temperature Coatings",
            uniqueID: "68507",
          },
          {
            name: "High Performance Floor Coatings",
            uniqueID: "68508",
          },
          {
            name: "Industrial High Performance Paints",
            uniqueID: "68509",
          },
          {
            name: "Marine Coatings",
            uniqueID: "68510",
          },
          {
            name: "Primers & Sealers",
            uniqueID: "68511",
          },
          {
            name: "Stains",
            uniqueID: "68512",
          },
          {
            name: "Tank Lining & Secondary Containment",
            uniqueID: "68513",
          },
          {
            name: "Zinc & Galvanizing Coatings",
            uniqueID: "68514",
          },
        ],
      },
      {
        name: "Equipment & Supplies",
        uniqueID: "20001",
        categories: [
          {
            name: "ProBuy",
            uniqueID: "244001",
          },
          {
            name: "Brushes",
            uniqueID: "20002",
          },
          {
            name: "Roller Covers, Frames & Accessories",
            uniqueID: "20057",
            categories: [
              {
                name: "Accessories",
                uniqueID: "20058",
              },
              {
                name: "Roller Covers",
                uniqueID: "20059",
              },
              {
                name: "Roller Frames",
                uniqueID: "20060",
              },
              {
                name: "Mini Roller Systems",
                uniqueID: "20061",
              },
              {
                name: "Poles",
                uniqueID: "20062",
              },
              {
                name: "Trays, Buckets, Screens & Liners",
                uniqueID: "20063",
              },
            ],
          },
          {
            name: "Tape & Masking",
            uniqueID: "20094",
            categories: [
              {
                name: "Masking Film",
                uniqueID: "20095",
              },
              {
                name: "Masking Paper",
                uniqueID: "20096",
              },
              {
                name: "Masking Tools & Kits",
                uniqueID: "20097",
              },
              {
                name: "Tape",
                uniqueID: "20098",
              },
            ],
          },
          {
            name: "Ladders, Scaffolds & Climbing Equipment",
            uniqueID: "20028",
            categories: [
              {
                name: "Accessories",
                uniqueID: "20029",
              },
              {
                name: "Extension Ladders",
                uniqueID: "20030",
              },
              {
                name: "Multi Ladders",
                uniqueID: "20032",
              },
              {
                name: "Planks & Work Platforms",
                uniqueID: "20033",
              },
              {
                name: "Scaffolding",
                uniqueID: "20035",
              },
              {
                name: "Step Ladders",
                uniqueID: "20036",
              },
              {
                name: "Step Stools",
                uniqueID: "20037",
              },
              {
                name: "Vehicle Racks",
                uniqueID: "20038",
              },
            ],
          },
          {
            name: "Sandpaper & Abrasives",
            uniqueID: "20069",
            categories: [
              {
                name: "Drywall Sandscreens",
                uniqueID: "20070",
              },
              {
                name: "Sandpaper Sheets & Discs",
                uniqueID: "20071",
              },
              {
                name: "Sanding Pads",
                uniqueID: "20072",
              },
              {
                name: "Sanding Sponges",
                uniqueID: "20073",
              },
              {
                name: "Sanding Tools",
                uniqueID: "20074",
              },
              {
                name: "Steel Wool",
                uniqueID: "20075",
              },
            ],
          },
          {
            name: "Drop Cloths & Plastic Sheeting",
            uniqueID: "20013",
            categories: [
              {
                name: "Canvas and Coated Canvas Drop Cloths",
                uniqueID: "20014",
              },
              {
                name: "Plastic Drop Cloths",
                uniqueID: "20016",
              },
              {
                name: "Plastic Sheeting",
                uniqueID: "20017",
              },
              {
                name: "Specialty",
                uniqueID: "20018",
              },
              {
                name: "Fiber Drop Cloths",
                uniqueID: "83501",
              },
            ],
          },
          {
            name: "Caulks, Sealants & Caulking Tools",
            uniqueID: "20003",
            categories: [
              {
                name: "Caulking Tools",
                uniqueID: "20004",
              },
              {
                name: "Caulks & Sealants",
                uniqueID: "20005",
              },
            ],
          },
          {
            name: "Patching & Repair",
            uniqueID: "20049",
            categories: [
              {
                name: "Concrete Patch & Repair",
                uniqueID: "20050",
              },
              {
                name: "Fillers & Putty",
                uniqueID: "20051",
              },
              {
                name: "Glazing Compound",
                uniqueID: "20052",
              },
              {
                name: "Patching Tapes and Materials",
                uniqueID: "20053",
              },
              {
                name: "Patching Tools",
                uniqueID: "20054",
              },
              {
                name: "Spackling & Patching Compounds",
                uniqueID: "20055",
              },
              {
                name: "Texture Repair",
                uniqueID: "20056",
              },
            ],
          },
          {
            name: "Painter's Tools",
            uniqueID: "20039",
            categories: [
              {
                name: "Hand Tools",
                uniqueID: "20040",
              },
              {
                name: "Knives & Blades",
                uniqueID: "20041",
              },
              {
                name: "Putty/Joint Knives",
                uniqueID: "20042",
              },
              {
                name: "Scrapers",
                uniqueID: "20043",
              },
              {
                name: "Sundries",
                uniqueID: "20044",
              },
              {
                name: "Wire Brushes",
                uniqueID: "20045",
              },
              {
                name: "Work Lights",
                uniqueID: "20046",
              },
              {
                name: "Coating Additives",
                uniqueID: "20047",
              },
            ],
          },
          {
            name: "Drywall Compounds & Tools",
            uniqueID: "20019",
            categories: [
              {
                name: "Drywall Abrasives",
                uniqueID: "20020",
              },
              {
                name: "Drywall Tape",
                uniqueID: "20021",
              },
              {
                name: "Drywall Tools",
                uniqueID: "20022",
              },
              {
                name: "Joint Compound",
                uniqueID: "20023",
              },
              {
                name: "Joint/Taping Knives",
                uniqueID: "20024",
              },
              {
                name: "Mixers",
                uniqueID: "20025",
              },
              {
                name: "Mud Pans",
                uniqueID: "20026",
              },
              {
                name: "Sanding Tools",
                uniqueID: "20027",
              },
            ],
          },
        ],
      },
      {
        name: "SprayBuy",
        uniqueID: "-222501",
      },
      {
        name: "FAQ",
        uniqueID: "-244001",
      },
    ],
  },
};

// migration to v2 https://mswjs.io/docs/migrations/1.x-to-2.x/
const megaMenuHandlers = [
  http.get("/punchout-bff/mega-menu", () =>
    HttpResponse.json(megaMenuResponse.data, {
      status: 200,
    })
  ),
];

export default megaMenuHandlers;
