import { guideConverter } from "@/backend/db/guides";
import { clientDb } from "@/backend/firebase/client";
import { Guide } from "@/models/guide";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

const fakeGuide: Guide = {
	id: "fake",
	title: `Fake Guide`,
	description: `This is a fake guide description for guide fakeGuideId.`,
	categories: ["Category 1", "Category 2"],
	createdAt: new Date(),
	updatedAt: new Date(),
	places: [
		{
			id: "place1",
			guideId: "fake",
			name: "Fake Place 1",
			description: "This is a description for fake place 1.",
			lat: 37.7749 + Math.random() * 0.01, // Random offset for variety
			lng: -122.4194 + Math.random() * 0.01,
			categories: ["food", "activity"],
			rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
			tip: "This is a tip for fake place 1.",
			comments: ["Great place!", "Loved it!"],
			imageUrls: [
				"https://example.com/image1.jpg",
				"https://example.com/image2.jpg",
			],
			tags: ["popular", "must-visit"],
			addedBy: "user1",
			createdAt: new Date(),
			updatedAt: new Date(),
			creator: "user1",
			collaborators: ["user2", "user3"],
		},
		{
			id: "place2",
			guideId: "fake",
			name: "Fake Place 2",
			description: "This is a description for fake place 2.",
			lat: 37.7749 + Math.random() * 0.01, // Random offset for variety
			lng: -122.4194 + Math.random() * 0.01,
			categories: ["sight", "activity"],
			rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
			tip: "This is a tip for fake place 2.",
			comments: ["Amazing view!", "A must-see!"],
			imageUrls: [
				"https://example.com/image3.jpg",
				"https://example.com/image4.jpg",
			],
			tags: ["scenic", "photogenic"],
			addedBy: "user2",
			createdAt: new Date(),
			updatedAt: new Date(),
			creator: "user2",
			collaborators: ["user1", "user3"],
		},
	],
	slug: `fake-guide`,
	ownerId: "fakeOwnerId",
	visibility: 1, // Assuming 1 is public
	collaborators: ["user1", "user2"],
};

export async function getGuide(id: string): Promise<Guide> {
	if (id === "fake") {
		return Promise.resolve(fakeGuide);
	}
	const docRef = doc(clientDb, "guides", id).withConverter(guideConverter);
	const snap = await getDoc(docRef);
	if (!snap.exists()) throw new Error("Guide not found");
	return snap.data(); // already typed as Guide
}

export async function getAllGuides(): Promise<Guide[]> {
	const colRef = collection(clientDb, "guides").withConverter(guideConverter);
	const snapshot = await getDocs(colRef);
	return snapshot.docs.map((doc) => doc.data()); // returns Guide[]
}
