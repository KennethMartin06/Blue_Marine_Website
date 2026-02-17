export const site = {
  name: "Blue Wave Marine",
  tagline: "Seafood exports for Asian markets",
  description:
    "We supply export-grade seafood with consistent quality, reliable cold-chain handling, and flexible packaging for importers and distributors across Asia.",
  markets: ["Singapore", "Malaysia", "Thailand", "Vietnam", "Hong Kong", "UAE"],
  contact: {
    email: "sales@bluewavemarine.com",
    phone: "+91 90000 00000",
    whatsapp: "+91 90000 00000",
    location: "India",
  },
};

export type Product = {
  slug: string;
  name: string;
  scientific?: string;
  form: string[];
  notes: string;
};

export const products: Product[] = [
  {
    slug: "indian-mackerel",
    name: "Indian Mackerel",
    scientific: "Rastrelliger kanagurta",
    form: ["Whole", "HGT", "IQF"],
    notes: "Consistent sizing, clean handling, export-ready freezing and packing.",
  },
  {
    slug: "pomfret",
    name: "Pomfret",
    scientific: "Pampus spp.",
    form: ["Whole", "IQF"],
    notes: "Premium-grade pomfret with careful grading and carton packing.",
  },
  {
    slug: "sardine",
    name: "Sardine",
    scientific: "Sardinella spp.",
    form: ["Whole", "Block Frozen"],
    notes: "Popular for bulk supply with stable cold-chain dispatch.",
  },
  {
    slug: "ribbonfish",
    name: "Ribbonfish",
    scientific: "Trichiurus spp.",
    form: ["Whole", "IQF"],
    notes: "Cleaned and frozen promptly; available in multiple size grades.",
  },
  {
    slug: "yellowfin-tuna",
    name: "Yellowfin Tuna",
    scientific: "Thunnus albacares",
    form: ["Loin", "Steaks", "Frozen"],
    notes: "Export-grade tuna cuts with strict temperature control.",
  },
  {
    slug: "squid",
    name: "Squid",
    scientific: "Loligo spp.",
    form: ["Whole Cleaned", "Rings", "IQF"],
    notes: "Uniform cleaning and packing; ideal for retail and foodservice.",
  },
  {
    slug: "cuttlefish",
    name: "Cuttlefish",
    scientific: "Sepia spp.",
    form: ["Whole", "Cleaned", "IQF"],
    notes: "Graded supply with neat packing and moisture-controlled freezing.",
  },
  {
    slug: "vannamei-shrimp",
    name: "Vannamei Shrimp",
    scientific: "Litopenaeus vannamei",
    form: ["HOSO", "HLSO", "Peeled", "Deveined", "IQF"],
    notes: "Multiple processing options with consistent counts and glazing.",
  },
  {
    slug: "black-tiger-shrimp",
    name: "Black Tiger Shrimp",
    scientific: "Penaeus monodon",
    form: ["HOSO", "HLSO", "IQF"],
    notes: "Premium shrimp options with careful grading and presentation.",
  },
  {
    slug: "seer-fish",
    name: "Seer Fish",
    scientific: "Scomberomorus spp.",
    form: ["Steaks", "Slices", "Frozen"],
    notes: "Clean cuts, consistent thickness, export-ready packaging options.",
  },
];
