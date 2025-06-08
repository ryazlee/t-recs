import { dinoAscii } from "@/assets/dino";

export default function HomePageComponent() {
	return (
		<>
			<div className="text-center p-4 rounded">
				<h1 className="text-2xl font-bold mb-2">
					Welcome to T-Recs! Roarrrrrrrr
				</h1>
				<pre className="font-mono text-sm mb-8">{dinoAscii}</pre>
				<p className="text-lg mb-4">Glad you are here, friend!</p>
			</div>
		</>
	);
}
