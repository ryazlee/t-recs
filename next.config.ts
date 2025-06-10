import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/g/:id",
				destination: "/guide/:id",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
