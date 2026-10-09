"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Navigation, Star } from "lucide-react";
import { mapSpots, type MapSpot } from "@/lib/map-spots";

const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
  loading: () => <div className="map-loading">Preparing the Sugbo food map…</div>
});
const filters = ["All spots", "Street food", "Local favorites", "Sweets & pasalubong", "Seafood"];

export default function FoodMap() {
  const [activeFilter, setActiveFilter] = useState("All spots");
  const [selectedId, setSelectedId] = useState(mapSpots[0]?.id ?? "");
  const visibleSpots = useMemo(
    () => activeFilter === "All spots" ? mapSpots : mapSpots.filter((spot) => spot.category === activeFilter),
    [activeFilter]
  );
  const selectedSpot = visibleSpots.find((spot) => spot.id === selectedId) ?? visibleSpots[0];

  function selectSpot(spot: MapSpot) {
    setSelectedId(spot.id);
  }

  function changeFilter(filter: string) {
    setActiveFilter(filter);
    const nextSpots = filter === "All spots" ? mapSpots : mapSpots.filter((spot) => spot.category === filter);
    setSelectedId(nextSpots[0]?.id ?? "");
  }

  return (
    <div className="food-map-shell">
      <div className="map-toolbar">
        <div className="map-filter-label"><span className="map-live-dot" /> EXPLORE FOOD AREAS & RESTAURANTS</div>
        <div className="map-filters" aria-label="Filter map pins">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "map-filter active" : "map-filter"}
              aria-pressed={activeFilter === filter}
              onClick={() => changeFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="map-layout">
        <div className="map-canvas-wrap">
          <LeafletMap spots={visibleSpots} selectedId={selectedSpot?.id ?? ""} onSelect={selectSpot} />
          <div className="map-legend"><span><i /> Food area</span><span><b className="map-restaurant-legend" /> Restaurant</span><span>OpenStreetMap</span></div>
        </div>

        <aside className="map-side-panel" aria-live="polite" aria-label="Selected food area or restaurant">
          {selectedSpot ? (
            <>
              <div className="map-detail-image" style={{ backgroundImage: selectedSpot.image ? `url("${selectedSpot.image}")` : undefined }}>
                {!selectedSpot.image && <span className="map-photo-placeholder">{selectedSpot.kind === "restaurant" ? "VENUE PHOTO NOT VERIFIED" : "LOCAL FOOD PHOTO BEING VERIFIED"}</span>}
                <span className="map-detail-category">{selectedSpot.kind === "restaurant" ? "Restaurant" : selectedSpot.category}</span>
                <span className="map-detail-number">{selectedSpot.kind === "restaurant" ? <MapPin size={14} /> : `0${mapSpots.findIndex((spot) => spot.id === selectedSpot.id) + 1}`}</span>
              </div>
              <div className="map-detail-content">
                <div className="map-location-label"><MapPin size={13} /> {selectedSpot.area}</div>
                <h3>{selectedSpot.name}</h3>
                <div className="map-specialty">{selectedSpot.kind === "restaurant" ? "Try it for " : "Known for "}<strong>{selectedSpot.specialty}</strong></div>
                {selectedSpot.kind === "restaurant" && (
                  <div className="map-restaurant-meta">
                    {selectedSpot.rating && <span><Star size={13} fill="currentColor" /> {selectedSpot.rating}</span>}
                    {selectedSpot.price && <span>{selectedSpot.price}</span>}
                  </div>
                )}
                <p>{selectedSpot.description}</p>
                {selectedSpot.hours && <div className="map-restaurant-hours"><strong>Hours:</strong> {selectedSpot.hours}</div>}{selectedSpot.kind === "restaurant" && !selectedSpot.coordinates && <div className="map-association-note">Navigation fallback: open the matched Google Maps business listing for current directions. This map intentionally avoids guessing the customer entrance.</div>}
                <div className="map-association-note">{selectedSpot.association}</div>
                {selectedSpot.sourceUrl && selectedSpot.sourceLabel && (
                  <a className="map-source-link" href={selectedSpot.sourceUrl} target="_blank" rel="noreferrer">
                    Source: {selectedSpot.sourceLabel} <ArrowUpRight size={13} />
                  </a>
                )}
                <a className="map-directions" href={selectedSpot.mapLink} target="_blank" rel="noreferrer">
                  <Navigation size={15} /> {selectedSpot.kind === "restaurant" ? "Directions / verify location" : "Explore this area"} <ArrowUpRight size={15} />
                </a>
              </div>
            </>
          ) : (
            <div className="map-empty">No places match this filter yet.</div>
          )}
        </aside>
      </div>

      <div className="map-place-list">
        {visibleSpots.map((spot) => (
          <button
            type="button"
            key={spot.id}
            onClick={() => selectSpot(spot)}
            className={selectedSpot?.id === spot.id ? "map-place-row selected" : "map-place-row"}
            aria-pressed={selectedSpot?.id === spot.id}
          >
            <span className={spot.kind === "restaurant" ? "map-place-pin restaurant-pin" : "map-place-pin"}><MapPin size={16} /></span>
            <span className="map-place-row-copy"><strong>{spot.name}</strong><small>{spot.kind === "restaurant" ? spot.address : spot.specialty}</small></span>
            <ArrowUpRight size={16} />
          </button>
        ))}
      </div>
      <p className="map-disclaimer">
        Food-area pins mark broad destinations. Restaurant pins appear only when a published coordinate source was found. For venues without a defensible entrance coordinate, the list links directly to the matched Google Maps business listing instead of placing a guessed pin. Use “Directions / verify location” for current navigation and confirm the entrance shown by Maps. Ratings and prices are omitted when not recently verified, and hours can change.
      </p>
    </div>
  );
}
