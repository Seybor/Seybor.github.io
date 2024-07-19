import { s, all } from './base.js'

import ALL from '../data/unity_arrays.js'

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

export default getNum