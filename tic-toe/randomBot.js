const s = (el) => {
	return document.querySelector(el)
}
const a = (els) => {
	return document.querySelectorAll(els)
}

let move = 0

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

		console.log(arrPlayer.length)

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
	let arr = []

	a(`.cell[data-player="0"]`).forEach(el => {
		arr.push(el.dataset.cell)
	})

	cell = s(`.cell[data-cell="${arr[Math.floor(Math.random() * arr.length)]}"]`)

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





