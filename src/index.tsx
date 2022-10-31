import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

const renderer = createRenderer();

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RendererProvider renderer={renderer}>
			<App />
		</RendererProvider>
	</React.StrictMode>
);
