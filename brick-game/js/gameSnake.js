import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import gameControler from './gameControler.js'
import { getRandomNumber } from './modules/utils-others.js'

const snakeGame = {
	init: function () {
		gameControler.clearDisplay()
		clearInterval(gameControler.intervalGame)
		gameControler.startGame = true
		gameControler.updateScore()
		gameControler.updateLife()
		this.arrSnakeSegments.head = [6, 12]
		this.arrSnakeSegments.body = [[5, 12], [4, 12],]
		this.direction = 'right'

		this.renderSnake()
		this.renderApple()

		gameControler.intervalGame = setInterval(() => {
			this.moveSnake(this.direction)
		}, 1100 - gameControler.gameSpeed * 100)
	},

	arrSnakeSegments: {
		head: [6, 12],
		body: [
			[5, 12],
			[4, 12],
		]
	},

	applePosition: [1, 1], // Позиция яблока
	checkApplePosition: false, // Проверка пересечения яблока с сегментами змейки
	direction: 'right', // направление змейки
	shift: [0, 0], // Координаты смещения в зависимости от кнопки

	renderApple: function (currentApple = true) {

		if (currentApple) {
			// Цикл для генерации яблока

			do {
				this.checkApplePosition = false
				this.applePosition = [Math.floor(getRandomNumber(1, 10)), getRandomNumber(1, 20)]

				if (this.applePosition[0] === this.arrSnakeSegments.head[0] && this.applePosition[1] === this.arrSnakeSegments.head[1]) {
					this.checkApplePosition = true
					continue
				}

				for (let i = 0; i < this.arrSnakeSegments.body.length; i++) {
					if (this.applePosition[0] === this.arrSnakeSegments.body[0] && this.applePosition[1] === this.arrSnakeSegments.body[1]) {
						this.checkApplePosition = true
						break
					}
				}

			} while (this.checkApplePosition)
		}

		let el = s(`.content-display__field div[data-coord="${this.applePosition.join(',')}"]`)
		el.classList.add('apple')
	},

	renderSnake: function () {

		let el = s(`.content-display__field div[data-coord="${this.arrSnakeSegments.head.join(',')}"]`)
		el.classList.add('snake-head')

		this.arrSnakeSegments.body.forEach(item => {
			let el = s(`.content-display__field div[data-coord="${item.join(',')}"]`)
			el.classList.add('snake-body')
		})
	},

	moveSnake: function (position) {

		switch (position) {
			case 'left': {
				this.shift = [this.arrSnakeSegments.head[0] - 1, this.arrSnakeSegments.head[1]]
				break;
			}
			case 'right': {
				this.shift = [this.arrSnakeSegments.head[0] + 1, this.arrSnakeSegments.head[1]]
				break;
			}
			case 'up': {
				this.shift = [this.arrSnakeSegments.head[0], this.arrSnakeSegments.head[1] - 1]
				break;
			}
			case 'down': {
				this.shift = [this.arrSnakeSegments.head[0], this.arrSnakeSegments.head[1] + 1]
				break;
			}
		}

		if (this.shift[0] === this.arrSnakeSegments.body[0][0] && this.shift[1] === this.arrSnakeSegments.body[0][1]) {

			if (this.direction === 'right') {
				this.direction = 'left'
			} else if (this.direction === 'left') {
				this.direction = 'right'
			} else if (this.direction === 'up') {
				this.direction = 'down'
			} else if (this.direction === 'down') {
				this.direction = 'up'
			}

			return
		} else {
			this.arrSnakeSegments.body.unshift([this.arrSnakeSegments.head[0], this.arrSnakeSegments.head[1]])
			this.arrSnakeSegments.head = this.shift
			let appleControl = this.checkApple()

			if (appleControl) {
				this.arrSnakeSegments.body.pop()
			} else {
				gameControler.score += 10
				gameControler.updateScore()

				let levelControl = this.checkNextLevel()

				if (levelControl) {
					gameControler.gameSpeed++
					clearInterval(gameControler.intervalGame)

					let winControl = this.checkWin()
					gameControler.updateSpeed()
					console.log(gameControler.gameSpeed)

					if (winControl) {
						alert('Вы победили')
						clearInterval(gameControler.intervalGame)
						gameControler.init()
					}

					gameControler.intervalGame = setInterval(() => {
						this.moveSnake(this.direction)
					}, 1100 - gameControler.gameSpeed * 100)
				}
			}

			let ifLoose = this.checkLoose(this.shift)
			if (ifLoose) {
				gameControler.life--

				if (gameControler.life < 1) {
					alert('game over')
					gameControler.score = 0
					gameControler.life = 4
					gameControler.updateLife()
					gameControler.updateScore()
					clearInterval(gameControler.intervalGame)

				} else {
					alert('Вы проиграли, у вас осталось ' + gameControler.life + ' жизней')
					clearInterval(gameControler.intervalGame)
				}

				this.init()

			}
			gameControler.clearDisplay()
			this.renderSnake()
			this.renderApple(!appleControl)

		}
	},

	checkApple: function () {
		if (!(this.arrSnakeSegments.head[0] === this.applePosition[0] && this.arrSnakeSegments.head[1] === this.applePosition[1])) {
			return true
		}

		return false
	},

	checkLoose: function (headPosition) {

		if (headPosition[0] > 10 || headPosition[0] < 1 || headPosition[1] > 20 || headPosition[1] < 1) {
			return true
		}

		for (let i = 0; i < this.arrSnakeSegments.body.length; i++) {
			if (headPosition[0] === this.arrSnakeSegments.body[i][0] && headPosition[1] === this.arrSnakeSegments.body[i][1]) {
				return true
			}
		}

		return false

	},

	checkNextLevel: function () {
		if (gameControler.score % 100 === 0) {
			return true
		}

		return false
	},

	checkWin: function () {
		if (gameControler.gameSpeed > 9) {
			return true
		}

		return false
	}
}

export default snakeGame