const countries = {
	AR: {
		id: "AR",
		name: "Argentina",
		shortName: "ARG",
		flagClass: "flag-argentina",
	},
	EN: {
		id: "EN",
		name: "Inglaterra",
		shortName: "ING",
		flagClass: "flag-england",
	},
	FR: {
		id: "FR",
		name: "Francia",
		shortName: "FRA",
		flagClass: "flag-france",
	},
	BR: {
		id: "BR",
		name: "Brasil",
		shortName: "BRA",
		flagClass: "flag-brazil",
	},
	DE: {
		id: "DE",
		name: "Alemania",
		shortName: "ALE",
		flagClass: "flag-germany",
	},
	QA: {
		id: "QA",
		name: "Qatar",
		shortName: "QAT",
		flagClass: "flag-qatar",
	},
	WA: {
		id: "WA",
		name: "Gales",
		shortName: "GAL",
		flagClass: "flag-wales",
	},
	EC: {
		id: "EC",
		name: "Ecuador",
		shortName: "ECU",
		flagClass: "flag-ecuador",
	},
	SN: {
		id: "SN",
		name: "Senegal",
		shortName: "SEN",
		flagClass: "flag-senegal",
	},
	NL: {
		id: "NL",
		name: "Paises Bajos",
		shortName: "PAI",
		flagClass: "flag-netherlands",
	},
	IR: {
		id: "IR",
		name: "Iran",
		shortName: "IRA",
		flagClass: "flag-iran",
	},
	US: {
		id: "US",
		name: "USA",
		shortName: "USA",
		flagClass: "flag-us",
	},
	SA: {
		id: "SA",
		name: "Arabia Saudita",
		shortName: "ARA",
		flagClass: "flag-saudi-arabia",
	},
	MX: {
		id: "MX",
		name: "Mexico",
		shortName: "MEX",
		flagClass: "flag-mexico",
	},
	AU: {
		id: "AU",
		name: "Australia",
		shortName: "AUS",
		flagClass: "flag-australia",
	},
	PL: {
		id: "PL",
		name: "Polonia",
		shortName: "POL",
		flagClass: "flag-poland",
	},
	DK: {
		id: "DK",
		name: "Dinamarca",
		shortName: "DIN",
		flagClass: "flag-denmark",
	},
	TN: {
		id: "TN",
		name: "Tunez",
		shortName: "TUN",
		flagClass: "flag-tunisia",
	},
	ES: {
		id: "ES",
		name: "España",
		shortName: "ESP",
		flagClass: "flag-spain",
	},
	CR: {
		id: "CR",
		name: "Costa Rica",
		shortName: "COS",
		flagClass: "flag-costa-rica",
	},
	JP: {
		id: "JP",
		name: "Japon",
		shortName: "JAP",
		flagClass: "flag-japan",
	},
	BE: {
		id: "BE",
		name: "Belgica",
		shortName: "BEL",
		flagClass: "flag-belgium",
	},
	CA: {
		id: "CA",
		name: "Canada",
		shortName: "CAN",
		flagClass: "flag-canada",
	},
	MA: {
		id: "MA",
		name: "Marruecos",
		shortName: "MAR",
		flagClass: "flag-morocco",
	},
	HR: {
		id: "HR",
		name: "Croacia",
		shortName: "CRO",
		flagClass: "flag-croatia",
	},
	RS: {
		id: "RS",
		name: "Serbia",
		shortName: "SER",
		flagClass: "flag-serbia",
	},
	CH: {
		id: "CH",
		name: "Suiza",
		shortName: "SUI",
		flagClass: "flag-switzerland",
	},
	CM: {
		id: "CM",
		name: "Camerun",
		shortName: "CAM",
		flagClass: "flag-cameroon",
	},
	PT: {
		id: "PT",
		name: "Portugal",
		shortName: "POR",
		flagClass: "flag-portugal",
	},
	GH: {
		id: "GH",
		name: "Ghana",
		shortName: "GHA",
		flagClass: "flag-ghana",
	},
	UY: {
		id: "UY",
		name: "Uruguay",
		shortName: "URU",
		flagClass: "flag-uruguay",
	},
	KR: {
		id: "KR",
		name: "Corea del Sur",
		shortName: "COR",
		flagClass: "flag-south-korea",
	},
};

// const teams = [
// 	{
// 		id: "QA",
// 		name: "Qatar",
// 		flagClass: "flag-qatar",
// 	},
// 	{
// 		id: "EC",
// 		name: "Ecuador",
// 		flagClass: "flag-ecuador",
// 	},
// 	{
// 		id: "SN",
// 		name: "Senegal",
// 		flagClass: "flag-senegal",
// 	},
// 	{
// 		id: "NL",
// 		name: "Paises Bajos",
// 		flagClass: "flag-netherlands",
// 	},

// 	{
// 		id: "EN",
// 		name: "Inglaterra",
// 		flagClass: "flag-england",
// 	},
// 	{
// 		id: "IR",
// 		name: "Iran",
// 		flagClass: "flag-iran",
// 	},
// 	{
// 		id: "US",
// 		name: "USA",
// 		flagClass: "flag-us",
// 	},
// 	{
// 		id: "WA",
// 		name: "Gales",
// 		flagClass: "flag-wales",
// 	},
// 	{
// 		id: "AR",
// 		name: "Argentina",
// 		flagClass: "flag-argentina",
// 	},
// 	{
// 		id: "SA",
// 		name: "Arabia Saudita",
// 		flagClass: "flag-saudi-arabia",
// 	},
// 	{
// 		id: "MX",
// 		name: "Mexico",
// 		flagClass: "flag-mexico",
// 	},
// 	{
// 		id: "PL",
// 		name: "Polonia",
// 		flagClass: "flag-poland",
// 	},
// 	{
// 		id: "FR",
// 		name: "Francia",
// 		flagClass: "flag-france",
// 	},
// 	{
// 		id: "AU",
// 		name: "Australia",
// 		flagClass: "flag-australia",
// 	},
// 	{
// 		id: "DK",
// 		name: "Dinamarca",
// 		flagClass: "flag-denmark",
// 	},
// 	{
// 		id: "TN",
// 		name: "Tunez",
// 		flagClass: "flag-tunisia",
// 	},
// 	{
// 		id: "ES",
// 		name: "España",
// 		flagClass: "flag-spain",
// 	},
// 	{
// 		id: "CR",
// 		name: "Costa Rica",
// 		flagClass: "flag-costa-rica",
// 	},
// 	{
// 		id: "DE",
// 		name: "Alemania",
// 		flagClass: "flag-germany",
// 	},
// 	{
// 		id: "JP",
// 		name: "Japon",
// 		flagClass: "flag-japan",
// 	},
// 	{
// 		id: "BE",
// 		name: "Belgica",
// 		flagClass: "flag-belgium",
// 	},
// 	{
// 		id: "CA",
// 		name: "Canada",
// 		flagClass: "flag-canada",
// 	},
// 	{
// 		id: "MA",
// 		name: "Marruecos",
// 		flagClass: "flag-morocco",
// 	},
// 	{
// 		id: "HR",
// 		name: "Croacia",
// 		flagClass: "flag-croatia",
// 	},
// 	{
// 		id: "BR",
// 		name: "Brasil",
// 		flagClass: "flag-brazil",
// 	},
// 	{
// 		id: "RS",
// 		name: "Serbia",
// 		flagClass: "flag-serbia",
// 	},
// 	{
// 		id: "CH",
// 		name: "Suiza",
// 		flagClass: "flag-switzerland",
// 	},
// 	{
// 		id: "CM",
// 		name: "Camerun",
// 		flagClass: "flag-cameroon",
// 	},
// 	{
// 		id: "PT",
// 		name: "Portugal",
// 		flagClass: "flag-portugal",
// 	},
// 	{
// 		id: "GH",
// 		name: "Ghana",
// 		flagClass: "flag-ghana",
// 	},
// 	{
// 		id: "UY",
// 		name: "Uruguay",
// 		flagClass: "flag-uruguay",
// 	},
// 	{
// 		id: "KR",
// 		name: "Corea del Sur",
// 		flagClass: "flag-south-korea",
// 	},
// ];

const games = [
	{
		group: "Grupo A",
		date: "Dom  20/11, 13:00",
		homeTeam: "QA",
		awayTeam: "EC",
		homeGoals: 0,
		awayGoals: 1,
		result: " - ",
	},
	{
		group: "Grupo A",
		date: "Lun  21/11, 13:00",
		homeTeam: "SN",
		awayTeam: "NL",
		homeGoals: 1,
		awayGoals: 3,
		result: " - ",
	},
	{
		group: "Grupo A",
		date: "Vie  25/11, 10:00",
		homeTeam: "QA",
		awayTeam: "SN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo A",
		date: "Vie  25/11, 13:00",
		homeTeam: "NL",
		awayTeam: "EC",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo A",
		date: "Mar  29/11, 12:00",
		homeTeam: "NL",
		awayTeam: "QA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo A",
		date: "Mar  29/11, 12:00",
		homeTeam: "EC",
		awayTeam: "SN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo B",
		date: "Lun  21/11, 10:00",
		homeTeam: "EN",
		awayTeam: "IR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo B",
		date: "Lun  21/11, 16:00",
		homeTeam: "US",
		awayTeam: "WA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo B",
		date: "Vie  25/11, 07:00",
		homeTeam: "WA",
		awayTeam: "IR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo B",
		date: "Vie  25/11, 16:00",
		homeTeam: "EN",
		awayTeam: "US",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo B",
		date: "Mar  29/11, 16:00",
		homeTeam: "WA",
		awayTeam: "EN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo B",
		date: "Mar  29/11, 16:00",
		homeTeam: "IR",
		awayTeam: "US",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo C",
		date: "Mar  22/11, 07:00",
		homeTeam: "AR",
		awayTeam: "SA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo C",
		date: "Mar  22/11, 13:00",
		homeTeam: "MX",
		awayTeam: "PL",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo C",
		date: "Sab  26/11, 10:00",
		homeTeam: "PL",
		awayTeam: "SA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo C",
		date: "Sab  26/11, 16:00",
		homeTeam: "AR",
		awayTeam: "MX",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo C",
		date: "Mie  30/11, 16:00",
		homeTeam: "PL",
		awayTeam: "AR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo C",
		date: "Mie  30/11, 16:00",
		homeTeam: "SA",
		awayTeam: "MX",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo D",
		date: "Mar  22/11, 10:00",
		homeTeam: "DK",
		awayTeam: "TN",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo D",
		date: "Mar  22/11, 16:00",
		homeTeam: "FR",
		awayTeam: "AU",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo D",
		date: "Sab  26/11, 07:00",
		homeTeam: "TN",
		awayTeam: "AU",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo D",
		date: "Sab  26/11, 13:00",
		homeTeam: "FR",
		awayTeam: "DK",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo D",
		date: "Mie  30/11, 12:00",
		homeTeam: "TN",
		awayTeam: "FR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo D",
		date: "Mie  30/11, 12:00",
		homeTeam: "AU",
		awayTeam: "DK",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo E",
		date: "Mie  23/11, 10:00",
		homeTeam: "DE",
		awayTeam: "JP",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo E",
		date: "Mie  23/11, 13:00",
		homeTeam: "ES",
		awayTeam: "CR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo E",
		date: "Dom  27/11, 07:00",
		homeTeam: "JP",
		awayTeam: "CR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo E",
		date: "Dom  27/11, 16:00",
		homeTeam: "ES",
		awayTeam: "DE",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo E",
		date: "Jue  1/12, 16:00",
		homeTeam: "JP",
		awayTeam: "ES",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo E",
		date: "Jue  1/12, 16:00",
		homeTeam: "CR",
		awayTeam: "DE",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo F",
		date: "Mie  23/11, 07:00",
		homeTeam: "MA",
		awayTeam: "HR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo F",
		date: "Mie  23/11, 16:00",
		homeTeam: "BE",
		awayTeam: "CA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo F",
		date: "Dom  27/11, 10:00",
		homeTeam: "BE",
		awayTeam: "MA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo F",
		date: "Dom  27/11, 13:00",
		homeTeam: "HR",
		awayTeam: "CA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo F",
		date: "Jue  1/12, 12:00",
		homeTeam: "HR",
		awayTeam: "BE",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo F",
		date: "Jue  1/12, 12:00",
		homeTeam: "CA",
		awayTeam: "MA",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo G",
		date: "Jue  24/11, 07:00",
		homeTeam: "CH",
		awayTeam: "CM",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo G",
		date: "Jue  24/11, 16:00",
		homeTeam: "BR",
		awayTeam: "RS",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo G",
		date: "Lun  28/11, 07:00",
		homeTeam: "CM",
		awayTeam: "RS",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo G",
		date: "Lun  28/11, 13:00",
		homeTeam: "BR",
		awayTeam: "CH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo G",
		date: "Vie  2/12, 16:00",
		homeTeam: "CM",
		awayTeam: "BR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo G",
		date: "Vie  2/12, 16:00",
		homeTeam: "RS",
		awayTeam: "CH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo H",
		date: "Jue  24/11, 10:00",
		homeTeam: "UY",
		awayTeam: "KR",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo H",
		date: "Jue  24/11, 13:00",
		homeTeam: "PT",
		awayTeam: "GH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo H",
		date: "Lun  28/11, 10:00",
		homeTeam: "KR",
		awayTeam: "GH",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo H",
		date: "Lun  28/11, 16:00",
		homeTeam: "PT",
		awayTeam: "UY",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
		group: "Grupo H",
		date: "Vie  2/12, 12:00",
		homeTeam: "KR",
		awayTeam: "PT",
		homeGoals: null,
		awayGoals: null,
		result: " - ",
	},
	{
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
const groupTables = document.querySelectorAll(".group-table");
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

document.addEventListener("DOMContentLoaded", () => printData());

const printData = () => {
	Object.keys(groups).forEach((group, i) => {
		const groupName = `Grupo ${group}`;
		groupTemplate.querySelector(".group-name").textContent = groupName;
		const clone = groupTemplate.cloneNode(true);
		fragment.appendChild(clone);
		let groupTable = groupTables[i];
		groupTable.querySelector(".table").appendChild(fragment);
		printRows(groupTable, i);
		printGames(groupTable, groupName);
	});
};

const printRows = (groupTable, j) => {
	groupsArr[j].forEach((teamID, i) => {
		const { flagClass, name } = countries[teamID];
		teamTemplate.querySelector(".pos").textContent = i + 1;
		teamTemplate.querySelector(".team").innerText = name;
		const iElement = document.createElement("i");
		iElement.classList.add("flag", `${flagClass}`);
		teamTemplate.querySelector(".team").prepend(iElement);

		const clone = teamTemplate.cloneNode(true);
		fragment.appendChild(clone);
	});
	groupTable.querySelector("tbody").appendChild(fragment);
};

const printGames = (groupTable, groupName) => {
	const groupGames = games.filter((game) => game.group === groupName);
	console.log(groupGames);
	groupGames.forEach((game) => {
		const { date, homeTeam, awayTeam, homeGoals, awayGoals } = game;
		const homeFlagClass = countries[homeTeam].flagClass;
		const awayFlagClass = countries[awayTeam].flagClass;
		gameTemplate.querySelector(".date").textContent = date;
		gameTemplate.querySelector(".home-team").textContent =
			countries[homeTeam].shortName;
		gameTemplate.querySelector(".home-goals").textContent = homeGoals;
		gameTemplate.querySelector(".away-goals").textContent = awayGoals;
		gameTemplate.querySelector(".away-team").textContent =
			countries[awayTeam].shortName;
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

fetch("http://localhost:8000/results")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.forEach((game) => {
			const gameItem = `
            <div>
                <span>${game.group}</span>
                <span>${game.date}</span>
                <span>${game.homeTeam}</span>
                <span>${game.result}</span>
                <span>${game.awayTeam}</span>
            </div>`;
			// feedDisplay.insertAdjacentHTML("beforeend", gameItem);
		});
	})
	.catch((err) => console.error(err));
