export default class Team {
	constructor(name, pos, won, draw, loss, gf, ga) {
		this.name = name;
		this.pos = pos;
		this.won = won;
		this.draw = draw;
		this.loss = loss;
		this.gf = gf;
		this.ga = ga;
		this.pts = this.won * 3 + this.draw;
		this.diff = this.gf - this.ga;
		this.played = this.won + this.draw + this.loss;
	}
}

export class Game {
	constructor(homeTeam, awayTeam) {
		this.homeTeam = homeTeam;
		this.awayTeam = awayTeam;
	}
}
