import { useEffect, useRef } from "react";
import { loadMapLibrary } from "@/api/googleMaps";
import { Guide } from "@/models/guide";

export default function GuideMap({ guide }: { guide?: Guide }) {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const initMap = async () => {
			const { Map, AdvancedMarkerElement } = await loadMapLibrary();

			if (mapRef.current) {
				const map = new Map(mapRef.current, {
					center: { lat: 37.7749, lng: -122.4194 },
					zoom: 12,
					mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!,
				});

				if (guide?.places) {
					guide.places.forEach((place) => {
						new AdvancedMarkerElement({
							position: { lat: place.lat, lng: place.lng },
							title: place.name,
							map,
						});
					});
				}
			}
		};

		initMap();
	}, [guide]);

	return <div ref={mapRef} className="w-full h-96" />;
}
