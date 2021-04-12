import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Server from './pages/Server'
import ServerMain from './pages/ServerMain'
import Net from './pages/Net'
import Administration from './pages/Administration'
import OneCDB from './pages/1cDatabase'
import OneCStaff from './pages/1cStaff'
import OneCRemoute from './pages/1cRemoute'
import DNS from './pages/dns'
import SSL from './pages/ssl'

function App() {
	return (
		<main className='main'>
			<Router>
				<Sidebar />
				<Switch>
					<Route path='/server' exact component={Server} />
					<Route path='/server/info' component={ServerMain} />
					<Route path='/nets' exact component={Net} />
					<Route path='/administration' component={Administration} />
					<Route path='/1с/db' component={OneCDB} />
					<Route path='/1с/staff' component={OneCStaff} />
					<Route path='/1с/remoute' component={OneCRemoute} />
					<Route path='/dns' component={DNS} />
					<Route path='/ssl' component={SSL} />
				</Switch>
			</Router>
		</main>
	)
}

export default App
