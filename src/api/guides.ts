import { clientDb } from "@/backend/firebase/client";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function getGuide(id: string) {
	const docRef = doc(clientDb, "guides", id);
	const snap = await getDoc(docRef);
	if (!snap.exists()) throw new Error("Guide not found");
	return { id: snap.id, ...snap.data() };
}

export async function getAllGuides() {
	const snapshot = await getDocs(collection(clientDb, "guides"));
	return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
