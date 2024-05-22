const s = (el) => {
	return document.querySelector(el)
}
const a = (els) => {
	return document.querySelectorAll(els)
}

let move = 0

const winnerNumbers = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
]

let probablyWinnerNumbers = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[1, 5, 9],
	[3, 5, 7],
]
const corners = [1, 3, 7, 9]

const checkWinners = () => {
	const arrPlayer = []
	const arrBot = []

	let finalArr = []

	function nextPlayer() {

		if (move < 0) {
			return
		}

		if (move >= 9) {
			alert('Ничья')
			return
		}

		if (move % 2 === 0) {
			s('.field').style.pointerEvents = 'auto'
		} else {
			botPlayer()
		}
	}

	function findWinners() {
		a(`.cell[data-player="1"]`).forEach(el => {
			arrPlayer.push(el.dataset.cell)
		})

		a(`.cell[data-player="2"]`).forEach(el => {
			arrBot.push(el.dataset.cell)
		})

		if (arrPlayer.length === 3) {
			for (let i = 0; i < winnerNumbers.length; i++) {
				if (winnerNumbers[i].join('') === arrPlayer.join('')) {
					move = -1
					alert('Победа')

					arrPlayer.forEach(el => s(`.cell[data-cell="${el}"]`).classList.add('cell--victory'))

					return
				}
			}
		} else if (arrPlayer.length > 3) {

			for (let i = 0; i < winnerNumbers.length; i++) {

				for (let j = 0; j < winnerNumbers[i].length; j++) {
					if (arrPlayer.includes(String(winnerNumbers[i][j]))) {
						finalArr.push(winnerNumbers[i][j])
					}
				}

				console.log(finalArr)

				if (finalArr.length === 3) {
					move = -1
					alert('Победа')

					finalArr.forEach(el => s(`.cell[data-cell="${el}"]`).classList.add('cell--victory'))

					return
				} else {
					finalArr = []
				}

			}
		}

		if (arrBot.length === 3) {
			for (let i = 0; i < winnerNumbers.length; i++) {
				if (winnerNumbers[i].join('') === arrBot.join('')) {
					move = -1
					alert('Поражение')

					arrBot.forEach(el => s(`.cell[data-cell="${el}"]`).classList.add('cell--defeat'))

					return
				}
			}
		} else if (arrBot.length > 3) {
			for (let i = 0; i < winnerNumbers.length; i++) {

				for (let j = 0; j < winnerNumbers[i].length; j++) {
					if (arrBot.includes(String(winnerNumbers[i][j]))) {
						finalArr.push(winnerNumbers[i][j])
					}
				}

				if (finalArr.length === 3) {
					move = -1
					alert('Поражение')

					finalArr.forEach(el => s(`.cell[data-cell="${el}"]`).classList.add('cell--defeat'))

					return
				} else {
					finalArr = []
				}

			}
		}
	}

	if (move >= 5) {
		findWinners()
		nextPlayer()
	} else {
		nextPlayer()
	}

}

const botPlayer = () => {
	let cell
	let arrFree = []
	let arrPlayer = []
	let arrBot = []

	a(`.cell[data-player="0"]`).forEach(el => {
		arrFree.push(el.dataset.cell)
	})

	a(`.cell[data-player="1"]`).forEach(el => {
		arrPlayer.push(el.dataset.cell)
	})

	a(`.cell[data-player="2"]`).forEach(el => {
		arrBot.push(el.dataset.cell)
	})

	switch (move) {
		case 1: {
			if (arrFree.includes('5')) {
				cell = s(`.cell[data-cell="5"]`)
			} else {
				cell = s(`.cell[data-cell="${corners[Math.floor(Math.random() * corners.length)]}"]`)
			}
		} break
		case 3: {
			probablyWinnerNumbers = probablyWinnerNumbers.filter((arr) => !arr.includes(+arrBot[0]))

			probablyWinnerNumbers.forEach(el => {

				el.concat(arrPlayer)

			})

		}

	}

	cell.textContent = 'O'
	cell.dataset.player = '2'
	cell.style.pointerEvents = 'none'
	move++

	checkWinners()
}


a('.cell').forEach(el => {
	el.addEventListener('click', (evt) => {
		el.textContent = 'X'
		el.dataset.player = '1'
		el.style.pointerEvents = 'none'
		move++

		s('.field').style.pointerEvents = 'none'

		checkWinners()
	})
})





