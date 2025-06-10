export default function UserProfilePageComponent({ id }: { id: string }) {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">User Profile</h1>
			<p className="mb-4">This is the profile page for user {id}.</p>
			<p>Placeholder for user profile content.</p>
		</div>
	);
}
