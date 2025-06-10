export default function Footer() {
	return (
		<footer className="bg-white border-t border-gray-200 text-gray-500 text-sm py-4 mt-8">
			<div className="container mx-auto text-center">
				<p>
					&copy; {new Date().getFullYear()}{" "}
					<span className="font-semibold text-gray-700">T-Recs</span>.
					All rights reserved.
				</p>
			</div>
		</footer>
	);
}
