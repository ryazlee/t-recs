export default function GuidePageComponent({ id }: { id: string }) {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Guide: {id}</h1>
			<p className="mb-4">
				Placeholder for guide content. This is where the guide details
				will be displayed.
			</p>
			You can create a new guide by navigating to the{" "}
			<a href="/guide/create" className="text-blue-500 underline">
				New Guide
			</a>{" "}
			page.
		</div>
	);
}
