import React from "react";
import "./App.css";
import { Body } from "./body/body";
import { Header } from "./header/Header";

function App() {
	return (
		<>
			<Header genre="Shooter" />
			<Body />;
		</>
	);
}

export default App;
