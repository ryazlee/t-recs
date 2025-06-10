import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
	apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
	version: "weekly",
});

export const loadMapLibrary = async () => {
	const { Map } = (await loader.importLibrary(
		"maps"
	)) as google.maps.MapsLibrary;
	return Map;
};
