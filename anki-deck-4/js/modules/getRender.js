import { s, all } from './base.js'

import ALL from '../data/unity_arrays.js'

const getRender = () => {

	all('.nav__link').forEach(e => {
		const renderStart = (arr, wordsIntervalOne = 0, wordsIntervalTwo = 0) => {
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

					if ((id) % 20 === 0) {

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
		e.addEventListener('click', (evt) => {
			evt.preventDefault()

			if (ALL[e.dataset.id]) {
				renderStart(ALL[e.dataset.id])
			} else {

				switch (e.dataset.id) {
					case 'w-1': {
						renderStart(ALL.w, 1, 1000)
					} break
					case 'w-2': {
						renderStart(ALL.w, 1000, 2000)
					} break
					case 'w-3': {
						renderStart(ALL.w, 2000, 3000)
					} break
					case 'w-4': {
						renderStart(ALL.w, 3000, 4000)
					} break
					case 'w-5': {
						renderStart(ALL.w, 4000, 5000)
					} break
					case 'w-6': {
						renderStart(ALL.w, 5000, 6000)
					} break
					case 'w-7': {
						renderStart(ALL.w, 6000, 10000)
					} break
					case 'w-8': {
						renderStart(ALL.w, 10000, 22000)
					} break
					case 'w-9': {
						renderStart(ALL.w, 21999, 22001)
					} break
				}


			}
		})

	})

}

export default getRender