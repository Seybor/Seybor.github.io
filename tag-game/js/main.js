import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

for (let i = 1; i < 16; i++) {
	let cell = '<div class="cell" data-id=' + i + ' data-position=' + i + '>' + i + '</div>'

	insert('.content', cell)
}

insert('.content', '<div class="cell cell--free" data-id="16" data-position="16"></div>')

let attempt = 0

function moveCell(direction, startGame = false) {

	let shift = 0

	switch (direction) {
		case 'down': {
			shift = 4
		} break
		case 'up': {
			shift = -4
		} break
		case 'left': {
			shift = -1
		} break
		case 'right': {
			shift = 1
		} break
	}

	let empty = s('.cell[data-id="16"]').dataset.position
	let selected = s(`.cell[data-position="${empty - shift}"]`) ? s(`.cell[data-position="${empty - shift}"]`) : 0;

	if (selected === 0) {
		return
	}

	if (direction === 'left' && (empty == 4 || empty == 8 || empty == 12)) {
		return
	}

	if (direction === 'right' && (empty == 5 || empty == 9 || empty == 13)) {
		return
	}

	selected.classList.add('cell--free')
	s('.cell[data-id="16"]').classList.remove('cell--free')

	let el1 = s('.cell[data-id="16"]')
	let el2 = selected
	let tempId = el1.dataset.id

	el1.textContent = el2.textContent
	el2.textContent = ''

	el1.dataset.id = el2.dataset.id;
	el2.dataset.id = tempId;

	if (!startGame) {
		attempt++
		checkWin()
	}


}

function onDocumentClick(evt) {
	if (evt.code === 'ArrowLeft') {
		evt.preventDefault()

		moveCell('left', false)
	}
	if (evt.code === 'ArrowRight') {
		evt.preventDefault()

		moveCell('right', false)
	}
	if (evt.code === 'ArrowUp') {
		evt.preventDefault()

		moveCell('up', false)
	}
	if (evt.code === 'ArrowDown') {
		evt.preventDefault()

		moveCell('down', false)
	}

}

function gameControl() {
	document.addEventListener('keydown', onDocumentClick)
}

function startGame() {

	attempt = 0

	let moveArray = ['left', 'right', 'up', 'down']
	let counter = 100

	let interval = setInterval(() => {

		let random = Math.floor(Math.random() * moveArray.length);
		moveCell(moveArray[random], true)
		counter--

		if (counter <= 0) {
			clearInterval(interval)
			document.removeEventListener('keydown', onDocumentClick)
			gameControl()
		}

	}, 10)

}

function checkWin() {
	let ifWin = true

	for (let i = 1; i <= 16; i++) {
		if (s(`.cell[data-id="${i}"]`).dataset.id != s(`.cell[data-id="${i}"]`).dataset.position) {
			ifWin = false
			break
		}
	}

	if (ifWin) {
		alert('You win! You attempt: ' + attempt)
	}
}

evt('.game', 'click', () => {
	startGame()
})

