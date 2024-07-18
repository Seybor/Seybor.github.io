import { s, all } from './modules/base.js'
import * as UI from './modules/ui.js'
import * as DOM from './modules/utilities-dom.js'
import * as UTIL from './modules/utilities-others.js'

import ALL from './data/words/all.js'

let sum = 0

Object.entries(ALL).forEach(e => {
	sum += e[1].length

	if (e[1][0].pos) {
		e[1].sort((a, b) => {
			return a.pos - b.pos
		})
	}

})

console.log(ALL)

s('#arr-sum').textContent = sum

const getNum = () => {

	function startNum(arr, wordsIntervalOne = 0, wordsIntervalTwo = 0) {
		if (wordsIntervalOne > wordsIntervalTwo) {
			alert('Ошибка в интервалах')
			return
		}
		let i = arr.findIndex(num => num.pos > wordsIntervalOne)
		let sum = 0
		do {
			sum++
			if (i >= arr.length - 1) {
				console.log(i)
				break
			}
			i++
		} while (arr[i].pos >= wordsIntervalOne && arr[i].pos < wordsIntervalTwo)

		return sum
	}

	all('.nav__link span').forEach(e => {

		if (ALL[e.parentElement.dataset.id]) {
			e.textContent = ALL[e.parentElement.dataset.id].length
		} else {
			switch (e.parentElement.dataset.id) {
				case 'w-1': {
					e.textContent = startNum(ALL.w, 1, 1000)
				} break
				case 'w-2': {
					e.textContent = startNum(ALL.w, 1000, 2000)
				} break
				case 'w-3': {
					e.textContent = startNum(ALL.w, 2000, 3000)
				} break
				case 'w-4': {
					e.textContent = startNum(ALL.w, 3000, 4000)
				} break
				case 'w-5': {
					e.textContent = startNum(ALL.w, 4000, 5000)
				} break
				case 'w-6': {
					e.textContent = startNum(ALL.w, 5000, 6000)
				} break
				case 'w-7': {
					e.textContent = startNum(ALL.w, 6000, 10000)
				} break
				case 'w-8': {
					e.textContent = startNum(ALL.w, 10000, 22000)
				} break
				case 'w-9': {
					e.textContent = startNum(ALL.w, 21999, 22001)
				} break
			}
		}



	})





}

const getSearch = () => {
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
	s('#search').addEventListener('click', (evt) => {
		s('.search').classList.toggle('search--active')
		s('.search__input').focus()
	})


	function searchStart() {

		let str = s('.search__input').value.trim().toLowerCase()

		if (str <= 1) {
			s('.search__input').value = ''
			s('.search__input').placeholder = `длина строки слишком маленькая`
			return
		}

		let ruEnStr = isFirstLetterEnglish(str)
		let ruOrEn = ''

		if (!ruEnStr) {
			ruEnStr = isFirstLetterRussian(str)

			if (!ruEnStr) {
				s('.search__input').value = ''
				s('.search__input').placeholder = `недопустимые символы`
				return
			}

			ruOrEn = 'ru'

		} else {
			ruOrEn = 'en'
		}


		let result = []

		Object.entries(ALL).forEach(e => {
			let el = e[1].filter(item => {
				return item[ruOrEn].includes(str)
			})

			result = result.concat(el)

		})

		console.log(result.length)

		if (result.length <= 0) {
			s('.wrap').textContent = ''
			s('.search__input').value = ''
			s('.search__input').placeholder = `найдено: 0 совпадений`
		} else {
			renderStart(result)
		}


	}

	function renderStart(result) {
		s('.wrap').textContent = ''
		s('.search__input').value = ''
		s('.search__input').placeholder = `найдено: ${result.length} совпадений`

		result.forEach((e, id) => {
			let string = `<p>${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''} ${e.ru}${e.pos ? ' (' + e.pos + ')' : ''}</p>`

			s('.wrap').insertAdjacentHTML('beforeend', string);
		})
	}

	function isFirstLetterEnglish(str) {
		return /^[a-zA-Z]/.test(str);
	}
	function isFirstLetterRussian(str) {
		return /^[а-яА-Я]/.test(str);
	}

}

const getRender = (arr, wordsIntervalOne = 0, wordsIntervalTwo = 0) => {
	s('.wrap').textContent = ''

	if (wordsIntervalOne != 0) {

		if (wordsIntervalOne > wordsIntervalTwo) {
			alert('Ошибка в интервалах')
			return
		}

		let i = arr.findIndex(num => num.pos > wordsIntervalOne)
		let id = 1
		do {

			let string = `<p>${id}) ${arr[i].en} - ${arr[i].tr ? arr[i].tr + ' - ' : ''}${arr[i].ru}${arr[i].exp ? ' - ' + arr[i].exp : ''}${arr[i].pos ? ' (' + arr[i].pos + ')' : ''}</p>`

			if ((id + 1) % 20 === 0) {

				string += '<hr class="divider">'
			}

			s('.wrap').insertAdjacentHTML('beforeend', string);
			if (i >= arr.length - 1) {
				break
			}
			id++
			i++

		} while (arr[i].pos >= wordsIntervalOne && arr[i].pos < wordsIntervalTwo)

	} else {
		arr.forEach((e, id) => {
			let string = `<p>${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''}${e.ru}${e.exp ? ' - ' + e.exp : ''}${e.pos ? ' (' + e.pos + ')' : ''}</p>`

			if ((id + 1) % 20 === 0) {

				string += '<hr class="divider">'
			}

			s('.wrap').insertAdjacentHTML('beforeend', string);
		})
	}



}

getSearch()

all('.nav__link').forEach(e => {

	e.addEventListener('click', (evt) => {
		evt.preventDefault()

		if (ALL[e.dataset.id]) {
			getRender(ALL[e.dataset.id])
		} else {

			switch (e.dataset.id) {
				case 'w-1': {
					getRender(ALL.w, 1, 1000)
				} break
				case 'w-2': {
					getRender(ALL.w, 1000, 2000)
				} break
				case 'w-3': {
					getRender(ALL.w, 2000, 3000)
				} break
				case 'w-4': {
					getRender(ALL.w, 3000, 4000)
				} break
				case 'w-5': {
					getRender(ALL.w, 4000, 5000)
				} break
				case 'w-6': {
					getRender(ALL.w, 5000, 6000)
				} break
				case 'w-7': {
					getRender(ALL.w, 6000, 10000)
				} break
				case 'w-8': {
					getRender(ALL.w, 10000, 22000)
				} break
				case 'w-9': {
					getRender(ALL.w, 21999, 22001)
				} break
			}


		}
	})




})

getNum()



