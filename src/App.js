import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import AboutUs from './pages/about/about-us.component';

import PageHeader from './components/page-header/page-header.component';
import PageFooter from './components/page-footer/page-footer.component';

function App () {
	return (
		<div className="App">
			<PageHeader/>
			<main>
				<Switch>
					<Route exact path="/" component={ HomePage }/>
					{/*<Route exact path="/about" component={ AboutUs }/>*/}
				</Switch>
			</main>
			<PageFooter/>
		</div>
	);
}

export default App;
