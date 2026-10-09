import { dishes, type RestaurantSpot } from "@/lib/dishes";
import { foodPlaces, type FoodPlace } from "@/lib/places";

export type MapSpot = {
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
  sourceUrl?: string;
  sourceLabel?: string;
  kind: "area" | "restaurant";
  rating?: string;
  price?: string;
  address?: string;
  hours?: string;
};

// Restaurant coordinates are neighborhood-level approximations based on the
// supplied addresses. The Google Maps links open a live search for the exact
// venue, so visitors can confirm the entrance and current location.
const restaurantCoordinates: Record<string, [number, number]> = {
  "House of Lechon": [10.3157, 123.8995],
  "House of Lechon — J Centre": [10.3332, 123.9317],
  "House of Lechon — Banilad": [10.3420, 123.9125],
  "Rico's Lechon": [10.3165, 123.8972],
  "New Carcar City Public Market": [10.1061, 123.6402],
  "Carbon Market": [10.2965, 123.9021],
  "Ann's Ngohiong by Doming's": [10.3072, 123.8840],
  "Doming's Ngohiong": [10.2947, 123.8982],
  "STK ta Bay!": [10.2960, 123.8973],
  "STK ta Bay! — SM City Cebu": [10.3104, 123.9185],
  "Azul": [10.3220, 123.8992],
  "Kusina Clasica": [10.3210, 123.9122],
  "Pochero Kinaraan": [10.3216, 123.9070]
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
    const coordinates = restaurantCoordinates[restaurant.name] ?? [10.3157, 123.8854];
    return {
      id: `restaurant-${dish.id}-${index}`,
      name: restaurant.name,
      area: restaurant.address,
      coordinates,
      specialty: dish.name,
      category: dish.id === "sutukil" ? "Seafood" : dishCategoryToMapCategory[dish.category] ?? "Local favorites",
      description: restaurant.description,
      association: "Restaurant details and ratings are based on the information supplied for this guide. Check the venue's current listing before visiting.",
      image: restaurant.image ?? dish.image,
      mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.mapSearch)}`,
      kind: "restaurant" as const,
      rating: restaurant.rating,
      price: restaurant.price,
      address: restaurant.address,
      hours: restaurant.hours
    };
  })
);

export const mapSpots: MapSpot[] = [...areaSpots, ...restaurantSpots];
