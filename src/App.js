import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './fonts.css';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const Hats = () => {
	return (
		<div>
			<h1>HATS PAGE</h1>
		</div>
	)
}

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop/hats' component={Hats}/>
			</Switch>
		</>
	);
}

export default App;
