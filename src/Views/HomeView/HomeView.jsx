import Navbar from "Components/Navbar/Navbar";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import BrowsePage from "./Pages/BrowsePage/BrowsePage";
import MainPage from "./Pages/MainPage/MainPage";

function HomeView(props) {
	const match = useRouteMatch();
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path={match.url} exact component={MainPage} />
				<Route path={`${match.url}/browse`} component={BrowsePage} />
			</Switch>
		</div>
	);
}

export default HomeView;
