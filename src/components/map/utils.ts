import { loadMapLibrary } from "@/api/googleMaps";
import { Place } from "@/models/place";

// Not being used atm
export const createMapMarkers = async (
	places: Place[],
	map: google.maps.Map
): Promise<google.maps.marker.AdvancedMarkerElement[]> => {
	const { AdvancedMarkerElement } = await loadMapLibrary();
	const markers = places.map((place) => {
		const node: Node = document.createElement("div");
		node.textContent = place.name;
		return new AdvancedMarkerElement({
			position: { lat: place.lat, lng: place.lng },
			title: place.name,
			content: node,
			map,
		});
	});
	return markers;
};
