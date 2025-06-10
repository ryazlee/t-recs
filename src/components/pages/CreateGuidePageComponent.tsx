import Head from "next/head";

export default function CreateGuidePageComponent() {
	return (
		<>
			<Head>
				<title>New Guide | T-Recs</title>
			</Head>
			<div className="container mx-auto p-4">
				<h1 className="text-2xl font-bold mb-4">Create a New Guide</h1>
				<p className="mb-4">
					This is where you can create a new guide for T-Recs!
				</p>
			</div>
		</>
	);
}
