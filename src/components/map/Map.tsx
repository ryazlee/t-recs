import { useEffect, useRef } from "react";
import { loadMapLibrary } from "@/api/googleMaps";

export default function Map() {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const initMap = async () => {
			const { Map } = await loadMapLibrary();

			if (mapRef.current) {
				new Map(mapRef.current, {
					center: { lat: 37.7749, lng: -122.4194 },
					zoom: 12,
				});
			}
		};

		initMap();
	}, []);

	return <div ref={mapRef} className="w-full h-96" />;
}
