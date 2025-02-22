import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from '../screens/Dashboard/';

const Routes: React.FC = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Dashboard} /> 
			{/* <Route path="/signup" component={() => <h1>SignUp</h1>} /> */}
			{/* <PrivateRoute path="/app" component={() => <h1>App</h1>} /> */}
			{/* <Route path="*" component={() => <h1>Page not found</h1>} /> */}
		</Switch>
	</BrowserRouter>
	);

	export default Routes;