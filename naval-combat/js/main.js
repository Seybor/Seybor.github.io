import { s, all } from './modules/base.js'
import * as UI from './modules/ui.js'
import * as DOM from './modules/utilities-dom.js'
import * as UTIL from './modules/utilities-others.js'

// $('body').hide()

// UI.changeTheme()
// UI.burger()
// UI.accordionStart()
// UI.tabStart()

// DOM.eraseInput()
// DOM.removeAddClass()
// DOM.wrapper()

// UTIL.generateRandomNumbers()
// UTIL.getRandomNumber()
// UTIL.shuffleArr()

const generateRandomNumber = (min = 1, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

s('.btn[data-btn="1"]').addEventListener('click', (evt) => {
	console.log(1)

	let playerOne = generateRandomNumber()
	let playerTwo = generateRandomNumber()

	s(`.field[data-player="1"] .cell[data-id="${playerOne}"]`).classList.add('cell--active')
	s(`.field[data-player="2"] .cell[data-id="${playerTwo}"]`).classList.add('cell--active')

	let counter = 0;

	all(`.field[data-player="1"] .cell`).forEach(e => {
		e.addEventListener('click', (evt) => {

			e.dataset.id == playerOne ? e.classList.add('cell--win') : e.classList.add('cell--mistake')

			if (e.dataset.id == playerOne) {
				alert('The player won')

				return
			}

			function botPlayer() {
				let cell
				do {

					cell = generateRandomNumber()

					if (counter >= 100) {
						alert('Done')
						break
					}

				} while (s(`.field[data-player="2"] .cell--mistake[data-id="${cell}"]`))

				counter++


				s(`.field[data-player="2"] .cell[data-id="${cell}"]`).classList.add(cell == playerTwo ? 'cell--win' : 'cell--mistake')

				if (cell == playerTwo) {
					alert('The bot won')
				}

			}

			botPlayer()

		})
	})

})