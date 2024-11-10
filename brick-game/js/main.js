import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

// Генератор случайных чисел
const getRandomNumber = (min = 1, max = 20) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// Генерация игрового поля
for (let y = 1; y <= 20; y++) {
	for (let x = 1; x <= 10; x++) {
		let content = `<div data-coord="${x},${y}"></div>`

		insert('.content-display__field', content)
	}
}

document.oncontextmenu = () => false // убираем вызов контекстного меню

const gameControler = {

	init: function () {

		this.gameCounter = 0// Индекс текущей игры
		this.gameSpeed = 1 // Скорость игры
		this.startGame = false // Переопределяет функции для кнопок при начале игры
		this.intervalGame = 0// Интервал игры
		this.score = 0 // Счетчик очков
		this.life = 4 // Счетчик жизней

		this.renderPrevievGame(0)
		this.getButtonsHandler()

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
				[6, 7]
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
				[6, 7]
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
					}
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
					}
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
					}
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

				return

			} else {
				this.score = 0
				this.life = 4
				this.updateLife()
				this.startCurrentGame(this.gameCounter)
			}


		})

		evt('.btn--reset', 'click', () => {
			this.clearDisplay()
			this.gameCounter = 0
			this.gameSpeed = 1
			this.startGame = false
			this.updateSpeed()
			clearInterval(this.intervalGame)
			this.renderPrevievGame(this.gameCounter)
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

				break;
			case 2:

				break;
		}
	}
}


// Функции для разных игры
// Игра змейка
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
						return
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

// Игра гонки

const gameRacing = {

}

// Игра тетрис

const gameTetris = {

}



// Старт страницы

gameControler.init()
