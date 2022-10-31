import axios from "axios";

const options = {
	method: "GET",
	url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
	headers: {
		"X-RapidAPI-Key": "f6bfc26a46mshd75bee5072c362fp1dd7e7jsne4a6c5eccf2f",
		"X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
	},
};

export const getGames = async () => {
	return await axios.request(options).then(({ data }) => data);
};
