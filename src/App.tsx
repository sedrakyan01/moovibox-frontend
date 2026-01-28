import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Overview from '@/pages/Overview/Overview'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Overview />}></Route>
          <Route path='*' element={<div className='text-white text-center text-2xl'>404</div>}></Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
