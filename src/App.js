import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { requireAuth } from './utils/authUtils';

// Layouts
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

// Pages
import Home from './pages/Index'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
	return (
		
		<Router >
		<Switch >
			<MainLayout>
				
					<Route exact path="/" component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={SignUp} />
					<Route path='/dashboard' component={Dashboard} />
				
			</MainLayout>
			</Switch>
		</Router>
		
	)
};

export default App;
