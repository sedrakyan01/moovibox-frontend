import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryProvider } from './app/providers/queryProvider.tsx'
import './fonts.css'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryProvider>
			<App />
		</QueryProvider>
	</StrictMode>,
)
