import { getGuide } from "@/api/guides";
import { Guide } from "@/models/guide";
import { useEffect, useState } from "react";
import GuideMap from "@/components/guide/map/GuideMap";
import GuideEditorForm from "@/components/guide/editor/GuideEditorForm";

export default function EditGuidePageComponent({ id }: { id: string }) {
	const [currGuide, setCurrGuide] = useState<Guide | null>(null);

	useEffect(() => {
		if (!id) {
			return;
		}

		const fetchGuide = async () => {
			try {
				const guideData = await getGuide(id);
				setCurrGuide(guideData);
			} catch (e) {
				console.error("Error fetching guide:", e);
			}
		};

		fetchGuide();
	}, [id]);

	const onSaveGuide = async (guide: Guide) => {
		if (!currGuide) {
			console.error("No current guide to save.");
			return;
		}
		try {
			// TODO: add save logic here
			console.log("Guide saved:", guide);
		} catch (e) {
			console.error("Error saving guide:", e);
		}
	};

	if (!id) {
		return (
			<div className="container mx-auto p-4">No guide ID provided.</div>
		);
	}

	return (
		<div className="container mx-auto p-4">
			{currGuide ? (
				<div className="flex flex-col lg:flex-row">
					<GuideEditorForm
						onSaveGuide={onSaveGuide}
						initialGuide={currGuide}
					/>
					<div className="lg:w-3/4">
						<GuideMap guide={currGuide} />
					</div>
				</div>
			) : (
				<p>Loading guide...</p>
			)}
		</div>
	);
}
