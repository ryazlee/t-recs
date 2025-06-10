import { guideConverter } from "@/backend/db/guides";
import { clientDb } from "@/backend/firebase/client";
import { Guide } from "@/models/guide";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export async function getGuide(id: string): Promise<Guide> {
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
