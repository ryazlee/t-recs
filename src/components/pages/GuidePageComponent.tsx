import { clientDb } from "@/backend/firebase/client";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function GuidePageComponent({ id }: { id: string }) {
	const [guide, setGuide] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchGuide() {
			if (!id) {
				console.warn("No guide ID provided!");
				return;
			}
			const docRef = doc(clientDb, "guides", id);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setGuide(docSnap.data());
				setError(null); // Clear any previous error
			} else {
				setError("No such guide exists!");
			}
		}
		fetchGuide();
	}, [id]);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Guide</h1>
			{error ? (
				<p className="text-red-500">{error}</p>
			) : guide ? (
				<>
					<h2 className="text-xl font-semibold mb-2">
						{guide.title}
					</h2>
					<p className="mb-4">{guide.description}</p>
					<h3>Categories</h3>
					<ul className="list-disc pl-5 mb-4">
						{guide.categories?.map(
							(category: string, index: number) => (
								<li key={index} className="mb-1">
									{category}
								</li>
							)
						)}
					</ul>
				</>
			) : (
				<p>Loading guide...</p>
			)}
		</div>
	);
}
