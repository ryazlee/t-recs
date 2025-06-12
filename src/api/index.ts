import * as guides from "./guides";
import * as googleMaps from "./googleMaps";
import { Guide } from "@/models/guide";

/**
 * API module that aggregates all API endpoints.
 */
export const api = {
	guides,
	googleMaps,
};

export const fakeDataApi = {
	getGuide: (id: string): Guide => {
		const fakeGuide: Guide = {
			id,
			title: `Fake Guide ${id}`,
			description: `This is a fake guide description for guide ${id}.`,
			categories: ["Category 1", "Category 2"],
			createdAt: new Date(),
			updatedAt: new Date(),
			places: [
				{
					id: "place1",
					guideId: id,
					name: "Fake Place 1",
					description: "This is a description for fake place 1.",
					lat: 40.7128 + Math.random() * 0.01, // Random offset for variety
					lng: -74.006 + Math.random() * 0.01,
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
					guideId: id,
					name: "Fake Place 2",
					description: "This is a description for fake place 2.",
					lat: 40.7128 + Math.random() * 0.01, // Random offset for variety
					lng: -74.006 + Math.random() * 0.01,
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
			slug: `fake-guide-${id}`,
			ownerId: "fakeOwnerId",
			visibility: 1, // Assuming 1 is public
			collaborators: ["user1", "user2"],
		};

		return fakeGuide;
	},
};
