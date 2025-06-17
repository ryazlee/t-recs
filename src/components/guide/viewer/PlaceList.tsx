import { Place } from "@/models/place";

function PlaceListComponent({
	place,
	onClickPlaceLink,
}: {
	place: Place;
	onClickPlaceLink: (place: Place) => void;
}) {
	return (
		<div onClick={() => onClickPlaceLink(place)}>
			{place.name} ({place.lat}, {place.lng})
		</div>
	);
}

export default function PlaceList({ places }: { places: Place[] }) {
	return (
		<ul className="list-disc pl-5">
			{places.map((place) => (
				<li>
					<PlaceListComponent
						place={place}
						onClickPlaceLink={(place) => {
							console.log(`Place ${place.name} was clicked`);
						}}
					/>
				</li>
			))}
		</ul>
	);
}
