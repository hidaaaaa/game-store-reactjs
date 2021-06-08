import Layout from "antd/lib/layout/layout";
import Header from "Components/Header/Header";
import { Redirect, Route, Switch } from "react-router";
import "./App.scss";
import HomeView from "./Views/HomeView/HomeView";

function App() {
	return (
		<div className="App">
			<Layout className="layout">
				<Header />

				<div className="body">
					<Switch>
						<Redirect from="/" to="/store" exact />
						<Redirect from="/post-list/:pistId" to="/posts/:postId" exact />

						<Route path="/store" component={HomeView} />
						{/* <Route path="/mua-ve" component={BuyTicketFeature} /> */}
					</Switch>
				</div>
			</Layout>
		</div>
	);
}

export default App;
