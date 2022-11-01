import { StyleFunction } from "react-fela";

export const GameContainer: StyleFunction<{}> = () => ({
	backgroundColor: "rgb(100, 100, 100)",
	maxWidth: "365px",
	minWidth: "365px",
	margin: "10px",
	borderRadius: "10px",
	transition: ".3s ease-in-out",
	":hover": {
		boxShadow: "0 0 4px rgb(100, 100, 100)",
		transform: "scale(1.03)",
		transition: ".3s ease-in-out",
	},
});

export const GameImage: StyleFunction<{}> = () => ({
	borderRadius: "10px",
});

export const TextContainerOne: StyleFunction<{}> = () => ({
	display: "flex",
	alignItems: "center",
	paddingLeft: "10px",
	paddingRight: "10px",
	paddingTop: "0px",
	paddingBottom: "10px",
	flexWrap: "wrap",
	maxHeight: "40px",
});

export const TextContainerTwo: StyleFunction<{}> = () => ({
	paddingLeft: "10px",
	paddingRight: "10px",
});

export const TextContainerThree: StyleFunction<{}> = () => ({
	display: "flex",
	padding: "10px",
	flexWrap: "wrap",
});

export const Genre: StyleFunction<{}> = () => ({
	backgroundColor: "grey",
	padding: "2px",
	borderRadius: "3px",
	width: "80px",
	textAlign: "center",
});

export const GenreContainer: StyleFunction<{}> = () => ({
	marginLeft: "10px",
});

export const Description: StyleFunction<{}> = () => ({
	width: "345px",
	height: "40px",
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
});

export const Title: StyleFunction<{}> = () => ({
	width: "250px",
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
});

export const ReleaseDate: StyleFunction<{}> = () => ({});

export const InnerContainerLeft: StyleFunction<{}> = () => ({
	width: "185px",
	overflow: "hidden",
	textOverflow: "ellipsis",
	display: "flex",
	flexWrap: "wrap",
	whiteSpace: "nowrap",
});

export const InnerContainerRight: StyleFunction<{}> = () => ({
	width: "145px",
	display: "flex",
	maxHeight: "84px",
	justifyContent: "flex-end",
});

export const Developer: StyleFunction<{}> = () => ({});
