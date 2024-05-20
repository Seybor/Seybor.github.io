const s = (el) => {
	return document.querySelector(el)
}
const a = (els) => {
	return document.querySelectorAll(els)
}

let move = 0
let interval
const winnerNumbers = [
	[1, 2, 3],
	[1, 4, 7],
	[1, 5, 9],
	[2, 5, 8],
	[3, 6, 9],
	[3, 5, 7],
	[4, 5, 6],
	[7, 8, 9],
]
const corners = [1, 3, 7, 9]
let intermediateOptions = []
let intermediateOptionsTwo = []

const seeWinnersNummbers = (cell) => {
	winnerNumbers.forEach(el => {
		if (el.includes(+cell)) {
			el.forEach(e => {
				s(`.cell[data-cell="${e}"]`).classList.add('cell--active')
			})
		}
	})
}

const removeWinnersNumbers = () => {
	if (a('.cell--active')) {
		a('.cell--active').forEach(el => el.classList.remove('cell--active'))
	}
}

const checkWinners = () => {
	switch (move) {
		case 5: {

		} break;
		default: {
			if (move % 2 === 0) {
				pcPlayer()
			} else {
				botPlayer()
			}
		}
	}

}

const botPlayer = () => {
	s('.field').style.pointerEvents = 'none'
	let pcPlayer = []
	let botPlayer = []
	let cell

	a(`.cell[data-player="1"]`).forEach(e => {
		pcPlayer.push(e.dataset.cell)
	})

	a(`.cell[data-player="2"]`).forEach(e => {
		botPlayer.push(e.dataset.cell)
	})

	switch (move) {
		case 1: {
			if (!pcPlayer.includes('5')) {
				cell = s(`.cell[data-cell="5"]`)
			} else {
				cell = s(`.cell[data-cell="${corners[Math.floor(Math.random() * corners.length)]}"]`)
			}
		} break
		case 3: {
			winnerNumbers.forEach(el => {
				if (!el.includes(+botPlayer[0])) {
					intermediateOptions.push(el)
				}
			})

			intermediateOptions.forEach(el => {
				if (el.includes(+pcPlayer[0])) {
					intermediateOptionsTwo.push(el)
				}
			})

			intermediateOptions = []

			intermediateOptionsTwo.forEach(el => {
				if (el.includes(+pcPlayer[1])) {
					intermediateOptions.push(el)
				}
			})

			if (intermediateOptions.length > 0) {

			}

		}
	}

	cell.textContent = 'O'
	cell.dataset.player = '2'
	cell.style.pointerEvents = 'none'
	move++
	s('.field').style.pointerEvents = 'auto'

	checkWinners()
}

const pcPlayer = () => {
	a('.cell').forEach(el => {
		el.addEventListener('click', (evt) => {
			removeWinnersNumbers()
			el.textContent = 'X'
			el.dataset.player = '1'
			el.style.pointerEvents = 'none'
			move++

			checkWinners()
		})
	})

	a('.cell').forEach(el => {
		el.addEventListener('pointerenter', (evt) => {
			interval = setTimeout(seeWinnersNummbers, 1000, el.dataset.cell)
		})
	})

	a('.cell').forEach(el => {
		el.addEventListener('pointerleave', (evt) => {
			clearTimeout(interval)
			removeWinnersNumbers()
		})
	})
}

pcPlayer()


