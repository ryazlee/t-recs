export default function Header() {
	return (
		<header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
			<div
				onClick={() => (window.location.href = "/")}
				className="flex items-center gap-2"
				style={{ cursor: "pointer" }}
			>
				<span className="text-3xl">🦖</span>
				<span className="text-2xl font-bold text-gray-800 tracking-tight italic">
					T-Recs
				</span>
			</div>
			<nav>
				<a href="/" className="text-gray-600 hover:text-blue-600 px-3">
					Home
				</a>
				<a
					href="/guide/create"
					className="text-gray-600 hover:text-blue-600 px-3"
				>
					New Guide
				</a>
				<a
					href="/profile/me"
					className="text-gray-600 hover:text-blue-600 px-3"
				>
					My Profile
				</a>
			</nav>
		</header>
	);
}
