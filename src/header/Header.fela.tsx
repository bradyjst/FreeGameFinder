import { StyleFunction } from "react-fela";

export const HeaderContainer: StyleFunction<{}> = () => ({
	backgroundColor: "rgb(40, 40, 40)",
	display: "flex",
	width: "100vw",
	flexWrap: "wrap",
	margin: "auto",
	justifyContent: "center",
	alignItems: "center",
});

export const Buttons: StyleFunction<{}> = () => ({
	margin: "10px",
});
