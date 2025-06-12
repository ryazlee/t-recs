import { Place } from "@/models/place";
import { DocumentSnapshot } from "firebase/firestore";

export interface Guide {
	id?: string; // Optional if you're attaching Firestore doc ID
	title: string; // Title of the guide
	description: string; // Description of the guide
	slug: string; // Friendly URL slug (e.g., "ryan-nyc")
	ownerId: string; // Reference to users/{userId}
	createdAt: Date; // Timestamp when the guide was created
	updatedAt: Date; // Timestamp when the guide was last updated
	visibility: number; // Visibility options: public, private, unlisted
	categories: string[]; // List of categories
	collaborators: string[]; // List of userIds who can collaborate
	places: Place[]; // List of places in the guide
}

export function docToGuide(doc: DocumentSnapshot): Guide {
	return {
		id: doc.id,
		...(doc.data() as Omit<Guide, "id">),
	};
}
