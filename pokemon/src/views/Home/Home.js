import React from "react";
import HelloWorldComponent from "../../components/HelloWorldComponent/helloWorldComponent";
import CountComponent from "../../components/CountComponent/CountComponent";

const Home = () => {
	return (
		<div>
			<HelloWorldComponent name="Yoda" />
			<HelloWorldComponent name="Robson" />
			<HelloWorldComponent name="Dilma" />
			<CountComponent />
		</div>
		);
	};

export default Home;