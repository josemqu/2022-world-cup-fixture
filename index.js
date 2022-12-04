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
				//primera fase
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
				const result = $(this)
					.find(".grres0, .grres1, .grres2, .grres3, .grres4")
					.text();
				const homeGoals = parseInt(result.trim().split("-")[0]);
				const awayGoals = parseInt(result.trim().split("-")[1]);
				const state = $(this).children(":nth-child(2)").attr("class");
				games.push({
					group,
					date,
					homeTeam,
					awayTeam,
					homeGoals,
					awayGoals,
					state,
				});
			});
			$("#fixturein", html).each(function () {
				//segunda fase
				const group = "-";
				const date = $(this).find(".diapart").text();
				const homeTeam = $(this)
					.find(".datoequipo")[0]
					.firstChild.nodeValue.slice(0, 3)
					.toUpperCase();
				const awayTeam = $(this)
					.find(".datoequipo")[1]
					.firstChild.nodeValue.slice(0, 3)
					.toUpperCase();
				const homeGoals = parseInt($($(this).find(".game-r1")[1]).text());
				const awayGoals = parseInt($($(this).find(".game-r2")[1]).text());
				const state = $(this).children(":nth-child(2)").attr("class");
				games.push({
					group,
					date,
					homeTeam,
					awayTeam,
					homeGoals,
					awayGoals,
					state,
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
