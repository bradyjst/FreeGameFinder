import React from "react";
import { HeaderContainer } from "./Header.fela";
import { useFela } from "react-fela";
import { Buttons } from "./Header.fela";

export interface HeaderProps {
	setGenre: any;
}

export const Header: React.FC<HeaderProps> = ({ setGenre }) => {
	const { css } = useFela();

	const getGenre = (g: string) => {
		//Hahah! G string
		setGenre(g);
		console.log("buttonworks!");
	};

	return (
		<div className={css(HeaderContainer)}>
			<h1>Find a game!</h1>
			<div className={css(Buttons)}>
				<button onClick={() => getGenre("Shooter")}>Shooter</button>
				<button onClick={() => getGenre("Strategy")}>Strategy</button>
				<button onClick={() => getGenre("MMORPG")}>MMORPG</button>
				<button onClick={() => getGenre("Fighting")}>Fighting</button>
				<button onClick={() => getGenre("Moba")}>Moba</button>
				<button onClick={() => getGenre("Sports")}>Sports</button>
				<button onClick={() => getGenre("Card Game")}>Card Game</button>
			</div>
		</div>
	);
};
