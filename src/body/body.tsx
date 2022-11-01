/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { Game } from "../game/Game";
import { getGames } from "../api";
import { useFela } from "react-fela";
import { BodyContainer } from "./body.fela";

interface BodyProps {
	genre: any;
}

export const Body: React.FC<BodyProps> = ({ genre }) => {
	const [games, setGames] = useState<any[]>([]);

	useEffect(() => {
		getGames().then((data) => {
			setGames(data);
		});
	}, []);

	const filteredGames = useMemo(() => {
		return games.filter((game) => game.genre === genre);
	}, [games, genre]);

	console.log(games);

	const { css } = useFela();

	return (
		<div className={css(BodyContainer)}>
			{filteredGames.slice(0, 99).map((game, i) => (
				<Game game={game} key={i} />
			))}
		</div>
	);
};
