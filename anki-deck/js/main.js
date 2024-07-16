import { s, all } from './modules/base.js'
import * as UI from './modules/ui.js'
import * as DOM from './modules/utilities-dom.js'
import * as UTIL from './modules/utilities-others.js'

import * as ARRAYS from './data/all.js'

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

UI.burger()

let arr = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
]

let sum = 0
for (let key in ARRAYS) {
	ARRAYS[key].sort((a, b) => {
		return a.pos - b.pos
	})

	sum += ARRAYS[key].length

	if (key === 'ir') {
		continue
	}

	ARRAYS[key].forEach((e, id) => {

		if (e.pos <= 1000) {
			arr[0].push(e)
		}

		if (e.pos > 1000 && e.pos <= 2000) {
			arr[1].push(e)
		}

		if (e.pos > 2000 && e.pos <= 3000) {
			arr[2].push(e)
		}

		if (e.pos > 3000 && e.pos <= 4000) {
			arr[3].push(e)
		}

		if (e.pos > 4000 && e.pos <= 5000) {
			arr[4].push(e)
		}

		if (e.pos > 5000 && e.pos <= 10000) {
			arr[5].push(e)
		}

		if (e.pos > 10000 && e.pos < 22000) {
			arr[6].push(e)
		}
		if (e.pos === 22000) {
			arr[7].push(e)
		}
	})

}

s('#arr').textContent = sum

arr.forEach(e => {
	e.sort((a, b) => a.pos - b.pos)
})


all('.nav__link span').forEach(e => {

	switch (e.parentNode.dataset.id) {
		case 'ir': {
			e.textContent = ARRAYS.ir.length
		} break
		case '1': {
			e.textContent = arr[0].length
		} break
		case '2': {
			e.textContent = arr[1].length
		} break
		case '3': {
			e.textContent = arr[2].length
		} break
		case '4': {
			e.textContent = arr[3].length
		} break
		case '5': {
			e.textContent = arr[4].length
		} break
		case '6': {
			e.textContent = arr[5].length
		} break
		case '7': {
			e.textContent = arr[6].length
		} break
		case '8': {
			e.textContent = arr[7].length
		} break
		default: {
			e.textContent = ''
		}
	}


})

all('.nav__link').forEach(e => {
	e.addEventListener('click', (evt) => {
		evt.preventDefault()
		let index = 0

		s('.should-hidden').classList.remove('should-hidden--active')

		s('.wrap').textContent = ''

		switch (e.dataset.id) {
			case 'ir': {
				ARRAYS.ir.forEach((e, id) => {
					let string = `<p>${id + 1}) ${e.en} - ${e.tr} - ${e.ru} (${e.pos})</p>`

					s('.wrap').insertAdjacentHTML('beforeend', string);
				})
				return
			} break
			case '1': {
				index = 0
			} break
			case '2': {
				index = 1
			} break
			case '3': {
				index = 2
			} break
			case '4': {
				index = 3
			} break
			case '5': {
				index = 4
			} break
			case '6': {
				index = 5
			} break
			case '7': {
				index = 6
			} break
			case '8': {
				index = 7
			} break
			case '9': {
				index = 8
			} break
			case '10': {
				index = 9
			} break
			case '11': {
				index = 10
			} break
			default: {
				alert('Не найдено')
				return
			}
		}

		arr[index].forEach((e, id) => {
			// let string = `<tr>
			// <td class="td td-id">${id + 1}</td>
			// <td class="td td-en">${e.en}</td>
			// <td class="td td-tr">${e.tr}</td>
			// <td class="td td-ru">${e.ru}</td>
			// <td class="td td-pos">${e.pos}</td>
			// </tr>`
			// s('#tbody').insertAdjacentHTML('beforeend', string);

			let string = `<p>${id + 1}) ${e.en} - ${e.tr} - ${e.ru} (${e.pos})</p>`

			s('.wrap').insertAdjacentHTML('beforeend', string);

		})

	})
})

s('#search').addEventListener('click', (evt) => {
	s('.search').classList.toggle('search--active')
})

s('.search').addEventListener('click', (evt) => {

	if (evt.target === evt.currentTarget) {
		s('.search').classList.toggle('search--active')
	}

})




