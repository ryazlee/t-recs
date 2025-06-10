import { api } from "@/api";
import { useEffect, useState } from "react";

import Map from "@/components/Map";
import { getGuide } from "@/api/guides";

export default function GuidePageComponent({ id }: { id: string }) {
	const [guide, setGuide] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) {
			return;
		}

		const fetchGuide = async () => {
			try {
				const guideData = await getGuide(id);
				setGuide(guideData);
			} catch (e) {
				console.error("Error fetching guide:", e);
				setError(e instanceof Error ? e.message : "An error occurred");
			}
		};

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
					<Map />
				</>
			) : (
				<p>Loading guide...</p>
			)}
		</div>
	);
}
