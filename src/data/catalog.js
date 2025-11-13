// src/data/catalog.js
export const CONTACT = {
  phones: ["+91 94255 32321", "+91 81202 28222"],
  emails: ["anumit_enterprises@rediffmail.com", "ae_krb@rediffmail.com"],
  address: "Shop No.28, IDSMT Complex, Ghantaghar Chowk, Korba (C.G.)",
};

export const BRANDS = [
  "Schneider Electric","BCH Electric","MTL Instruments","RMG Electromech",
  "Hitachi Hi-Rel UPS","Pyrotech","Anest Iwata Motherson","Microtech Electronics",
  "Essen Deinki","Trinity Touch"
];

// src/data/catalog.js

export const CATEGORIES = [
  {
    tag: "Switchgear & Control",
    items: [
      "Ultra Power ACBs",
      "ComPact NSXm MCCB (up to 160A)",
      "TeSys Deca Advanced Contactors (up to 150A)",
      "Acti9 Miniature Circuit Breakers",
      "Switch Disconnector Fuse (4-pole)",
    ],
    image: `${import.meta.env.BASE_URL}image1.jfif`,
  },
  {
    tag: "Starters & Motors",
    items: [
      "BK1 Starter",
      "1-PH DOL Starter",
      "Manual Star-Delta Starter",
      "MPCB (Motor Protection)",
      "Motors",
    ],
    image: `${import.meta.env.BASE_URL}image2.jfif`,
  },
  {
    tag: "Enclosures",
    items: [
      "Wall-Mounted Terminal Boxes",
      "Stainless Steel Enclosures",
      '19" Wall-Mount Racks',
    ],
    image: `${import.meta.env.BASE_URL}image3.jfif`,
  },
  {
    tag: "Lighting & Fire",
    items: [
      "LED Flood/Highbay/Street",
      "Flameproof Well/Tube Glass",
      "Fire Alarm System",
      "Emergency Exit Light",
    ],
    image: `${import.meta.env.BASE_URL}image4.jfif`,
  },
  {
    tag: "Safety & Signal",
    items: [
      "MTL5500 IS Isolators",
      "MTL SD Surge Protectors",
      "MTL SUM5 Universal Marshalling",
    ],
    image: `${import.meta.env.BASE_URL}image5.jfif`,
  },
  {
    tag: "Lifting & MHE",
    items: [
      "Pallet Trucks",
      "Stackers (Manual/Full Electric)",
      "Scissor Lifting Platforms",
      "Drum Handlers",
    ],
    image: `${import.meta.env.BASE_URL}image6.jfif`,
  },
  {
    tag: "Compressors & Air",
    items: [
      "Air Compressors",
      "Receiver/Vessels",
      "Line Filters",
      "Air Dryers",
    ],
    image: `${import.meta.env.BASE_URL}image7.jfif`,
  },
  {
    tag: "Instrumentation",
    items: [
      "Electromagnetic Flow Meter",
      "Ultrasonic Level Tx",
      "Battery-Operated Pressure Tx",
      "Hydrological Radar Gauge",
    ],
    image: `${import.meta.env.BASE_URL}image8.jfif`,
  },
];
