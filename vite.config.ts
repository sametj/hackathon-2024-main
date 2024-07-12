import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	plugins: [svgr(), react()],
	assetsInclude: ["**/*.glb"],
	server: { host: true },
	resolve: {
		alias: {
			"@root": "/src",
			"@features": "/src/features",
			"@assets": "/src/assets",
			"@hooks": "/src/hooks",
		},
	},
});
