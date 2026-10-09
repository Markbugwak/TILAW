export type FoodPlace = {
  id: string; name: string; area: string; coordinates: [number, number];
  specialty: string; category: string; description: string;
  association: string; image: string; mapLink: string;
};

// Pins mark towns or food areas associated with a dish, not exact restaurant addresses.
export const foodPlaces: FoodPlace[] = [
  { id: "cebu-city", name: "Cebu City", area: "Metro Cebu · Central Cebu", coordinates: [10.3157, 123.8854], specialty: "Ngohiong & puso", category: "Street food", description: "Explore the city's street-food culture, from ngohiong stalls to puso often paired with grilled food.", association: "A food scene rather than a single dish-origin claim. Specific eateries can be added after their locations are verified.", image: "", mapLink: "https://www.google.com/maps/search/?api=1&query=Cebu+City%2C+Cebu%2C+Philippines" },
  { id: "carcar", name: "Carcar City", area: "Southern Cebu", coordinates: [10.1061, 123.6402], specialty: "Lechon & chicharon", category: "Local favorites", description: "A southern Cebu stop associated with lechon, chicharon, and local delicacies sold around the city.", association: "Town-level food association. This pin represents the area, not a specific stall or shop.", image: "", mapLink: "https://www.google.com/maps/search/?api=1&query=Carcar+City%2C+Cebu%2C+Philippines" },
  { id: "argao", name: "Argao", area: "Southeastern Cebu", coordinates: [9.8790, 123.5950], specialty: "Torta sa Argao", category: "Sweets & pasalubong", description: "Discover the traditional torta associated with Argao and its local baking heritage.", association: "A town-level specialty. Visit a verified local bakery for an exact shop pin.", image: "", mapLink: "https://www.google.com/maps/search/?api=1&query=Torta+Argao+Cebu" },
  { id: "lapu-lapu", name: "Lapu-Lapu City", area: "Mactan Island", coordinates: [10.3103, 123.9494], specialty: "Sutukil & seafood", category: "Seafood", description: "Explore Mactan's seafood dining scene and the local sutukil style: sugba, tuwa, and kilaw.", association: "A seafood-dining area, not a claim that sutukil originated here. Add restaurant pins only after verification.", image: "", mapLink: "https://www.google.com/maps/search/?api=1&query=Sutukil+Lapu-Lapu+City+Cebu" }
];