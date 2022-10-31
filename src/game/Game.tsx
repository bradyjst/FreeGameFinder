/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useFela } from "react-fela";
import {
	GameContainer,
	GameImage,
	Title,
	TextContainerOne,
	TextContainerTwo,
	TextContainerThree,
	InnerContainerRight,
	InnerContainerLeft,
	Genre,
	Description,
	Developer,
	ReleaseDate,
} from "./Game.fela";

export interface GameProps {
	games: any;
}

export const Game: React.FC<GameProps> = ({ games }) => {
	const { css } = useFela();

	const [genre, setGenre] = useState("Shooter");

	const truncate = (str: string) => {
		return str.length > 450 ? str.substring(0, 500) + "..." : str;
	};

	const truncateTitle = (str: string) => {
		return str.length > 20 ? str.substring(0, 17) + "..." : str;
	};

	if (games.genre === genre) {
		return (
			<div className={css(GameContainer)}>
				<a href={games.game_url}>
					<img
						className={css(GameImage)}
						src={games.thumbnail}
						alt="no image :("
					/>
				</a>
				<div className={css(TextContainerOne)}>
					<div className={css(InnerContainerLeft)}>
						<h3 className={css(Title)}>{truncateTitle(games.title)}</h3>
					</div>
					<div className={css(InnerContainerRight)}>
						<h5 className={css(Genre)}>{games.genre}</h5>
					</div>
				</div>

				<div className={css(TextContainerTwo)}>
					<p className={css(Description)}>
						{truncate(games.short_description)}
					</p>
				</div>

				<div className={css(TextContainerThree)}>
					<div className={css(InnerContainerLeft)}>
						<h6 className={css(ReleaseDate)}>
							Release Date: {games.release_date}
						</h6>
					</div>
					<div className={css(InnerContainerRight)}>
						<h6 className={css(Developer)}>{games.developer}</h6>
					</div>
				</div>
			</div>
		);
	} else return null;
};
