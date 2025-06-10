import {
	DocumentData,
	QueryDocumentSnapshot,
	SnapshotOptions,
} from "firebase/firestore";
import { Guide } from "@/models/guide";

export const guideConverter = {
	toFirestore(guide: Omit<Guide, "id">): DocumentData {
		return guide;
	},
	fromFirestore(
		snap: QueryDocumentSnapshot,
		options: SnapshotOptions
	): Guide {
		const data = snap.data(options);
		return {
			id: snap.id,
			...data,
		} as Guide;
	},
};
