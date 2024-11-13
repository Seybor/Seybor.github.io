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

		this.renderElements()

		// gameControler.intervalGame = setInterval(() => {
		// 	this.moveEnemyCar()
		// }, this.gameSpeed[gameControler.gameSpeed - 1])
	},

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