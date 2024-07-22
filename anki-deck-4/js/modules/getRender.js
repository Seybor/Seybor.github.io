import { s, all } from './base.js'

import ALL from '../data/unity_arrays.js'
import lighting from './lighting.js'

const getRender = () => {

	all('.nav__link[data-id]').forEach(e => {
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

					let string = `<p class='text' data-pos="${arr[i].pos ? arr[i].pos : '0'}">${id}) ${arr[i].en} - ${arr[i].tr ? arr[i].tr + ' - ' : ''}${arr[i].ru}${arr[i].exp ? ' - ' + arr[i].exp : ''}${arr[i].pos ? ' (' + arr[i].pos + ')' : ''}</p>`

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
					let string = `<p  class='text' data-pos="${e.pos ? e.pos : '0'}">${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''}${e.ru}${e.exp ? ' - ' + e.exp : ''}${e.pos ? ' (' + e.pos + ')' : ''}</p>`

					console.log(string)

					if ((id + 1) % 20 === 0) {

						string += '<hr class="divider">'
					}

					s('.wrap').insertAdjacentHTML('beforeend', string);
				})
			}

			lighting()

		}
		e.addEventListener('click', (evt) => {
			evt.preventDefault()

			if (ALL[e.dataset.id]) {

				renderStart(ALL[e.dataset.id])
			} else {

				switch (e.dataset.id) {
					case 'w-1': {
						renderStart(ALL.w, 1, 3000)
					} break
					case 'w-2': {
						renderStart(ALL.w, 3001, 6000)
					} break
					case 'w-3': {
						renderStart(ALL.w, 6000, 10000)
					} break
					case 'w-4': {
						renderStart(ALL.w, 10001, 15000)
					} break
					case 'w-5': {
						renderStart(ALL.w, 15001, 22000)
					} break
					case 'w-6': {
						renderStart(ALL.w, 21999, 22001)
					} break
					default: {
						alert('Ошибка при рендере')
					}
				}


			}
		})

	})



}

export default getRender