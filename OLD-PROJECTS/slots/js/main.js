import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

const getRandomNumber = (min = 1, max = 20) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const gameControler = {

	init: function () {
		slotGame.currentBet = 10
		slotGame.bank = 1000
		this.getButtonsHandler()
		this.renderPosition(slotGame.combinations[slotGame.position])
	},

	getButtonsHandler: function () {

		evt('.content-controls__bet-item--minus', 'click', () => {
			slotGame.currentBet -= 10

			if (slotGame.currentBet < 10) {
				slotGame.currentBet = 10
				return
			}

			this.betUpdate()
		})

		evt('.content-controls__bet-item--plus', 'click', () => {

			slotGame.currentBet += 10

			if (slotGame.currentBet > 100) {
				slotGame.currentBet = 100
				return
			}

			this.betUpdate()

		})

		evt('.content-controls__spin', 'click', () => {

			slotGame.getSpin()

		})


	},

	betUpdate: function () {
		text('.content-controls__bet-item--number', slotGame.currentBet)
	},

	bankUpdate: function () {
		text('.content-bank', slotGame.bank)
	},

	renderPosition: function (id) {
		s('.content-display__item--one img').src = `img/${id[0]}.png`
		s('.content-display__item--two img').src = `img/${id[1]}.png`
		s('.content-display__item--three img').src = `img/${id[2]}.png`
	}
}

const slotGame = {
	currentBet: 10,
	bank: 1000,
	combinations: [
		[1, 1, 1],
		[1, 1, 2],
		[1, 1, 3],
		[1, 2, 1],
		[1, 2, 2],
		[1, 2, 3],
		[1, 3, 1],
		[1, 3, 2],
		[1, 3, 3],
		[2, 1, 1],
		[2, 1, 2],
		[2, 1, 3],
		[2, 2, 1],
		[2, 2, 2],
		[2, 2, 3],
		[2, 3, 1],
		[2, 3, 2],
		[2, 3, 3],
		[3, 1, 1],
		[3, 1, 2],
		[3, 1, 3],
		[3, 2, 1],
		[3, 2, 2],
		[3, 2, 3],
		[3, 3, 1],
		[3, 3, 2],
		[3, 3, 3]
	],
	position: 5,

	getSpin: function () {

		if (this.bank - this.currentBet < 0) {
			alert('Недостаточно средств')
			return
		}

		this.bank -= this.currentBet

		this.position = getRandomNumber(0, this.combinations.length - 1)

		gameControler.renderPosition(this.combinations[this.position])

		this.checkSpin()
	},

	checkSpin: function () {

		if (this.combinations[this.position][0] === this.combinations[this.position][1] && this.combinations[this.position][1] === this.combinations[this.position][2]) {

			if (this.combinations[this.position][0] === 1) {
				this.bank += this.currentBet * 3
			} else if (this.combinations[this.position][0] === 2) {
				this.bank += this.currentBet * 6
			} else if (this.combinations[this.position][0] === 3) {
				this.bank += this.currentBet * 9
			}

		}

		gameControler.bankUpdate()



		if (this.bank === 0) {
			setTimeout(() => {
				alert('Вы проиграли')
			}, 100)
			return
		}

	}
}

gameControler.init()