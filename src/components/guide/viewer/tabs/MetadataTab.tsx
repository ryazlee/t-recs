import { Guide } from "@/models/guide";

export default function MetadataTab({ guide }: { guide: Guide }) {
	return (
		<>
			<h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
			<p className="mb-4">{guide.description}</p>
			<h3 className="font-semibold">Categories</h3>
			<ul className="list-disc pl-5 mb-4">
				{guide.categories?.map((category: string, index: number) => (
					<li key={index} className="mb-1">
						{category}
					</li>
				))}
			</ul>
			<a
				href={`/guide/edit/${guide.id}`}
				className="text-blue-500 hover:underline"
			>
				Edit Guide
			</a>
		</>
	);
}
