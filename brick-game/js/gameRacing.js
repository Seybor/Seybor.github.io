import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import gameControler from './gameControler.js'
import { getRandomNumber } from './modules/utils-others.js'

const gameRacing = {
	init: function () {
		gameControler.clearDisplay()
		clearInterval(gameControler.intervalGame)
		gameControler.startGame = true
		gameControler.updateScore()
		gameControler.updateLife()

		this.carSegments = [
			[4, 17],
			[4, 18],
			[5, 18],
			[3, 18],
			[4, 19],
			[3, 20],
			[5, 20],
		]

		this.enemyCarSegments = {
			right: [
				[7, 1],
				[7, 2],
				[8, 2],
				[6, 2],
				[7, 3],
				[6, 4],
				[8, 4],
			],
			left: [
				[4, 1],
				[4, 2],
				[5, 2],
				[3, 2],
				[4, 3],
				[3, 4],
				[5, 4],
			],
		}

		this.renderWalls()
		this.renderCar()
		this.renderEnemyCar()

		gameControler.intervalGame = setInterval(() => {
			this.moveEnemyCar()
		}, 1100 - gameControler.gameSpeed * 100)
	},

	direction: 'right',
	directionEnemyCar: 'right',

	carSegments: [
		[4, 17],
		[4, 18],
		[5, 18],
		[3, 18],
		[4, 19],
		[3, 20],
		[5, 20],
	],

	enemyCarSegments: {
		right: [
			[7, 1],
			[7, 2],
			[8, 2],
			[6, 2],
			[7, 3],
			[6, 4],
			[8, 4],
		],
		left: [
			[4, 1],
			[4, 2],
			[5, 2],
			[3, 2],
			[4, 3],
			[3, 4],
			[5, 4],
		],
	},


	walls: [
		[1, 1],
		[1, 2],
		[1, 3],
		[1, 4],
		[1, 5],
		[1, 6],
		[1, 7],
		[1, 8],
		[1, 9],
		[1, 10],
		[1, 11],
		[1, 12],
		[1, 13],
		[1, 14],
		[1, 15],
		[1, 16],
		[1, 17],
		[1, 18],
		[1, 19],
		[1, 20],
		[2, 1],
		[2, 2],
		[2, 3],
		[2, 4],
		[2, 5],
		[2, 6],
		[2, 7],
		[2, 8],
		[2, 9],
		[2, 10],
		[2, 11],
		[2, 12],
		[2, 13],
		[2, 14],
		[2, 15],
		[2, 16],
		[2, 17],
		[2, 18],
		[2, 19],
		[2, 20],
		[10, 1],
		[10, 2],
		[10, 3],
		[10, 4],
		[10, 5],
		[10, 6],
		[10, 7],
		[10, 8],
		[10, 9],
		[10, 10],
		[10, 11],
		[10, 12],
		[10, 13],
		[10, 14],
		[10, 15],
		[10, 16],
		[10, 17],
		[10, 18],
		[10, 19],
		[10, 20],
		[9, 1],
		[9, 2],
		[9, 3],
		[9, 4],
		[9, 5],
		[9, 6],
		[9, 7],
		[9, 8],
		[9, 9],
		[9, 10],
		[9, 11],
		[9, 12],
		[9, 13],
		[9, 14],
		[9, 15],
		[9, 16],
		[9, 17],
		[9, 18],
		[9, 19],
		[9, 20],
	],

	renderWalls: function () {

		this.walls.forEach(item => {
			let el = s(`.content-display__field div[data-coord="${item.join(',')}"]`)
			el.classList.add('wall')
		})

	},

	renderEnemyCar: function () {

		all('.content-display__field .enemy-car').forEach(e => e.classList.remove('enemy-car'))

		this.enemyCarSegments[this.directionEnemyCar].forEach(item => {
			let el = s(`.content-display__field div[data-coord="${item.join(',')}"]`)
			el.classList.add('enemy-car')
		})

	},

	renderCar: function () {

		all('.content-display__field .car').forEach(e => e.classList.remove('car'))

		this.carSegments.forEach(item => {
			let el = s(`.content-display__field div[data-coord="${item.join(',')}"]`)
			el.classList.add('car')
		})
	},

	moveCar: function (direction) {

		switch (direction) {
			case 'right': {

				if (this.carSegments[0][0] === 4) {

					for (let i = 0; i < this.carSegments.length; i++) {
						this.carSegments[i][0] = this.carSegments[i][0] + 3
					}

					if (this.checkCrash()) {

						gameControler.life--

						if (gameControler.life <= 0) {
							clearInterval(gameControler.intervalGame)
							alert('Game Over')
						}

						gameRacing.init()
					}
					this.renderCar()

				} else {
					return
				}

			} break;
			case 'left': {

				if (this.carSegments[0][0] === 7) {

					for (let i = 0; i < this.carSegments.length; i++) {
						this.carSegments[i][0] = this.carSegments[i][0] - 3
					}

					if (this.checkCrash()) {

						gameControler.life--

						if (gameControler.life <= 0) {
							clearInterval(gameControler.intervalGame)
							alert('Game Over')
						}

						gameRacing.init()
					}

					this.renderCar()

				} else {
					return
				}

			} break;
		}

	},

	moveEnemyCar: function () {

		for (let i = 0; i < this.enemyCarSegments.right.length; i++) {
			this.enemyCarSegments[this.directionEnemyCar][i][1] = this.enemyCarSegments[this.directionEnemyCar][i][1] + 1
		}

		if (this.checkCrash()) {

			gameControler.life--

			if (gameControler.life <= 0) {
				clearInterval(gameControler.intervalGame)
				alert('Game Over')
			}

			gameRacing.init()
		}

		if (this.checkEnemyCarBeyondField()) {
			gameControler.score = gameControler.score + 10
			gameControler.updateScore()

			if (gameControler.score % 100 === 0) {
				gameControler.gameSpeed++


				if (gameControler.gameSpeed > 9) {
					alert('You win')
					clearInterval(gameControler.intervalGame)
					gameControler.init()
				}

				gameControler.updateSpeed()
				clearInterval(gameControler.intervalGame)
				gameControler.intervalGame = setInterval(() => {
					this.moveEnemyCar()
				}, 1100 - gameControler.gameSpeed * 100)
			}

			this.getNewEnemyCar()
		}

		this.renderEnemyCar()

	},

	checkEnemyCarBeyondField: function () {
		if (this.enemyCarSegments[this.directionEnemyCar][this.enemyCarSegments[this.directionEnemyCar].length - 1][1] > 20) {
			return true
		}

		return false
	},

	checkCrash: function () {


		for (let i = 0; i < this.carSegments.length; i++) {

			for (let j = 0; j < this.enemyCarSegments[this.directionEnemyCar].length; j++) {

				if (this.carSegments[i][0] === this.enemyCarSegments[this.directionEnemyCar][j][0] && this.carSegments[i][1] === this.enemyCarSegments[this.directionEnemyCar][j][1]) {
					return true
				}

			}

		}

		return false
	},

	getNewEnemyCar: function () {
		let dir = getRandomNumber(1, 2)

		if (dir === 1) {
			this.directionEnemyCar = 'right'
		} else {
			this.directionEnemyCar = 'left'
		}

		this.enemyCarSegments = {
			right: [
				[7, 1],
				[7, 2],
				[8, 2],
				[6, 2],
				[7, 3],
				[6, 4],
				[7, 4],
				[8, 4],
			],
			left: [
				[4, 1],
				[4, 2],
				[5, 2],
				[3, 2],
				[4, 3],
				[3, 4],
				[4, 4],
				[5, 4],
			],
		}
	}


}

export default gameRacing