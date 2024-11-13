import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import snakeGame from './gameSnake.js'
import gameRacing from './gameRacing.js'
import threeGame from './gameThree.js'

const gameControler = {

	init: function () {

		this.gameCounter = 0// Индекс текущей игры
		this.gameSpeed = 1 // Скорость игры
		this.startGame = false // Переопределяет функции для кнопок при начале игры
		this.intervalGame = 0// Интервал игры
		this.score = 0 // Счетчик очков
		this.life = 4 // Счетчик жизней

		this.renderPrevievGame(0)

	},

	gameCounter: 0,// Индекс текущей игры
	gameSpeed: 1, // Скорость игры
	startGame: false, // Переопределяет функции для кнопок при начале игры
	intervalGame: 0,// Интервал игры
	score: 0, // Счетчик очков
	life: 4, // Счетчик жизней

	// Список координат игр для превью и для начала самой игры
	games: [
		{
			name: 'A',
			coord: [
				[5, 3],
				[6, 3],
				[4, 4],
				[4, 5],
				[4, 6],
				[4, 7],
				[7, 4],
				[7, 5],
				[7, 6],
				[7, 7],
				[5, 5],
				[6, 5],
				[4, 12],
				[5, 12],
				[6, 12],
				[8, 12]
			]
		},
		{
			name: 'B',
			coord: [
				[4, 3],
				[5, 3],
				[6, 3],
				[4, 4],
				[4, 5],
				[4, 6],
				[4, 7],
				[7, 4],
				[7, 6],
				[5, 5],
				[6, 5],
				[5, 7],
				[6, 7],
				[5, 10],
				[5, 11],
				[4, 11],
				[6, 11],
				[5, 12],
				[4, 13],
				[6, 13]
			]
		},
		{
			name: 'C',
			coord: [
				[7, 3],
				[7, 7],
				[5, 3],
				[6, 3],
				[4, 4],
				[4, 5],
				[4, 6],
				[5, 7],
				[6, 7],
				[2, 10],
				[2, 11],
				[3, 11],
				[5, 11],
				[8, 10],
				[8, 11],
			]
		}
	],

	// Функция отрисовки превью игры
	renderPrevievGame: function (value = 0) {
		this.games[value].coord.forEach(item => {
			let coord = item.join(',')
			let el = s('.content-display__field').querySelector(`[data-coord="${coord}"]`)
			el.classList.add('active')
		})
	},

	// Функция очистки предыдущей игры
	clearDisplay: function () {

		all('.content-display__field div').forEach(e => {
			e.setAttribute('class', '')
		})

	},

	// Функция для обработки кнопок
	getButtonsHandler: function () {
		evt('.btn--left', 'click', () => {

			if (this.startGame) {

				switch (this.gameCounter) {
					case 0: {
						snakeGame.direction = 'left'
						snakeGame.moveSnake(snakeGame.direction)
					} break;
					case 1: {
						gameRacing.direction = 'left'
						gameRacing.moveCar(gameRacing.direction)
					} break;
					case 2: {
						threeGame.moveCube('one')
					} break;
				}

			} else {
				this.gameCounter--

				if (this.gameCounter < 0) {
					this.gameCounter = this.games.length - 1
				}

				gameControler.clearDisplay()
				gameControler.renderPrevievGame(this.gameCounter)
			}

		})

		evt('.btn--right', 'click', () => {

			if (this.startGame) {

				switch (this.gameCounter) {
					case 0: {
						snakeGame.direction = 'right'
						snakeGame.moveSnake(snakeGame.direction)
					} break;
					case 1: {
						gameRacing.direction = 'right'
						gameRacing.moveCar(gameRacing.direction)
					} break;
					case 2: {
						threeGame.moveCube('three')
					} break;

				}

			} else {
				this.gameCounter++

				if (this.gameCounter > this.games.length - 1) {
					this.gameCounter = 0
				}

				gameControler.clearDisplay()
				gameControler.renderPrevievGame(this.gameCounter)
			}


		})

		evt('.btn--top', 'click', () => {

			if (this.startGame) {

				switch (this.gameCounter) {
					case 0: {
						snakeGame.direction = 'up'
						snakeGame.moveSnake(snakeGame.direction)
					} break
					case 1: {
						gameRacing.moveEnemyCar()
					} break
					case 2: {
						threeGame.moveCube('two')
					} break;
				}

			} else {
				this.gameSpeed++

				if (this.gameSpeed > 9) {
					this.gameSpeed = 1
				}

				this.updateSpeed(this.gameSpeed)
			}



		})

		evt('.btn--bottom', 'click', () => {

			if (this.startGame) {

				switch (this.gameCounter) {
					case 0: {
						snakeGame.direction = 'down'
						snakeGame.moveSnake(snakeGame.direction)
					}
				}

			} else {
				this.gameSpeed--

				if (this.gameSpeed < 1) {
					this.gameSpeed = 9
				}

				text('.content-display__info-speed span:nth-child(2)', this.gameSpeed)
			}

		})

		evt('.btn--fire', 'click', () => {

			if (this.startGame) {

				if (this.gameCounter === 2) {
					threeGame.fire()
				}

				return

			} else {
				this.score = 0
				this.life = 4
				this.updateLife()
				this.updateScore()
				this.updateSpeed()
				this.startCurrentGame(this.gameCounter)
			}


		})

		evt('.btn--reset', 'click', () => {
			this.clearDisplay()
			clearInterval(this.intervalGame)
			this.init()
			this.updateScore()
			this.updateLife()
			this.updateSpeed()
		})
	},

	// Функция обновления счета
	updateScore: function () {
		text('.content-display__info-score span:nth-child(2)', this.score)
	},

	// Функция обновления жизней
	updateLife: function () {
		text('.content-display__info-life span:nth-child(2)', this.life)
	},

	updateSpeed: function () {
		text('.content-display__info-speed span:nth-child(2)', this.gameSpeed)
	},

	// Функция запуска игры
	startCurrentGame: function (value) {

		switch (value) {
			case 0:
				snakeGame.init()
				break;
			case 1:
				gameRacing.init()
				break;
			case 2:
				threeGame.init()
				break;
		}
	}
}

export default gameControler