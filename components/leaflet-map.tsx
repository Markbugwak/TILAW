"use client";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import type { MapSpot } from "@/lib/map-spots";

const areaPinIcon = L.divIcon({
  className: "tilaw-map-pin-shell",
  html: '<span class="tilaw-map-pin"><span></span></span>',
  iconSize: [30, 38],
  iconAnchor: [15, 34],
  popupAnchor: [0, -32]
});
const restaurantPinIcon = L.divIcon({
  className: "tilaw-map-pin-shell",
  html: '<span class="tilaw-map-pin restaurant"><span></span></span>',
  iconSize: [30, 38],
  iconAnchor: [15, 34],
  popupAnchor: [0, -32]
});

function MapFocus({ spot }: { spot?: MapSpot }) {
  const map = useMap();
  useEffect(() => {
    if (spot) map.flyTo(spot.coordinates, spot.kind === "restaurant" ? 15 : 9, { duration: 0.7 });
  }, [map, spot]);
  return null;
}

export default function LeafletMap({ spots, selectedId, onSelect }: { spots: MapSpot[]; selectedId: string; onSelect: (spot: MapSpot) => void }) {
  const selectedSpot = spots.find((spot) => spot.id === selectedId);
  return <MapContainer center={[10.17, 123.78]} zoom={9} minZoom={8} maxZoom={18} scrollWheelZoom={false} className="tilaw-leaflet-map">
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <MapFocus spot={selectedSpot} />
    {spots.map((spot) => (
      <Marker
        key={spot.id}
        position={spot.coordinates}
        icon={spot.kind === "restaurant" ? restaurantPinIcon : areaPinIcon}
        eventHandlers={{ click: () => onSelect(spot) }}
      >
        <Popup>
          <div className="tilaw-popup">
            <strong>{spot.name}</strong>
            <span>{spot.specialty}</span>
            {spot.kind === "restaurant" && (
              <span>{[spot.rating ? `★ ${spot.rating}` : "", spot.price ?? ""].filter(Boolean).join(" · ")}</span>
            )}
            {spot.address && <span>{spot.address}</span>}
            <button type="button" onClick={() => onSelect(spot)}>View details</button>
            <a href={spot.mapLink} target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>;
}
