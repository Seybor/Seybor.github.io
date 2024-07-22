import { s, all } from './base.js'
import { shuffleArr as utilities_shuffleArr } from './utilities-others.js'

import ALL from '../data/unity_arrays.js'


const getTest = (type) => {

	console.log(type)

	const ARR_W = JSON.parse(JSON.stringify(ALL.w))
	const test_arr = []
	let position = 0

	utilities_shuffleArr(ARR_W)

	switch (type) {
		case 'test_3000': {
			position = 3000
		} break
		case 'test_6000': {
			position = 6000
		} break

		case 'test_10000': {
			position = 10000
		} break
		case 'test_15000': {
			position = 15000
		} break
		case 'test_21999': {
			position = 21999
		} break
		case 'test_22000': {
			position = 22000
		} break
		default: {
			alert('Ошибка при рендере теста')
			return
		}
	}

	for (let i = 0; i < ARR_W.length; i++) {

		if (ARR_W[i].pos < position) {
			test_arr.push(ARR_W[i])

			if (test_arr.length >= 25) {
				break
			}

		}
	}

	s('.wrap').textContent = ''
	s('.wrap').insertAdjacentHTML('beforeend', '<div class="test"></div>');

	test_arr.forEach((e, id) => {
		let str = `<div class='test__item'><span>${id + 1})${e.ru}</span><input type="text" data-id="${id}"></div>`

		s('.wrap .test').insertAdjacentHTML('beforeend', str);

	})

	s('.wrap .test').insertAdjacentHTML('beforeend', '<button class="test__btn test__btn--check btn bg-success w-25 m-auto">Проверить</button>');


	let arr_mistake = []
	let arr_right = []
	s('.test__btn').addEventListener('click', (evt) => {

		if (s('.test__btn--check')) {

			all('.test__item input').forEach((e, id) => {

				if (e.value.toLowerCase().trim() === test_arr[id].en) {

					e.classList.add('test__input--right')

					arr_right.push(test_arr[id])

				} else {
					e.classList.add('test__input--mistake')
					e.value = e.value + ' => ' + test_arr[id].en

					arr_mistake.push(test_arr[id])

					s('.test__btn').classList.remove('test__btn--check')
					s('.test__btn').classList.add('test__btn--learn')
					s('.test__btn').textContent = 'Учить'


				}

			})

			if (arr_right.length > 0) {
				console.log(JSON.stringify(arr_right))
			}



		} else if (s('.test__btn--learn')) {
			s('.wrap').textContent = ''

			if (arr_mistake.length > 1) {
				arr_mistake.forEach((e, id) => {
					let string = `<p>${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''}${e.ru}${e.exp ? ' - ' + e.exp : ''}${e.pos ? ' (' + e.pos + ')' : ''}</p>`
					s('.wrap').insertAdjacentHTML('beforeend', string);
				})
			} else {
				s('.test__btn').textContent = 'Всё верно'
				return
			}


		} else {
			alert('Ошибка')
		}


	})

}

export default getTest