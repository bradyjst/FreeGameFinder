/* eslint-disable jsx-a11y/img-redundant-alt */
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
	game: any;
}

export const Game: React.FC<GameProps> = ({ game }) => {
	const { css } = useFela();

	return (
		<div className={css(GameContainer)}>
			<a href={game.game_url}>
				<img
					className={css(GameImage)}
					src={game.thumbnail}
					alt="no image :("
				/>
			</a>
			<div className={css(TextContainerOne)}>
				<div className={css(InnerContainerLeft)}>
					<h3 className={css(Title)}>{game.title}</h3>
				</div>
				<div className={css(InnerContainerRight)}>
					<h5 className={css(Genre)}>{game.genre}</h5>
				</div>
			</div>

			<div className={css(TextContainerTwo)}>
				<p className={css(Description)}>{game.short_description}</p>
			</div>

			<div className={css(TextContainerThree)}>
				<div className={css(InnerContainerLeft)}>
					<h6 className={css(ReleaseDate)}>
						Release Date: {game.release_date}
					</h6>
				</div>
				<div className={css(InnerContainerRight)}>
					<h6 className={css(Developer)}>{game.developer}</h6>
				</div>
			</div>
		</div>
	);
};
