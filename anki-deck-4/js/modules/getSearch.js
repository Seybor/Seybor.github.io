import { s, all } from './base.js'

import ALL from '../data/unity_arrays.js'
import lighting from './lighting.js'

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
			let string = `<p class='text' data-pos="${e.pos ? e.pos : '0'}">${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''} ${e.ru}${e.pos ? ' (' + e.pos + ')' : ''}</p>`

			s('.wrap').insertAdjacentHTML('beforeend', string);
		})

		lighting()

	}

	function isFirstLetterEnglish(str) {
		return /^[a-zA-Z]/.test(str);
	}
	function isFirstLetterRussian(str) {
		return /^[а-яА-Я]/.test(str);
	}

}

export default getSearch