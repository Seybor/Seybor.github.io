import { s, all } from './modules/base.js'
import * as UI from './modules/ui.js'
import * as DOM from './modules/utilities-dom.js'
import * as UTIL from './modules/utilities-others.js'

import * as ARRAYS from './data/all.js'
import PV from './data/pv.js'
import PH from './data/phrases.js'
import EXPLANATION from './data/explanation/w.js'

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

const getBigArray = () => {
	let arr = []
	for (let key in ARRAYS) {
		arr = arr.concat(ARRAYS[key])
	}
	arr = arr.concat(PV.concat(PH.concat(EXPLANATION)))

	return arr
}
const BIG_ARR = getBigArray()

let arr = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
]
let sum = BIG_ARR.length


for (let key in ARRAYS) {
	ARRAYS[key].sort((a, b) => {
		return a.pos - b.pos
	})

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

		if (e.pos > 5000 && e.pos <= 6000) {
			arr[5].push(e)
		}

		if (e.pos > 6000 && e.pos < 10000) {
			arr[6].push(e)
		}
		if (e.pos > 10000 && e.pos < 22000) {
			arr[7].push(e)
		}
		if (e.pos === 22000) {
			arr[8].push(e)
		}
	})

}

arr.forEach(e => {
	e.sort((a, b) => a.pos - b.pos)
})

console.log(arr)

PH.sort((a, b) => a.pos - b.pos)
PV.sort((a, b) => a.pos - b.pos)


const getNums = () => {
	all('.nav__link span').forEach(e => {

		switch (e.parentNode.dataset.id) {
			case 'ir': {
				e.textContent = ARRAYS.ir.length
				return
			} break
			case 'pv': {
				e.textContent = PV.length
				return
			} break
			case 'ph': {
				e.textContent = PH.length
				return
			} break
			case 'exp-w': {
				e.textContent = EXPLANATION.length
				return
			} break
		}

		e.textContent = arr[e.parentNode.dataset.id - 1].length



	})

}

const getRender = () => {
	all('.nav__link').forEach(e => {
		e.addEventListener('click', (evt) => {
			evt.preventDefault()
			let index = 0

			s('.wrap').textContent = ''


			const renderOther = (arr) => {
				arr.forEach((e, id) => {
					let string = `<p>${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''}${e.ru} - ${e.exp ? e.exp + ' - ' : ''}(${e.pos})</p>`

					if ((id + 1) % 20 === 0) {

						string += '<hr class="divider">'
					}

					s('.wrap').insertAdjacentHTML('beforeend', string);
				})
			}

			switch (e.dataset.id) {
				case 'ir': {
					renderOther(ARRAYS.ir)
					return
				} break
				case 'pv': {
					renderOther(PV)
					return
				} break
				case 'ph': {
					renderOther(PH)
					return
				} break
				case 'exp-w': {
					renderOther(EXPLANATION)
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

				let string = `<p>${id + 1}) ${e.en} - ${e.tr} - ${e.ru} (${e.pos})</p>`

				if ((id + 1) % 20 === 0) {
					string += '<hr class="divider">'
				}

				s('.wrap').insertAdjacentHTML('beforeend', string);

			})

		})
	})
}

const getSearch = () => {

	const searchStart = () => {

		const renderStart = (result) => {
			s('.wrap').textContent = ''
			s('.search__input').value = ''
			s('.search__input').placeholder = `${result.length} совпадений`

			result.forEach((e, id) => {
				let string = `<p>${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''} ${e.ru} (${e.pos})</p>`

				s('.wrap').insertAdjacentHTML('beforeend', string);
			})
		}

		let searchTerm = s('.search__input').value.toLowerCase().trim()

		if (searchTerm.length > 1) {

			let result = BIG_ARR.filter(item => item.en.includes(searchTerm))

			if (result.length === 0) {
				result = BIG_ARR.filter(item => item.ru.includes(searchTerm))

				if (result.length === 0) {
					result = BIG_ARR.filter(item => {
						item.pos = item.pos.toString()
						return item.pos.includes(searchTerm)
					})

					if (result.length === 0) {
						s('.wrap').textContent = 'Не найдено'
						s('.search__input').value = ''
						s('.search__input').placeholder = '0 совпадений'
					} else {
						renderStart(result)
					}
				} else {
					renderStart(result)
				}


			} else {
				renderStart(result)
			}

			console.log(result.length)

		}
	}

	s('.search').addEventListener('click', (evt) => {
		if (evt.target === evt.currentTarget) {
			s('.search').classList.toggle('search--active')
		}
	})
	s('.search__btn').addEventListener('click', (evt) => {
		searchStart()
	})
	s('.search__input').addEventListener('keydown', (evt) => {
		if (evt.key === 'Enter' || evt.keyCode === 13) {
			s('.search__btn').click()
		}
	})
}

s('#arr-sum').textContent = sum
s('#search').addEventListener('click', (evt) => {
	s('.search').classList.toggle('search--active')
	s('.search__input').focus()
})


getNums()
getRender()
getSearch()




