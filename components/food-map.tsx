"use client";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";
import { foodPlaces, type FoodPlace } from "@/lib/places";

const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
  loading: () => <div className="map-loading">Preparing the Sugbo food map…</div>
});
const filters = ["All spots", "Street food", "Local favorites", "Sweets & pasalubong", "Seafood"];

export default function FoodMap() {
  const [activeFilter, setActiveFilter] = useState("All spots");
  const [selectedId, setSelectedId] = useState(foodPlaces[0].id);
  const visiblePlaces = useMemo(
    () => activeFilter === "All spots" ? foodPlaces : foodPlaces.filter((place) => place.category === activeFilter),
    [activeFilter]
  );
  const selectedPlace = visiblePlaces.find((place) => place.id === selectedId) ?? visiblePlaces[0];

  function selectPlace(place: FoodPlace) {
    setSelectedId(place.id);
  }

  function changeFilter(filter: string) {
    setActiveFilter(filter);
    const nextPlaces = filter === "All spots" ? foodPlaces : foodPlaces.filter((place) => place.category === filter);
    if (nextPlaces.length) setSelectedId(nextPlaces[0].id);
  }

  return (
    <div className="food-map-shell">
      <div className="map-toolbar">
        <div className="map-filter-label"><span className="map-live-dot" /> EXPLORE BY PLACE</div>
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
          <LeafletMap places={visiblePlaces} selectedId={selectedPlace?.id ?? ""} onSelect={selectPlace} />
          <div className="map-legend"><span><i /> Food area</span><span>OpenStreetMap</span></div>
        </div>

        <aside className="map-side-panel" aria-live="polite" aria-label="Selected food area">
          {selectedPlace ? (
            <>
              <div className="map-detail-image" style={{ backgroundImage: selectedPlace.image ? `url("${selectedPlace.image}")` : undefined }}>
                {!selectedPlace.image && <span className="map-photo-placeholder">LOCAL FOOD PHOTO BEING VERIFIED</span>}
                <span className="map-detail-category">{selectedPlace.category}</span>
                <span className="map-detail-number">0{foodPlaces.findIndex((place) => place.id === selectedPlace.id) + 1}</span>
              </div>
              <div className="map-detail-content">
                <div className="map-location-label"><MapPin size={13} /> {selectedPlace.area}</div>
                <h3>{selectedPlace.name}</h3>
                <div className="map-specialty">Known for <strong>{selectedPlace.specialty}</strong></div>
                <p>{selectedPlace.description}</p>
                <div className="map-association-note">{selectedPlace.association}</div>
                <a className="map-source-link" href={selectedPlace.sourceUrl} target="_blank" rel="noreferrer">
                  Source: {selectedPlace.sourceLabel} <ArrowUpRight size={13} />
                </a>
                <a className="map-directions" href={selectedPlace.mapLink} target="_blank" rel="noreferrer">
                  <Navigation size={15} /> Explore this area <ArrowUpRight size={15} />
                </a>
              </div>
            </>
          ) : (
            <div className="map-empty">No places match this filter yet.</div>
          )}
        </aside>
      </div>

      <div className="map-place-list">
        {visiblePlaces.map((place) => (
          <button
            type="button"
            key={place.id}
            onClick={() => selectPlace(place)}
            className={selectedPlace?.id === place.id ? "map-place-row selected" : "map-place-row"}
            aria-pressed={selectedPlace?.id === place.id}
          >
            <span className="map-place-pin"><MapPin size={16} /></span>
            <span className="map-place-row-copy"><strong>{place.name}</strong><small>{place.specialty}</small></span>
            <ArrowUpRight size={16} />
          </button>
        ))}
      </div>
      <p className="map-disclaimer">
        Pins represent food areas and town-level specialties, not verified restaurant addresses. Source links support the local food associations; they do not verify individual eateries. Restaurant pins will be added only after checking their location and details.
      </p>
    </div>
  );
}
