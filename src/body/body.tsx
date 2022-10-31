/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Game } from "../game/Game";
import { getGames } from "../api";
import { useFela } from "react-fela";
import { BodyContainer } from "./body.fela";

export const Body: React.FC = () => {
	const [games, setGames] = useState([]);

	useEffect(() => {
		getGames().then((data) => {
			setGames(data);
		});
	}, []);

	console.log(games);

	const { css } = useFela();

	return (
		<div className={css(BodyContainer)}>
			{games.slice(0, 99).map((games, i) => (
				<Game games={games} key={i} />
			))}
		</div>
	);
};
