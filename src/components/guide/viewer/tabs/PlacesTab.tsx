import { Guide } from "@/models/guide";

export default function PlacesTab({ guide }: { guide: Guide }) {
	return (
		<div className="p-4">
			<ul className="list-disc pl-5">
				{guide.places?.map((place) => (
					<li key={place.id} className="mb-2">
						<strong>{place.name}</strong>: {place.description}
					</li>
				))}
			</ul>
		</div>
	);
}
