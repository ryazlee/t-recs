import { Guide } from "@/models/guide";

export const getGuideMapBounds = (
	guide?: Guide
): { center: { lat: number; lng: number }; zoom: number } => {
	// TODO: add some calculations based ont he guide places to figure out where to
	// center and zoom map
	const defaultMapBounds = {
		center: { lat: 37.7749, lng: -122.4194 },
		zoom: 12,
	};

	if (!guide) {
		return defaultMapBounds;
	} else {
		return defaultMapBounds;
	}
};
