import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
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
