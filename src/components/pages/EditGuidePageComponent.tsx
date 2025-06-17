import { getGuide } from "@/api/guides";
import { Guide } from "@/models/guide";
import { useEffect, useState } from "react";
import GuideMap from "@/components/guide/map/GuideMap";

export default function EditGuidePageComponent({ id }: { id: string }) {
	const [currGuide, setCurrGuide] = useState<Guide | null>(null);
	const [initialGuide, setInitialGuide] = useState<Guide | null>(null);

	useEffect(() => {
		if (!id) {
			return;
		}

		const fetchGuide = async () => {
			try {
				const guideData = await getGuide(id);
				setCurrGuide(guideData);
				setInitialGuide(guideData);
			} catch (e) {
				console.error("Error fetching guide:", e);
			}
		};

		fetchGuide();
	}, [id]);

	const onResetGuide = () => {
		if (initialGuide) {
			setCurrGuide(initialGuide);
		}
	};

	const onSaveGuide = async () => {
		if (!currGuide) {
			console.error("No current guide to save.");
			return;
		}
		try {
			// TODO: add save logic here
			console.log("Guide saved:", currGuide);
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
					<form
						onSubmit={(e) => {
							e.preventDefault();
							onSaveGuide();
						}}
						className="lg:w-1/4 lg:pr-4"
					>
						<div className="mb-4">
							<h1 className="text-2xl font-bold mb-4">
								Edit Guide
							</h1>
							<label
								htmlFor="title"
								className="block text-sm font-medium text-gray-700"
							>
								Title
							</label>
							<input
								type="text"
								id="title"
								value={currGuide.title}
								onChange={(e) =>
									setCurrGuide({
										...currGuide,
										title: e.target.value,
									})
								}
								className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="description"
								className="block text-sm font-medium text-gray-700"
							>
								Description
							</label>
							<textarea
								id="description"
								value={currGuide.description}
								onChange={(e) =>
									setCurrGuide({
										...currGuide,
										description: e.target.value,
									})
								}
								className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="categories"
								className="block text-sm font-medium text-gray-700"
							>
								Categories (comma-separated)
							</label>
							<input
								type="text"
								id="categories"
								value={currGuide.categories?.join(", ") || ""}
								onChange={(e) =>
									setCurrGuide({
										...currGuide,
										categories: e.target.value
											.split(",")
											.map((cat) => cat.trim()),
									})
								}
								className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2"
							/>
						</div>
						<div className="flex space-x-2 mb-4">
							<button
								type="button"
								onClick={onResetGuide}
								className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg"
							>
								Reset
							</button>
							<button
								type="submit"
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
							>
								Save Guide
							</button>
						</div>
						<div>
							View guide as{" "}
							<a
								href={`/guide/${id}`}
								className="text-blue-500 hover:underline"
							>
								Public
							</a>
						</div>
					</form>
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
