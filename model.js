export default class Team {
	constructor({ id, won, draw, loss, gf, ga, group }) {
		this.id = id;
		this.won = won;
		this.draw = draw;
		this.loss = loss;
		this.gf = gf;
		this.ga = ga;
		this.pts = this.won * 3 + this.draw;
		this.diff = this.gf - this.ga;
		this.played = this.won + this.draw + this.loss;
		this.group = group;
	}
}

export class Game {
	constructor(homeTeam, awayTeam) {
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
	}
}
