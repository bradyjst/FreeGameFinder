import React from "react";
import { HeaderContainer } from "./Header.fela";
import { useFela } from "react-fela";
import { Buttons } from "./Header.fela";

interface HeaderProps {
	genre: string;
}

export const Header: React.FC<HeaderProps> = ({ genre }) => {
	const { css } = useFela();

	return (
		<div className={css(HeaderContainer)}>
			<h1>Find a game!</h1>
			<div className={css(Buttons)}>
				<button>Fighting</button>
				<button>Strategy</button>
				<button>MMORPG</button>
				<button>Shooter</button>
				<button>Adventure</button>
				<button>Sports</button>
				<button>Card Game</button>
			</div>
		</div>
	);
};
