import { useEffect, useState } from "react";

import GuideMap from "@/components/guide/map/GuideMap";
import { getGuide } from "@/api/guides";
import MetadataTab from "@/components/guide/viewer/tabs/MetadataTab";
import PlacesTab from "@/components/guide/viewer/tabs/PlacesTab";
import ReviewsTab from "@/components/guide/viewer/tabs/ReviewsTab";
import { Guide } from "@/models/guide";

const TABS = ["Metadata", "Places", "Reviews"];

export default function GuidePageComponent({ id }: { id: string }) {
	const [guide, setGuide] = useState<Guide | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState("Metadata");

	useEffect(() => {
		if (!id) return;

		const fetchGuide = async () => {
			try {
				const guideData = await getGuide(id);
				setGuide({ ...guideData });
			} catch (e) {
				console.error("Error fetching guide:", e);
				setError(e instanceof Error ? e.message : "An error occurred");
			}
		};

		fetchGuide();
	}, [id]);

	const renderTabContent = () => {
		if (!guide) return <p>Loading guide...</p>;

		switch (activeTab) {
			case "Metadata":
				return <MetadataTab guide={guide} />;
			case "Places":
				return <PlacesTab guide={guide} />;
			case "Reviews":
				return <ReviewsTab guide={guide} />;
			default:
				return null;
		}
	};

	return (
		<div className="container mx-auto p-4 flex flex-col lg:flex-row ">
			{/* Left Panel: Tabs + Content */}
			<div className="w-full lg:w-1/3 mb-4 lg:mb-0 overflow-y-auto">
				<h1 className="text-2xl font-bold mb-4 ">{guide?.title}</h1>
				{error ? (
					<p className="text-red-500">{error}</p>
				) : (
					<>
						{/* Tabs */}
						<div className="flex space-x-2 mb-4">
							{TABS.map((tab) => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`px-4 py-2 rounded-md whitespace-nowrap ${
										activeTab === tab
											? "bg-blue-100 text-blue-800 font-semibold"
											: "hover:bg-gray-100"
									}`}
								>
									{tab}
								</button>
							))}
						</div>

						{/* Panel Content */}
						<div>{renderTabContent()}</div>
					</>
				)}
			</div>

			{/* Right Panel: Map */}
			<div className="w-full lg:w-2/3 lg:pl-4 h-full">
				{/* <GuideMap guide={guide} /> */}
				placeholder
			</div>
		</div>
	);
}
