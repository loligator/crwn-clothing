import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './fonts.css';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

function App() {
	return (
		<>
			<Header/>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={Shop}/>
			</Switch>
		</>
	);
}

export default App;
