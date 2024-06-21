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

s('.rope__img[data-img="top"]').addEventListener('pointerdown', (evt) => {
	let start = Math.round(evt.clientY)
	let shift = Math.round(evt.clientY)

	s('.rope__img[data-img="top"]').closest('.rope').style.setProperty('z-index', '10000')

	const onMouseMove = (evt) => {

		if (Math.round(evt.clientY) > shift) {
			shift = Math.round(evt.clientY)
		} else if (Math.round(evt.clientY) < shift) {
			shift = Math.round(evt.clientY)
		} else {
			return
		}

		if (shift > window.innerHeight) {
			shift = window.innerHeight
		}

		if (shift <= 0) {
			shift = 0
		}

		s('.rope__img[data-img="top"]').closest('.rope')
			.style.setProperty('transform', `matrix(1, 0, 0, 1, 0, ${(Number(window.innerHeight) * (-1)) + shift})`)

	}

	const onMouseUp = (evt) => {
		// let end = Math.round(evt.clientY)

		// if (Math.abs(start - end) > 250) {
		// 	s('.rope__img[data-img="top"]').closest('.rope').style.setProperty('transform', 'matrix(1, 0, 0, 1, 0, 0)')
		// 	s('.rope__img[data-img="top"]').closest('.rope').style.setProperty('z-index', '10000')
		// }

		document.removeEventListener('pointermove', onMouseMove);
		document.removeEventListener('pointerup', onMouseUp);
	}


	document.addEventListener('pointermove', onMouseMove);
	document.addEventListener('pointerup', onMouseUp);
})