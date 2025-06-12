import { useEffect, useState } from "react";

import Map from "@/components/map/Map";
import { getGuide } from "@/api/guides";
import { fakeDataApi } from "@/api";

export default function GuidePageComponent({ id }: { id: string }) {
	const [guide, setGuide] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!id) {
			return;
		}

		const fetchGuide = async () => {
			if (id === "fake") {
				setGuide(fakeDataApi.getGuide(id));
				return;
			}

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
		<div className="container mx-auto p-4 flex flex-col lg:flex-row">
			<div className="lg:w-1/4">
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
						<a
							href={`/guide/edit/${id}`}
							className="text-blue-500 hover:underline"
						>
							Edit Guide
						</a>
					</>
				) : (
					<p>Loading guide...</p>
				)}
			</div>
			<div className="lg:w-3/4 lg:pl-4">
				<Map />
			</div>
		</div>
	);
}
