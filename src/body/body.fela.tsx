import { StyleFunction } from "react-fela";

export const BodyContainer: StyleFunction<{}> = () => ({
	backgroundColor: "rgb(20, 20, 20)",
	display: "flex",
	maxWidth: "1200px",
	minWidth: "400px",
	flexWrap: "wrap",
	margin: "auto",
	justifyContent: "center",
});
