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

// Генерация информации о жизнях
for (let i = 1; i <= 16; i++) {
	let content = `<div data-id="${i}"></div>`

	insert('.content-display__info-life', content)
}

let gameCounter = 0 // Индекс текущей игры
let gameSpeed = 1 // Скорость игры
let startGame = false // Переопределяет функции для кнопок при начале игры
let intervalGame = 0// Интервал игры

// document.oncontextmenu = () => false // убираем вызов контекстного меню

// Список координат игр для превью и для начала самой игры
const games = [
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
]

// Функция отрисовки превью игры
function renderPrevievGame(value = 0) {

	games[value].coord.forEach(item => {
		let coord = item.join(',')
		let el = s('.content-display__field').querySelector(`[data-coord="${coord}"]`)
		el.classList.add('active')
	})
}

// Функция очистки предыдущей игры
function clearDisplay() {

	all('.content-display__field div').forEach(e => {
		e.setAttribute('class', '')
	})

}

// Функция для обработки кнопок
function getButtonsHandler() {
	evt('.btn--left', 'click', () => {

		if (startGame) {

			switch (gameCounter) {
				case 0: {
					snakeGame.direction = 'left'
					snakeGame.moveSnake(snakeGame.direction)
				}
			}

		} else {
			gameCounter--

			if (gameCounter < 0) {
				gameCounter = games.length - 1
			}

			clearDisplay()
			renderPrevievGame(gameCounter)
		}

	})

	evt('.btn--right', 'click', () => {

		if (startGame) {

			switch (gameCounter) {
				case 0: {
					snakeGame.direction = 'right'
					snakeGame.moveSnake(snakeGame.direction)
				}
			}

		} else {
			gameCounter++

			if (gameCounter > games.length - 1) {
				gameCounter = 0
			}

			clearDisplay()
			renderPrevievGame(gameCounter)
		}


	})

	evt('.btn--top', 'click', () => {

		if (startGame) {

			switch (gameCounter) {
				case 0: {
					snakeGame.direction = 'up'
					snakeGame.moveSnake(snakeGame.direction)
				}
			}

		} else {
			gameSpeed++

			if (gameSpeed > 9) {
				gameSpeed = 1
			}

			text('.content-display__info-speed span:nth-child(2)', gameSpeed)
		}



	})

	evt('.btn--bottom', 'click', () => {

		if (startGame) {

			switch (gameCounter) {
				case 0: {
					snakeGame.direction = 'down'
					snakeGame.moveSnake(snakeGame.direction)
				}
			}

		} else {
			gameSpeed--

			if (gameSpeed < 1) {
				gameSpeed = 9
			}

			text('.content-display__info-speed span:nth-child(2)', gameSpeed)
		}

	})

	evt('.btn--fire', 'click', () => {
		startCurrentGame(gameCounter)
	})

	evt('.btn--reset', 'click', () => {
		clearDisplay()
		gameCounter = 0
		gameSpeed = 1
		startGame = false
		text('.content-display__info-speed span:nth-child(2)', gameSpeed)
		clearInterval(intervalGame)
		renderPrevievGame(gameCounter)
	})
}

function startCurrentGame(value) {

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

// Функции для разных игры
// Игра змейка
const snakeGame = {
	init: function () {
		clearDisplay()
		clearInterval(intervalGame)
		startGame = true
		this.arrSnakeSegments.head = [6, 12]
		this.arrSnakeSegments.body = [[5, 12], [4, 12],]
		this.direction = 'right'

		this.renderSnake()
		this.renderApple()

		intervalGame = setInterval(() => {
			this.moveSnake(this.direction)
		}, 1100 - gameSpeed * 100)
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
				this.applePosition = [Math.floor(getRandomNumber(1, 10)), getRandomNumber(1, 20)]

				if (this.applePosition[0] === this.arrSnakeSegments.head[0] && this.applePosition[1] === this.arrSnakeSegments.head[1]) {
					this.checkApplePosition = true
				}

				this.arrSnakeSegments.body.forEach(item => {
					if (this.applePosition[0] === item[0] && this.applePosition[1] === item[1]) {
						this.checkApplePosition = true
					}
				})

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
			}

			let ifLoose = this.checkLoose(this.shift)
			if (ifLoose) {
				alert('Вы проиграли')
				clearInterval(intervalGame)

				setTimeout(() => {
					this.init()
				}, 1000)

				return
			}
			clearDisplay()
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
}

// Игра гонки

const gameRacing = {

}

// Игра тетрис

const gameTetris = {

}



// Старт страницы
renderPrevievGame(0)
getButtonsHandler()