import React, { useState } from "react";
import "./App.css";
import { Body } from "./body/body";
import { Header } from "./header/Header";

const App: React.FC = () => {
	const [genre, setGenre] = useState("Shooter");
	console.log(genre);

	return (
		<>
			<Header setGenre={setGenre} />
			<Body genre={genre} />;
		</>
	);
};

export default App;
