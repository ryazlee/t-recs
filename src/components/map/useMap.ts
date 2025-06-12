import { useEffect, useRef, useState } from "react";
import { loadMapLibrary } from "@/api/googleMaps";

// Not being used atm
export function useMap(
	center: { lat: number; lng: number },
	zoom: number,
	mapId: string
) {
	const mapRef = useRef<HTMLDivElement>(null);
	const [mapObject, setMapObject] = useState<google.maps.Map | null>(null);

	useEffect(() => {
		const initMap = async () => {
			const { Map } = await loadMapLibrary();

			if (mapRef.current) {
				const mapInstance = new Map(mapRef.current, {
					center,
					zoom,
					mapId,
				});
				setMapObject(mapInstance);
			}
		};

		initMap();
	}, [center, zoom]);

	return { mapObject, mapRef };
}
