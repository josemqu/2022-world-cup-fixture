const PORT = process.env.PORT || 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const url = "https://www.promiedos.com.ar/mundial";

app.get("/", function (req, res) {
	res.json("This is my webscraper");
});

app.get("/results", (req, res) => {
	axios(url)
		.then((response) => {
			const html = response.data;
			const $ = cheerio.load(html);
			const games = [];
			$(".grtr", html).each(function () {
				const group = titleCase(
					$(this)
						.parent()
						.parent()
						.find(".titulotabla2")
						.text()
						.split(" arrow")[0]
				);
				const date = $(this).prev().text().trim();
				const homeTeam = $(this).find(".greq1").text();
				const awayTeam = $(this).find(".greq2").text();
				const result = $(this).find(".grres0").text();
				const homeGoals = parseInt(result.split("-")[0]);
				const awayGoals = parseInt(result.split("-")[1]);
				games.push({
					group,
					date,
					homeTeam,
					awayTeam,
					homeGoals,
					awayGoals,
					result,
				});
			});
			res.json(games);
		})
		.catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));

function titleCase(str) {
	str = str.toLowerCase().split(" ");
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(" ");
}
