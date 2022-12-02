import Team from "./model.js";
import Storage from "./storage.js";

const teams = {
	QA: {
		id: "QA",
		name: "Qatar",
		flagClass: "flag-qatar",
		shortName: "QAT",
		group: "Grupo A",
	},
	EC: {
		id: "EC",
		name: "Ecuador",
		flagClass: "flag-ecuador",
		shortName: "ECU",
		group: "Grupo A",
	},
	SN: {
		id: "SN",
		name: "Senegal",
		flagClass: "flag-senegal",
		shortName: "SEN",
		group: "Grupo A",
	},
	NL: {
		id: "NL",
		name: "Paises Bajos",
		flagClass: "flag-netherlands",
		shortName: "PAI",
		group: "Grupo A",
	},

	EN: {
		id: "EN",
		name: "Inglaterra",
		flagClass: "flag-england",
		shortName: "ING",
		group: "Grupo B",
	},
	IR: {
		id: "IR",
		name: "Iran",
		flagClass: "flag-iran",
		shortName: "IRA",
		group: "Grupo B",
	},
	US: {
		id: "US",
		name: "USA",
		flagClass: "flag-us",
		shortName: "USA",
		group: "Grupo B",
	},
	WA: {
		id: "WA",
		name: "Gales",
		flagClass: "flag-wales",
		shortName: "GAL",
		group: "Grupo B",
	},
	AR: {
		id: "AR",
		name: "Argentina",
		flagClass: "flag-argentina",
		shortName: "ARG",
		group: "Grupo C",
	},
	SA: {
		id: "SA",
		name: "Arabia Saudita",
		flagClass: "flag-saudi-arabia",
		shortName: "ARA",
		group: "Grupo C",
	},
	MX: {
		id: "MX",
		name: "Mexico",
		flagClass: "flag-mexico",
		shortName: "MEX",
		group: "Grupo C",
	},
	PL: {
		id: "PL",
		name: "Polonia",
		flagClass: "flag-poland",
		shortName: "POL",
		group: "Grupo C",
	},
	FR: {
		id: "FR",
		name: "Francia",
		flagClass: "flag-france",
		shortName: "FRA",
		group: "Grupo D",
	},
	AU: {
		id: "AU",
		name: "Australia",
		flagClass: "flag-australia",
		shortName: "AUS",
		group: "Grupo D",
	},
	DK: {
		id: "DK",
		name: "Dinamarca",
		flagClass: "flag-denmark",
		shortName: "DIN",
		group: "Grupo D",
	},
	TN: {
		id: "TN",
		name: "Tunez",
		flagClass: "flag-tunisia",
		shortName: "TUN",
		group: "Grupo D",
	},
	ES: {
		id: "ES",
		name: "España",
		flagClass: "flag-spain",
		shortName: "ESP",
		group: "Grupo E",
	},
	CR: {
		id: "CR",
		name: "Costa Rica",
		flagClass: "flag-costa-rica",
		shortName: "COS",
		group: "Grupo E",
	},
	DE: {
		id: "DE",
		name: "Alemania",
		flagClass: "flag-germany",
		shortName: "ALE",
		group: "Grupo E",
	},
	JP: {
		id: "JP",
		name: "Japon",
		flagClass: "flag-japan",
		shortName: "JAP",
		group: "Grupo E",
	},
	BE: {
		id: "BE",
		name: "Belgica",
		flagClass: "flag-belgium",
		shortName: "BEL",
		group: "Grupo F",
	},
	CA: {
		id: "CA",
		name: "Canada",
		flagClass: "flag-canada",
		shortName: "CAN",
		group: "Grupo F",
	},
	MA: {
		id: "MA",
		name: "Marruecos",
		flagClass: "flag-morocco",
		shortName: "MAR",
		group: "Grupo F",
	},
	HR: {
		id: "HR",
		name: "Croacia",
		flagClass: "flag-croatia",
		shortName: "CRO",
		group: "Grupo F",
	},
	BR: {
		id: "BR",
		name: "Brasil",
		flagClass: "flag-brazil",
		shortName: "BRA",
		group: "Grupo G",
	},
	RS: {
		id: "RS",
		name: "Serbia",
		flagClass: "flag-serbia",
		shortName: "SER",
		group: "Grupo G",
	},
	CH: {
		id: "CH",
		name: "Suiza",
		flagClass: "flag-switzerland",
		shortName: "SUI",
		group: "Grupo G",
	},
	CM: {
		id: "CM",
		name: "Camerun",
		flagClass: "flag-cameroon",
		shortName: "CAM",
		group: "Grupo G",
	},
	PT: {
		id: "PT",
		name: "Portugal",
		flagClass: "flag-portugal",
		shortName: "POR",
		group: "Grupo H",
	},
	GH: {
		id: "GH",
		name: "Ghana",
		flagClass: "flag-ghana",
		shortName: "GHA",
		group: "Grupo H",
	},
	UY: {
		id: "UY",
		name: "Uruguay",
		flagClass: "flag-uruguay",
		shortName: "URU",
		group: "Grupo H",
	},
	KR: {
		id: "KR",
		name: "Corea del Sur",
		flagClass: "flag-south-korea",
		shortName: "COR",
		group: "Grupo H",
	},
};

const games = [
	{
		matchId: "m01",
		group: "Grupo A",
		date: "Dom  20/11, 13:00",
		homeTeam: "QA",
		awayTeam: "EC",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m02",
		group: "Grupo A",
		date: "Lun  21/11, 13:00",
		homeTeam: "SN",
		awayTeam: "NL",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m18",
		group: "Grupo A",
		date: "Vie  25/11, 10:00",
		homeTeam: "QA",
		awayTeam: "SN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m19",
		group: "Grupo A",
		date: "Vie  25/11, 13:00",
		homeTeam: "NL",
		awayTeam: "EC",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m36",
		group: "Grupo A",
		date: "Mar  29/11, 12:00",
		homeTeam: "NL",
		awayTeam: "QA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m35",
		group: "Grupo A",
		date: "Mar  29/11, 12:00",
		homeTeam: "EC",
		awayTeam: "SN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m03",
		group: "Grupo B",
		date: "Lun  21/11, 10:00",
		homeTeam: "EN",
		awayTeam: "IR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m04",
		group: "Grupo B",
		date: "Lun  21/11, 16:00",
		homeTeam: "US",
		awayTeam: "WA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m17",
		group: "Grupo B",
		date: "Vie  25/11, 07:00",
		homeTeam: "WA",
		awayTeam: "IR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m20",
		group: "Grupo B",
		date: "Vie  25/11, 16:00",
		homeTeam: "EN",
		awayTeam: "US",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m33",
		group: "Grupo B",
		date: "Mar  29/11, 16:00",
		homeTeam: "WA",
		awayTeam: "EN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m34",
		group: "Grupo B",
		date: "Mar  29/11, 16:00",
		homeTeam: "IR",
		awayTeam: "US",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m08",
		group: "Grupo C",
		date: "Mar  22/11, 07:00",
		homeTeam: "AR",
		awayTeam: "SA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m07",
		group: "Grupo C",
		date: "Mar  22/11, 13:00",
		homeTeam: "MX",
		awayTeam: "PL",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m22",
		group: "Grupo C",
		date: "Sab  26/11, 10:00",
		homeTeam: "PL",
		awayTeam: "SA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m24",
		group: "Grupo C",
		date: "Sab  26/11, 16:00",
		homeTeam: "AR",
		awayTeam: "MX",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m39",
		group: "Grupo C",
		date: "Mie  30/11, 16:00",
		homeTeam: "PL",
		awayTeam: "AR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m40",
		group: "Grupo C",
		date: "Mie  30/11, 16:00",
		homeTeam: "SA",
		awayTeam: "MX",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m06",
		group: "Grupo D",
		date: "Mar  22/11, 10:00",
		homeTeam: "DK",
		awayTeam: "TN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m05",
		group: "Grupo D",
		date: "Mar  22/11, 16:00",
		homeTeam: "FR",
		awayTeam: "AU",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m21",
		group: "Grupo D",
		date: "Sab  26/11, 07:00",
		homeTeam: "TN",
		awayTeam: "AU",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m23",
		group: "Grupo D",
		date: "Sab  26/11, 13:00",
		homeTeam: "FR",
		awayTeam: "DK",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m38",
		group: "Grupo D",
		date: "Mie  30/11, 12:00",
		homeTeam: "TN",
		awayTeam: "FR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m37",
		group: "Grupo D",
		date: "Mie  30/11, 12:00",
		homeTeam: "AU",
		awayTeam: "DK",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m11",
		group: "Grupo E",
		date: "Mie  23/11, 10:00",
		homeTeam: "DE",
		awayTeam: "JP",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m10",
		group: "Grupo E",
		date: "Mie  23/11, 13:00",
		homeTeam: "ES",
		awayTeam: "CR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m25",
		group: "Grupo E",
		date: "Dom  27/11, 07:00",
		homeTeam: "JP",
		awayTeam: "CR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m28",
		group: "Grupo E",
		date: "Dom  27/11, 16:00",
		homeTeam: "ES",
		awayTeam: "DE",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m43",
		group: "Grupo E",
		date: "Jue  1/12, 16:00",
		homeTeam: "JP",
		awayTeam: "ES",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m44",
		group: "Grupo E",
		date: "Jue  1/12, 16:00",
		homeTeam: "CR",
		awayTeam: "DE",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m12",
		group: "Grupo F",
		date: "Mie  23/11, 07:00",
		homeTeam: "MA",
		awayTeam: "HR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m09",
		group: "Grupo F",
		date: "Mie  23/11, 16:00",
		homeTeam: "BE",
		awayTeam: "CA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m26",
		group: "Grupo F",
		date: "Dom  27/11, 10:00",
		homeTeam: "BE",
		awayTeam: "MA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m27",
		group: "Grupo F",
		date: "Dom  27/11, 13:00",
		homeTeam: "HR",
		awayTeam: "CA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m41",
		group: "Grupo F",
		date: "Jue  1/12, 12:00",
		homeTeam: "HR",
		awayTeam: "BE",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m42",
		group: "Grupo F",
		date: "Jue  1/12, 12:00",
		homeTeam: "CA",
		awayTeam: "MA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m13",
		group: "Grupo G",
		date: "Jue  24/11, 07:00",
		homeTeam: "CH",
		awayTeam: "CM",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m16",
		group: "Grupo G",
		date: "Jue  24/11, 16:00",
		homeTeam: "BR",
		awayTeam: "RS",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m29",
		group: "Grupo G",
		date: "Lun  28/11, 07:00",
		homeTeam: "CM",
		awayTeam: "RS",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m31",
		group: "Grupo G",
		date: "Lun  28/11, 13:00",
		homeTeam: "BR",
		awayTeam: "CH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m48",
		group: "Grupo G",
		date: "Vie  2/12, 16:00",
		homeTeam: "CM",
		awayTeam: "BR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m47",
		group: "Grupo G",
		date: "Vie  2/12, 16:00",
		homeTeam: "RS",
		awayTeam: "CH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m14",
		group: "Grupo H",
		date: "Jue  24/11, 10:00",
		homeTeam: "UY",
		awayTeam: "KR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m15",
		group: "Grupo H",
		date: "Jue  24/11, 13:00",
		homeTeam: "PT",
		awayTeam: "GH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m30",
		group: "Grupo H",
		date: "Lun  28/11, 10:00",
		homeTeam: "KR",
		awayTeam: "GH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m32",
		group: "Grupo H",
		date: "Lun  28/11, 16:00",
		homeTeam: "PT",
		awayTeam: "UY",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m46",
		group: "Grupo H",
		date: "Vie  2/12, 12:00",
		homeTeam: "KR",
		awayTeam: "PT",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		matchId: "m45",
		group: "Grupo H",
		date: "Vie  2/12, 12:00",
		homeTeam: "GH",
		awayTeam: "UY",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
];

const feedDisplay = document.querySelector("#feed");
const groupTables = document.querySelectorAll(".group");
const groupTemplate = document.querySelector("#group-template").content;
const teamTemplate = document.querySelector("#team-template").content;
const gameTemplate = document.querySelector("#game-template").content;
const fragment = document.createDocumentFragment();
const gameFragment = document.createDocumentFragment();

const groupDataA = ["QA", "EC", "SN", "NL"];
const groupDataB = ["EN", "IR", "US", "WA"];
const groupDataC = ["AR", "SA", "MX", "PL"];
const groupDataD = ["FR", "AU", "DK", "TN"];
const groupDataE = ["ES", "CR", "DE", "JP"];
const groupDataF = ["BE", "CA", "MA", "HR"];
const groupDataG = ["BR", "RS", "CH", "CM"];
const groupDataH = ["PT", "GH", "UY", "KR"];

const groups = {
	A: groupDataA,
	B: groupDataB,
	C: groupDataC,
	D: groupDataD,
	E: groupDataE,
	F: groupDataF,
	G: groupDataG,
	H: groupDataH,
};

const groupsArr = [
	groupDataA,
	groupDataB,
	groupDataC,
	groupDataD,
	groupDataE,
	groupDataF,
	groupDataG,
	groupDataH,
];

const alphabet = "ABCDEFGH";

const convertArrayToObject = (array, key) => {
	const initialValue = {};
	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		};
	}, initialValue);
};

const teamsShortName = convertArrayToObject(
	Object.keys(teams).map((team) => teams[team]),
	"shortName"
);

const printData = () => {
	groupsArr.forEach((group, j) => {
		const groupName = `Grupo ${alphabet[j]}`;
		groupTemplate.querySelector(".group-name").textContent = groupName;
		const clone = groupTemplate.cloneNode(true);
		fragment.appendChild(clone);
		let groupTable = groupTables[j];
		groupTable.querySelector(".table").appendChild(fragment);
		printRows(groupTable, groupName, j);
		printGames(groupTable, groupName);
	});
};

const printRows = (groupTable, groupName, j) => {
	groupsArr[j].forEach((teamID, i) => {
		const { flagClass, name } = teams[teamID];
		teamTemplate.querySelector(".pos").textContent = i + 1;
		teamTemplate.querySelector(".pos").parentNode.classList.remove(`pos4`);
		teamTemplate.querySelector(".pos").parentNode.classList.remove(`pos${i}`);
		teamTemplate.querySelector(".pos").parentNode.classList.add(`pos${i + 1}`);
		teamTemplate.querySelector(".id").innerText = name;
		const iElement = document.createElement("i");
		iElement.classList.add("flag", `${flagClass}`);
		teamTemplate.querySelector(".id").prepend(iElement);

		const clone = teamTemplate.cloneNode(true);
		fragment.appendChild(clone);
	});
	groupTable.querySelector("tbody").appendChild(fragment);
	groupTable.id = groupName;
};

const printGames = (groupTable, groupName) => {
	const groupGames = games.filter((game) => game.group === groupName);
	// console.log(groupGames);
	groupGames.forEach((game) => {
		const { matchId, date, homeTeam, awayTeam, homeGoals, awayGoals } = game;
		const homeFlagClass = teams[homeTeam].flagClass;
		const awayFlagClass = teams[awayTeam].flagClass;
		gameTemplate.querySelector(".game").setAttribute("id", matchId);
		gameTemplate.querySelector(".date").textContent = date;
		gameTemplate.querySelector(".home-team").textContent =
			teams[homeTeam].shortName;
		gameTemplate.querySelector(".home-goals").textContent = homeGoals;
		gameTemplate.querySelector(".away-goals").textContent = awayGoals;
		gameTemplate.querySelector(".away-team").textContent =
			teams[awayTeam].shortName;
		const iHomeElement = document.createElement("i");
		const iAwayElement = document.createElement("i");
		iHomeElement.classList.add("flag", `${homeFlagClass}`);
		iAwayElement.classList.add("flag", `${awayFlagClass}`);
		gameTemplate.querySelector(".home-team").prepend(iHomeElement);
		gameTemplate.querySelector(".away-team").append(iAwayElement);
		const clone = gameTemplate.cloneNode(true);
		gameFragment.appendChild(clone);
	});
	groupTable.querySelector(".games tbody").appendChild(gameFragment);
};

const updateScores = async () => {
	toggleSpinner();
	let endpoint = "";
	if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
		endpoint = "http://localhost:8000/results";
	} else {
		endpoint = "https://qatar-world-cup.onrender.com/results";
	}
	await fetch(endpoint) //
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const scores = getScores(data);
			const standings = getStandings(scores);
			printScores(scores);
			printStandings(standings);
			// console.log(data);
			// return data;
		})
		.catch((err) => console.error(err));
	toggleSpinner();
};

const printScores = (scoresObj) => {
	Object.keys(scoresObj).forEach((score) => {
		const gameElement = document.getElementById(score);
		gameElement.classList.remove("grres0");
		gameElement.classList.remove("grres1");
		gameElement.classList.add(scoresObj[score].state);
		gameElement.querySelector(".home-goals").textContent =
			scoresObj[score].homeGoals;
		gameElement.querySelector(".away-goals").textContent =
			scoresObj[score].awayGoals;
	});
};

const getScores = (data) => {
	const scoresObj = {};
	console.log(data);
	data.forEach((score) => {
		const scoreId = games.filter((game) => {
			return (
				// score.homeGoals !== null &&
				teams[game.homeTeam].shortName === score.homeTeam &&
				teams[game.awayTeam].shortName === score.awayTeam
			);
		})[0]?.matchId;
		if (scoreId) scoresObj[scoreId] = score;
	});
	console.log(scoresObj);
	Storage.save(scoresObj, "scores");
	return scoresObj;
};

const printStandings = (standings) => {
	Object.keys(standings).forEach((group) => {
		const groupArr = standings[group];
		const groupElement = document.getElementById(`${group}`);
		console.log(groupArr);
		for (let i = 0; i < groupArr.length; i++) {
			const teamElement = groupElement.querySelector(`.pos${i + 1}`);
			// console.log(groupArr[i].id);
			// console.table(groupArr[i]);
			// console.log(...Object.keys(groupArr[i]));
			// console.log(...Object.values(groupArr[i]));
			Object.keys(groupArr[i]).forEach((key) => {
				if (teamElement.querySelector(`.${key}`)) {
					teamElement.querySelector(`.${key}`).textContent = groupArr[i][key];
					if ((key = "id")) {
						teamElement.querySelector(`.${key}`).textContent =
							teams[groupArr[i][key]].name;
						const iElement = document.createElement("i");
						iElement.classList.add(
							"flag",
							`${teams[groupArr[i][key]].flagClass}`
						);
						teamElement.querySelector(`.${key}`).prepend(iElement);
					}
				}
			});
		}
	});
};

const getStandings = (scores) => {
	console.log(scores);
	const standingsArr = [];
	Object.keys(scores).forEach((score) => {
		if (scores[score].homeGoals !== null) {
			standingsArr.push({
				name: scores[score].homeTeam,
				won: scores[score].homeGoals > scores[score].awayGoals ? 1 : 0,
				draw: scores[score].homeGoals === scores[score].awayGoals ? 1 : 0,
				loss: scores[score].homeGoals < scores[score].awayGoals ? 1 : 0,
				gf: scores[score].homeGoals,
				ga: scores[score].awayGoals,
			});
			standingsArr.push({
				name: scores[score].awayTeam,
				won: scores[score].homeGoals < scores[score].awayGoals ? 1 : 0,
				draw: scores[score].homeGoals === scores[score].awayGoals ? 1 : 0,
				loss: scores[score].homeGoals > scores[score].awayGoals ? 1 : 0,
				gf: scores[score].awayGoals,
				ga: scores[score].homeGoals,
			});
		} else {
			standingsArr.push({
				name: scores[score].homeTeam,
				won: 0,
				draw: 0,
				loss: 0,
				gf: 0,
				ga: 0,
			});
			standingsArr.push({
				name: scores[score].awayTeam,
				won: 0,
				draw: 0,
				loss: 0,
				gf: 0,
				ga: 0,
			});
		}
	});
	let result = [];
	standingsArr.reduce(function (res, value) {
		if (!res[value.name]) {
			res[value.name] = {
				id: teamsShortName[value.name].id,
				won: 0,
				draw: 0,
				loss: 0,
				gf: 0,
				ga: 0,
				group: teamsShortName[value.name].group,
			};
			result.push(res[value.name]);
		}
		res[value.name].won += value.won;
		res[value.name].draw += value.draw;
		res[value.name].loss += value.loss;
		res[value.name].gf += value.gf;
		res[value.name].ga += value.ga;
		return res;
	}, {});
	const standings = result.map((el) => new Team(el));

	// group standings by group
	const standingsByGroup = groupBy(standings, "group");
	console.log(standingsByGroup);

	Object.keys(standingsByGroup).forEach((group) => {
		standingsByGroup[group] = sortArr(standingsByGroup[group]);
	});
	Storage.save(standingsByGroup, "standings");
	return standingsByGroup;
};

const groupBy = (arr, key) => {
	return arr.reduce(function (rv, x) {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
};

const sortArr = (arr) => {
	return arr.sort(
		(a, b) =>
			b.pts - a.pts ||
			b.diff - a.diff ||
			b.gf - a.gf ||
			a.id.localeCompare(b.id)
	);
};

function toggleSpinner() {
	const spinner = document.getElementById("spinner");
	const update = document.getElementById("update-icon");
	spinner.classList.toggle("hide");
	update.classList.toggle("hide");
}

const printRoundOf16 = () => {
	const standings = Storage.get("standings");
	console.log(standings);

	const matches = {};
	matches["m49"] = [standings["Grupo A"][0].id];
	matches["m49"].push(standings["Grupo B"][1].id);
	matches["m50"] = [standings["Grupo C"][0].id];
	matches["m50"].push(standings["Grupo D"][1].id);
	matches["m51"] = [standings["Grupo B"][0].id];
	matches["m51"].push(standings["Grupo A"][1].id);
	matches["m52"] = [standings["Grupo D"][0].id];
	matches["m52"].push(standings["Grupo C"][1].id);
	matches["m53"] = [standings["Grupo E"][0].id];
	matches["m53"].push(standings["Grupo F"][1].id);
	matches["m54"] = [standings["Grupo G"][0].id];
	matches["m54"].push(standings["Grupo H"][1].id);
	matches["m55"] = [standings["Grupo F"][0].id];
	matches["m55"].push(standings["Grupo E"][1].id);
	matches["m56"] = [standings["Grupo H"][0].id];
	matches["m56"].push(standings["Grupo G"][1].id);

	console.log(matches);

	Object.keys(matches).forEach((match) => {
		const matchElement = document.getElementById(match);
		matchElement.querySelector(".home-team").textContent =
			" " + teams[matches[match][0]].shortName;
		matchElement.querySelector(".away-team").textContent =
			teams[matches[match][1]].shortName;
		const iHomeElement = document.createElement("i");
		const iAwayElement = document.createElement("i");
		const homeFlagClass = teams[matches[match][0]].flagClass;
		const awayFlagClass = teams[matches[match][1]].flagClass;
		iHomeElement.classList.add("flag", `${homeFlagClass}`);
		iAwayElement.classList.add("flag", `${awayFlagClass}`);
		matchElement.querySelector(".home-team").prepend(iHomeElement);
		matchElement.querySelector(".away-team").append(iAwayElement);
	});
};

//-----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
	printData();

	const scores = Storage.get("scores");
	const standings = Storage.get("standings");
	printScores(scores);
	printStandings(standings);

	updateScores();
	printRoundOf16();
	const update = document.getElementById("update-icon");
	update.addEventListener("click", updateScores);

	//luxon.DateTime.fromFormat("20/11, 13:00", "dd/MM, hh:mm")
});

var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
