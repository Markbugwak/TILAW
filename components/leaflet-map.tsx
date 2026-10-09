"use client";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import type { FoodPlace } from "@/lib/places";

const pinIcon = L.divIcon({ className: "tilaw-map-pin-shell", html: '<span class="tilaw-map-pin"><span></span></span>', iconSize: [30, 38], iconAnchor: [15, 34], popupAnchor: [0, -32] });

function MapFocus({ place }: { place?: FoodPlace }) {
  const map = useMap();
  useEffect(() => { if (place) map.flyTo(place.coordinates, Math.max(map.getZoom(), 9), { duration: 0.7 }); }, [map, place]);
  return null;
}

export default function LeafletMap({ places, selectedId, onSelect }: { places: FoodPlace[]; selectedId: string; onSelect: (place: FoodPlace) => void }) {
  const selectedPlace = places.find((place) => place.id === selectedId);
  return <MapContainer center={[10.17, 123.78]} zoom={9} minZoom={8} maxZoom={17} scrollWheelZoom={false} className="tilaw-leaflet-map">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <MapFocus place={selectedPlace} />
    {places.map((place) => <Marker key={place.id} position={place.coordinates} icon={pinIcon} eventHandlers={{ click: () => onSelect(place) }}>
      <Popup><div className="tilaw-popup"><strong>{place.name}</strong><span>{place.specialty}</span><button type="button" onClick={() => onSelect(place)}>Explore this pin</button></div></Popup>
    </Marker>)}
  </MapContainer>;
}