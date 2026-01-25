import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/test/setup.ts',
		coverage: {
			reporter: ['text', 'html'],
			lines: 80,
			functions: 80,
			branches: 70,
			statements: 80,
		},
	},
})
