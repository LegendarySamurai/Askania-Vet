import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import AboutUs from './pages/about/about-us.component';
import Header from './components/header/header.component';

function App () {
	return (
		<div className="App">
			<Header/>
			<Switch>
				{/*<Route exact path="/" component={ HomePage }/>*/}
				{/*<Route exact path="/about" component={ AboutUs }/>*/}
			</Switch>
		</div>
	);
}

export default App;
