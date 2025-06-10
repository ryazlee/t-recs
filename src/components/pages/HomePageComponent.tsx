import { dinoAscii } from "@/assets/dino";

export default function HomePageComponent() {
	return (
		<>
			<div className="text-center p-4 rounded">
				<h1 className="text-2xl font-bold mb-4">
					Welcome to T-Recs! Roarrrrrrrr
				</h1>
				<pre className="font-mono text-xs mb-">{dinoAscii}</pre>
				<p className="text-s mb-2">Glad you are here, friend!</p>
				<div>
					Please check out the{" "}
					<a
						href="/guide/dummyguide"
						className="text-blue-500 underline"
					>
						dummy guide
					</a>{" "}
					first!
				</div>
			</div>
		</>
	);
}
