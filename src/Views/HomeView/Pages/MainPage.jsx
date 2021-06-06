import React from "react";
import { Row, Col } from "antd";

function MainPage(props) {
	return (
		<Row>
			<Col xs={4} sm={4} md={6} lg={4} xl={4}></Col>
			<Col xs={20} sm={20} md={18} lg={20} xl={20}></Col>
		</Row>
	);
}

export default MainPage;
