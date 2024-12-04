import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

for (let y = 1; y <= 20; y++) {
	for (let x = 1; x <= 20; x++) {
		let elem = '<div class="cell" data-coord="[' + x + ',' + y + ']"></div>'

		insert('.content', elem)
	}
}

const getRandomNumber = (min = 1, max = 20) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const arrBlocks = [
	1,
	2,
	3,
	4,
	5,
]

let interval = 0
let x = 0
let y = 0
let block = 0
let points = 0
let level = 1
let speed = 1000

function onDocumentClick(evt) {
	if (evt.key === 'ArrowRight') {

		if (x + block < 20) {
			if (s('.cell[data-coord="[' + (x + block + 1) + ',' + y + ']"]').classList.contains('cell--active')) {
				x--
			}
		}

		if (x >= 20 - block) {
			x = 20 - block
		}
		clearPosition()
		x++
		renderBlock()
	} else if (evt.key === 'ArrowLeft') {

		if (x > 1) {
			if (s('.cell[data-coord="[' + (x - 1) + ',' + y + ']"]').classList.contains('cell--active')) {
				x++
			}
		}


		if (x <= 1) {
			x = 2
		}
		clearPosition()
		x--
		renderBlock()

	} else if (evt.key === 'ArrowDown') {
		moveY()
	}
}

function renderBlock() {
	for (let i = 0; i < block; i++) {
		s('.cell[data-coord="[' + (x + i) + ',' + y + ']"]').classList.add('cell--active')
	}
}

function clearPosition() {
	for (let i = 0; i < block; i++) {
		s('.cell[data-coord="[' + (x + i) + ',' + y + ']"]').classList.remove('cell--active')
	}
}

function moveY() {


	if (y >= 20) {
		checkLineComplete()
		document.removeEventListener('keydown', onDocumentClick)
		block = arrBlocks[getRandomNumber(0, arrBlocks.length - 1)]
		x = getRandomNumber(1, 20 - block)
		y = 1
		renderBlock()
		moveBlock()
		return
	}

	for (let i = 0; i < block; i++) {

		if (s('.cell[data-coord="[' + (x + i) + ',' + (y + 1) + ']"]').classList.contains('cell--active')) {
			checkLineComplete()
			document.removeEventListener('keydown', onDocumentClick)
			block = arrBlocks[getRandomNumber(0, arrBlocks.length - 1)]
			x = getRandomNumber(1, 20 - block)
			y = 1
			renderBlock()
			moveBlock()
			break
		}

	}

	clearPosition()
	y++
	checkLoose()
	renderBlock()
}

function moveBlock() {
	document.addEventListener('keydown', onDocumentClick)
}

function checkLineComplete() {

	for (let y = 1; y <= 20; y++) {
		for (let x = 1; x <= 20; x++) {
			if (s('.cell[data-coord="[' + x + ',' + y + ']"]').classList.contains('cell--active')) {
				if (x === 20) {

					for (let i = 1; i <= 20; i++) {
						s('.cell[data-coord="[' + i + ',' + y + ']"]').classList.remove('cell--active')
					}

					let arr = []

					for (let i = 1; i <= 20; i++) {
						for (let j = 1; j < y; j++) {
							if (s('.cell[data-coord="[' + i + ',' + j + ']"]').classList.contains('cell--active')) {
								arr.push([parseInt(i), parseInt(j)])
								s('.cell[data-coord="[' + i + ',' + j + ']"]').classList.remove('cell--active')
							}
						}
					}

					arr.forEach(e => {
						s('.cell[data-coord="[' + e[0] + ',' + (e[1] + 1) + ']"]').classList.add('cell--active')
					})

					points++
					text('.points span', points)
					if (points >= 15) {
						clearInterval(interval)
						document.removeEventListener('keydown', onDocumentClick)
						alert('Вы выиграли')

					}
					if (points % 5 === 0) {
						level++
						speed -= 250
						text('.level span', level)
						clearInterval(interval)
						interval = setInterval(moveY, speed)
					}

				}
			} else {
				break
			}
		}
	}

}

function checkLoose() {
	for (let i = 1; i <= 20; i++) {
		if (s('.cell[data-coord="[' + i + ',2]"').classList.contains('cell--active')) {
			clearInterval(interval)
			document.removeEventListener('keydown', onDocumentClick)
			alert('Вы проиграли')
			return
		}
	}
}

function startGame() {
	clearInterval(interval)
	document.removeEventListener('keydown', onDocumentClick)

	all('.cell--active').forEach(e => {
		e.classList.remove('cell--active')
	})

	block = arrBlocks[getRandomNumber(0, arrBlocks.length - 1)]
	x = getRandomNumber(1, 20 - block)
	y = 1

	renderBlock()
	moveBlock()

	interval = setInterval(moveY, speed)
}

evt('.game', 'click', startGame)