import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

const snake = {
	field: 400,
	speed: 500,
	size: 4,
	position_head: [211],
	position_body: [210, 209, 208],
	orientation: 'right',
	points: 0
}

let apple = 0
let control = false
let continueMove = true
let segmentBody = 0


const getRandomNumber = (min = 1, max = snake.field) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateApple() {
	console.log(snake.position_body.length)
	if (snake.position_body.length >= snake.field - 1) {
		alert('you win')
		startGame()
		return
	}
	do {
		apple = getRandomNumber()

		if (apple === snake.position_head[0]) {
			control = true
		} else {
			control = false
		}

		snake.position_body.forEach(e => {
			if (e === apple) {
				control = true
			}
		})

	} while (control)

	attr(`.cell[data-id="${apple}"]`, { 'data-apple': 'true' })

}

function checkApple() {
	if (snake.position_head[0] === apple) {
		snake.points = snake.points + 1
		text(`.cell[data-id="${snake.position_head[0]}"]`, `${snake.points}`)
		attr(`.cell[data-id="${apple}"]`, { 'data-apple': '' })
		updateBody()
		generateApple()
	}
}

function moveSnake() {

	attr(`.cell[data-id="${snake.position_head[0]}"]`, { 'data-snake': '' })
	text(`.cell[data-id="${snake.position_head[0]}"]`, '')
	for (let i = 0; i < snake.position_body.length; i++) {
		attr(`.cell[data-id="${snake.position_body[i]}"]`, { 'data-snake': '' })
	}
	snake.position_body.unshift(snake.position_head[0])
	segmentBody = snake.position_body.pop()

}

function renderHead() {
	attr(`.cell[data-id="${snake.position_head[0]}"]`, { 'data-snake': 'head' })
	text(`.cell[data-id="${snake.position_head[0]}"]`, `${snake.points}`)
}

function renderBody() {
	for (let i = 0; i < snake.position_body.length; i++) {
		attr(`.cell[data-id="${snake.position_body[i]}"]`, { 'data-snake': 'body' })
	}
}

function moveHead(orientation) {

	switch (orientation) {
		case 'right': {
			snake.position_head[0] = snake.position_head[0] + 1
			if ((snake.position_head[0] - 1) % Math.sqrt(snake.field) === 0) {
				snake.position_head[0] = snake.position_head[0] - Math.sqrt(snake.field)
			}
		} break
		case 'left': {

			snake.position_head[0] = snake.position_head[0] - 1
			if (snake.position_head[0] % Math.sqrt(snake.field) === 0) {
				snake.position_head[0] = snake.position_head[0] + Math.sqrt(snake.field)
			}

		} break
		case 'up': {

			snake.position_head[0] = snake.position_head[0] - Math.sqrt(snake.field)
			if (snake.position_head[0] <= 0) {
				snake.position_head[0] = snake.position_head[0] + snake.field
			}

		} break

		case 'down': {

			snake.position_head[0] = snake.position_head[0] + Math.sqrt(snake.field)
			if (snake.position_head[0] > snake.field) {
				snake.position_head[0] = snake.position_head[0] - snake.field
			}

		} break
	}





}

function checkOrientation(orientation, mouseClick) {

	if (orientation === 'right' && mouseClick === 'left') {
		continueMove = false
		return
	} else if (orientation === 'left' && mouseClick === 'right') {
		continueMove = false
		return
	} else if (orientation === 'up' && mouseClick === 'down') {
		continueMove = false
		return
	} else if (orientation === 'down' && mouseClick === 'up') {
		continueMove = false
		return
	} else if (orientation === 'right' && mouseClick === 'right') {
		continueMove = true
		snake.orientation = 'right'
	} else if (orientation === 'right' && mouseClick === 'up') {
		continueMove = true
		snake.orientation = 'up'
	} else if (orientation === 'right' && mouseClick === 'down') {
		continueMove = true
		snake.orientation = 'down'
	} else if (orientation === 'left' && mouseClick === 'left') {
		continueMove = true
		snake.orientation = 'left'
	} else if (orientation === 'left' && mouseClick === 'up') {
		continueMove = true
		snake.orientation = 'up'
	} else if (orientation === 'left' && mouseClick === 'down') {
		continueMove = true
		snake.orientation = 'down'
	} else if (orientation === 'up' && mouseClick === 'right') {
		continueMove = true
		snake.orientation = 'right'
	} else if (orientation === 'up' && mouseClick === 'left') {
		continueMove = true
		snake.orientation = 'left'
	} else if (orientation === 'up' && mouseClick === 'down') {
		continueMove = true
		snake.orientation = 'down'
	} else if (orientation === 'down' && mouseClick === 'right') {
		continueMove = true
		snake.orientation = 'right'
	} else if (orientation === 'down' && mouseClick === 'left') {
		continueMove = true
		snake.orientation = 'left'
	} else if (orientation === 'down' && mouseClick === 'down') {
		continueMove = true
		snake.orientation = 'down'
	}



}

function updateBody() {
	snake.position_body.push(segmentBody)
}

function hitCheck() {
	for (let i = 0; i < snake.position_body.length; i++) {
		if (snake.position_head[0] === snake.position_body[i]) {
			continueMove = false
			alert('game over')
			startGame()
			return
		}
	}
}

function game(mouseClick) {

	checkOrientation(snake.orientation, mouseClick)

	if (!continueMove) {
		return
	}

	moveSnake()

	moveHead(mouseClick)
	hitCheck()

	renderHead()
	checkApple()
	renderBody()
}

function startGame() {

	if (s(`.cell[data-id="${snake.position_head[0]}"]`)) {
		text(`.cell[data-id="${snake.position_head[0]}"]`, '')
	}

	switch (snake.field) {
		case 400: {
			snake.position_head = [211]
			snake.position_body = [210, 209, 208]
		} break
		case 100: {
			snake.position_head = [55]
			snake.position_body = [54, 53, 52]
			all('.cell').forEach(e => {
				e.style.width = '40px'
				e.style.height = '40px'
			})
		} break
		case 25: {
			snake.position_head = [14]
			snake.position_body = [13, 12, 11]

			all('.cell').forEach(e => {
				e.style.width = '80px'
				e.style.height = '80px'
			})
		}
	}


	snake.orientation = 'right'
	snake.points = 0

	if (s(`.cell[data-id="${apple}"]`)) {
		attr(`.cell[data-id="${apple}"]`, { 'data-apple': '' })
	}


	generateApple()
	renderHead()
	renderBody()
}

function gameHandler() {
	document.addEventListener('keydown', (evt) => {

		if (evt.code === 'ArrowLeft') {
			evt.preventDefault()
			game('left')
		}
		if (evt.code === 'ArrowRight') {
			evt.preventDefault()

			game('right')
		}
		if (evt.code === 'ArrowUp') {
			evt.preventDefault()

			game('up')

		}
		if (evt.code === 'ArrowDown') {
			evt.preventDefault()

			game('down')

		}

	})
}

s('form').addEventListener('submit', (e) => {
	e.preventDefault()
	snake.field = +s('input[name="field"]:checked').value
	snake.speed = +s('input[name="speed"]:checked').value

	text('.content', '')
	for (let i = 1; i <= snake.field; i++) {
		let item = `<div class="cell" data-id="${i}"></div>`

		insert('.content', item)
	}

	startGame()
	let interval = 0

	if (snake.speed != 0) {
		interval = setInterval(() => {
			game(snake.orientation)
		}, snake.speed)
	}



	gameHandler()
})



