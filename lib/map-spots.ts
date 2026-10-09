import { dishes, type RestaurantSpot } from "@/lib/dishes";
import { foodPlaces, type FoodPlace } from "@/lib/places";

export type MapSpot = {
  id: string;
  name: string;
  area: string;
  coordinates?: [number, number];
  specialty: string;
  category: string;
  description: string;
  association: string;
  image: string;
  mapLink: string;
  sourceUrl?: string;
  sourceLabel?: string;
  kind: "area" | "restaurant";
  rating?: string;
  price?: string;
  address?: string;
  hours?: string;
};

// Only pins with a source-backed venue coordinate are plotted.
// Other restaurants remain in the list but have no marker until verified.
const restaurantCoordinates: Record<string, [number, number]> = {
  "House of Lechon": [10.3177322, 123.9017164],
  "Rico's Lechon": [10.3184728, 123.8961113],
  "Carbon Market": [10.29142, 123.8991],
  "STK ta Bay!": [10.313226, 123.890103]
};

const dishCategoryToMapCategory: Record<string, string> = {
  "Street food": "Street food",
  "Pangunang putahe": "Local favorites",
  "Panghimagas": "Sweets & pasalubong"
};

const areaSpots: MapSpot[] = foodPlaces.map((place: FoodPlace) => ({
  ...place,
  kind: "area"
}));

const restaurantSpots: MapSpot[] = dishes.flatMap((dish) =>
  (dish.restaurants ?? []).map((restaurant: RestaurantSpot, index) => {
    const coordinates = restaurantCoordinates[restaurant.name];
    return {
      id: `restaurant-${dish.id}-${index}`,
      name: restaurant.name,
      area: restaurant.address,
      ...(coordinates ? { coordinates } : {}),
      specialty: dish.name,
      category: dish.id === "sutukil" ? "Seafood" : dishCategoryToMapCategory[dish.category] ?? "Local favorites",
      description: restaurant.description,
      association: coordinates ? "Pin coordinates were cross-checked against a published location source. Confirm the exact entrance in Google Maps before travelling." : "Exact map coordinates have not yet been verified for this venue. Use the Google Maps link to confirm the exact entrance; no map pin is shown yet.",
      image: restaurant.image || dish.image,
      mapLink: restaurant.mapPlaceId
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapSearch)}&query_place_id=${restaurant.mapPlaceId}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapSearch)}`,
      kind: "restaurant" as const,
      rating: restaurant.rating,
      price: restaurant.price,
      address: restaurant.address,
      hours: restaurant.hours,
      sourceUrl: restaurant.sourceUrl,
      sourceLabel: restaurant.sourceLabel
    };
  })
);

export const mapSpots: MapSpot[] = [...areaSpots, ...restaurantSpots];
