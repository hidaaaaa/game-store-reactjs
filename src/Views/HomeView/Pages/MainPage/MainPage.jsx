import Layout from "antd/lib/layout/layout";
import React from "react";
import GridBreaker from "./Components/GridBreaker/GridBreaker";
import Slider from "./Components/Slider/Slider";
import "./style/mainPage.scss";

function MainPage(props) {
	return (
		<Layout className="layout-body">
			<Slider />
			<GridBreaker />
		</Layout>
	);
}

export default MainPage;
