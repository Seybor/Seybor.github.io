import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import gameControler from './gameControler.js'
import { getRandomNumber } from './modules/utils-others.js'

const threeGame = {
	init: function () {
		gameControler.clearDisplay()
		clearInterval(gameControler.intervalGame)
		gameControler.startGame = true
		gameControler.updateScore()
		gameControler.updateLife()
		gameControler.updateSpeed()

		this.elementsCubes = {
			one: [
				[2, 20],
				[2, 19],
				[3, 20]
			],
			two: [
				[5, 20]
			],
			three: [
				[8, 20],
				[8, 19],
			],
		}

		this.enemyCubes = {
			one: [
				[2, 2],
			],
			two: [
				[5, 2],
				[5, 1]

			],
			three: [
				[8, 2],
				[8, 1],
				[9, 2],
				[9, 1],
			],
		}

		this.renderElements()
		this.renderEnemy()

		gameControler.intervalGame = setInterval(() => {
			this.moveEnemyCube()
		}, this.gameSpeed[gameControler.gameSpeed - 1])
	},

	gameSpeed: [500, 400, 300, 250, 200, 175, 150, 125, 100],

	elementsCubes: {
		one: [
			[2, 20],
			[2, 19],
			[3, 20]
		],
		two: [
			[5, 20]
		],
		three: [
			[8, 20],
			[8, 19],
		],
	},

	enemyCubes: {
		one: [
			[2, 2],
		],
		two: [
			[5, 2],
			[5, 1]
		],
		three: [
			[8, 2],
			[8, 1],
			[9, 2],
			[9, 1],
		],
	},

	renderElements: function () {
		for (let key in this.elementsCubes) {
			for (let i = 0; i < this.elementsCubes[key].length; i++) {
				let x = this.elementsCubes[key][i][0]
				let y = this.elementsCubes[key][i][1]

				s('.content-display__field div[data-coord="' + x + ',' + y + '"]').classList.add('block')
				attr('.content-display__field div[data-coord="' + x + ',' + y + '"]', { 'data-cube': key })
			}
		}
	},

	renderEnemy: function () {

		for (let key in this.enemyCubes) {
			for (let i = 0; i < this.enemyCubes[key].length; i++) {
				let x = this.enemyCubes[key][i][0]
				let y = this.enemyCubes[key][i][1]

				s('.content-display__field div[data-coord="' + x + ',' + y + '"]').classList.add('block-enemy')
				attr('.content-display__field div[data-coord="' + x + ',' + y + '"]', { 'data-cube': 'enemy' })
			}
		}

	},

	moveCube: function (cube) {

		if (this.elementsCubes[cube].length === 1) {

			this.elementsCubes[cube].push([this.elementsCubes[cube][0][0], this.elementsCubes[cube][0][1] - 1])

		} else if (this.elementsCubes[cube].length === 2) {

			this.elementsCubes[cube].push([this.elementsCubes[cube][0][0] + 1, this.elementsCubes[cube][0][1]])

		} else if (this.elementsCubes[cube].length === 3) {

			this.elementsCubes[cube].push([this.elementsCubes[cube][0][0] + 1, this.elementsCubes[cube][0][1] - 1])

		} else if (this.elementsCubes[cube].length === 4) {

			this.elementsCubes[cube].pop()
			this.elementsCubes[cube].pop()
			this.elementsCubes[cube].pop()

		}

		this.clearCube(cube)
		this.renderElements(cube)

	},

	moveEnemyCube: function () {

		this.clearEnemy()

		for (let key in this.enemyCubes) {
			for (let i = 0; i < this.enemyCubes[key].length; i++) {
				this.enemyCubes[key][i][1] = this.enemyCubes[key][i][1] + 1
			}
		}

		if (this.checkCross()) {

			if (this.checkWin()) {

				gameControler.score = gameControler.score + 10

				if (gameControler.score % 100 === 0) {

					gameControler.gameSpeed++

					if (gameControler.gameSpeed > 9) {
						alert('You Win')
						clearInterval(gameControler.intervalGame)
						return
					}
				}



			} else {
				gameControler.life--

				if (gameControler.life <= 0) {
					alert('Game Over')
					clearInterval(gameControler.intervalGame)
					return
				}
			}

			this.init()
			return
		}

		this.renderEnemy()

	},

	checkCross: function () {

		for (let key in this.enemyCubes) {
			for (let i = 0; i < this.enemyCubes[key].length; i++) {
				if (this.enemyCubes[key][i][1] > 18) {
					return true
				}
			}
		}

		return false

	},

	checkWin: function () {

		if (
			this.elementsCubes['one'].length === this.enemyCubes['one'].length &&
			this.elementsCubes['two'].length === this.enemyCubes['two'].length &&
			this.elementsCubes['three'].length === this.enemyCubes['three'].length
		) {
			return true
		}

		return false
	},

	clearEnemy: function () {
		all('.block-enemy[data-cube="' + 'enemy' + '"]').forEach((e) => {

			e.classList.remove('block-enemy')
			e.setAttribute('data-cube', '')

		})
	},

	clearCube: function (cube) {

		all('.block[data-cube="' + cube + '"]').forEach((e) => {

			e.classList.remove('block')

		})

	},

	fire: function () {
		console.log('fire')
	}

}
export default threeGame