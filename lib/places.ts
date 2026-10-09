export type FoodPlace = {
  id: string;
  name: string;
  area: string;
  coordinates: [number, number];
  specialty: string;
  category: string;
  description: string;
  association: string;
  image: string;
  mapLink: string;
  sourceUrl: string;
  sourceLabel: string;
};

// Pins mark towns or food areas associated with a dish, not exact restaurant addresses.
// The source links support the local food association; they are not restaurant listings.
export const foodPlaces: FoodPlace[] = [
  {
    id: "cebu-city",
    name: "Cebu City",
    area: "Metro Cebu · Central Cebu",
    coordinates: [10.3157, 123.8854],
    specialty: "Ngohiong & puso",
    category: "Street food",
    description: "Explore Cebu City's street-food culture, from ngohiong to puso (hanging rice), often paired with grilled food and local meals.",
    association: "This pin represents a broad food scene, not one exact stall or a claim that every dish originated in this city.",
    image: "",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Cebu+City%2C+Cebu%2C+Philippines",
    sourceUrl: "https://ejournal.upsi.edu.my/index.php/JRPPTTE/article/view/4201",
    sourceLabel: "Research on Cebu's puso street-food culture"
  },
  {
    id: "carcar",
    name: "Carcar City",
    area: "Southern Cebu",
    coordinates: [10.1061, 123.6402],
    specialty: "Lechon & chicharon",
    category: "Local favorites",
    description: "A southern Cebu food stop known for lechon, chicharon, and other local delicacies sold around the city and public market.",
    association: "These are documented Carcar specialties. The map pin marks the city area, not a specific stall or shop.",
    image: "",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Carcar+City%2C+Cebu%2C+Philippines",
    sourceUrl: "https://tourism.cebu.gov.ph/explore/carcar-city/",
    sourceLabel: "Cebu Province Tourism: Carcar City"
  },
  {
    id: "argao",
    name: "Argao",
    area: "Southeastern Cebu",
    coordinates: [9.8790, 123.5950],
    specialty: "Torta sa Argao",
    category: "Sweets & pasalubong",
    description: "Discover Argao's traditional torta, a signature local cake with a long-standing place in the town's culinary heritage.",
    association: "Torta is a documented town specialty. Use the map search to explore the area; individual bakeries have not yet been verified for this guide.",
    image: "",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Torta+Argao+Cebu",
    sourceUrl: "https://tourism.cebu.gov.ph/explore/argao/",
    sourceLabel: "Cebu Province Tourism: Argao"
  },
  {
    id: "lapu-lapu",
    name: "Lapu-Lapu City",
    area: "Mactan Island",
    coordinates: [10.3103, 123.9494],
    specialty: "Sutukil & seafood",
    category: "Seafood",
    description: "Explore Mactan's seafood dining scene and sutukil: sugba (grilled), tuwa (stewed), and kilaw (vinegar-cured seafood).",
    association: "This is a seafood-dining area, not a claim that sutukil originated here. Restaurant pins will be added only after their locations and details are checked.",
    image: "",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Sutukil+Lapu-Lapu+City+Cebu",
    sourceUrl: "https://cebudestinations.com/guide/sutukil-explained-sugba-tula-kilaw-where-to-try",
    sourceLabel: "Sutukil guide for Cebu and Mactan"
  }
];
