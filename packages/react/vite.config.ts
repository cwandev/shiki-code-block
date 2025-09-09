import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ["./src/**/*"],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "shiki-react-code-block",
			formats: ["es", "cjs"],
			fileName: (format: string) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", "shiki"],
			output: {
				globals: {
					react: "React",
				},
			},
		},
	},
});
