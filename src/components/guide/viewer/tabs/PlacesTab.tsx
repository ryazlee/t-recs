import PlaceList from "@/components/guide/viewer/PlaceList";
import { Guide } from "@/models/guide";

export default function PlacesTab({ guide }: { guide: Guide }) {
	return (
		<div className="p-4">
			<PlaceList places={guide.places} />
		</div>
	);
}
