import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Header />
			<main className="flex-grow flex items-center justify-center ">
				<div className="w-full max-w-5xl px-4 py-8">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
