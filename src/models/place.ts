import { Timestamp } from "firebase/firestore";

export interface Place {
	id: string; // Unique identifier for the place
	guideId: string; // Reference to the guide this place belongs to
	description: string; // Description of the place
	name: string; // e.g., "Ippudo Ramen"
	categories: string[]; // e.g., ["food", "activity", "sight"]
	lat: number; // Latitude of the place
	lng: number; // Longitude of the place
	rating?: number; // Rating out of 10 or 5
	tip?: string; // Short message shown to the user
	comments: string[]; // Array of user comments
	imageUrls: string[]; // Array of Firebase Storage URLs
	tags: string[]; // e.g., ["no-reservations", "cozy", "vegan"]
	addedBy: string; // Reference to users/id
	createdAt: Date; // Date when the place was created
	updatedAt: Date; // Date when the place was last updated
	creator: string; // Reference to users/id of the creator
	collaborators: string[]; // List of userIds who can collaborate on this place
}
