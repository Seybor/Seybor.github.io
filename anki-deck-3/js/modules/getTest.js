import { s, all } from './base.js'
import { shuffleArr as utilities_shuffleArr } from './utilities-others.js'

import ALL from '../data/all.js'


const getTest = () => {
	const ARR_W = JSON.parse(JSON.stringify(ALL.w))
	const test_arr = []

	utilities_shuffleArr(ARR_W)

	for (let i = 0; i < ARR_W.length; i++) {
		if (ARR_W[i].pos < 5000) {
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
	s('.test__btn').addEventListener('click', (evt) => {

		if (s('.test__btn--check')) {

			all('.test__item input').forEach((e, id) => {

				if (e.value.toLowerCase().trim() === test_arr[id].en) {
					e.classList.add('test__input--right')
				} else {
					e.classList.add('test__input--mistake')
					e.value = e.value + ' => ' + test_arr[id].en

					arr_mistake.push(test_arr[id])

					s('.test__btn').classList.remove('test__btn--check')
					s('.test__btn').classList.add('test__btn--learn')
					s('.test__btn').textContent = 'Учить'
				}

			})

		} else if (s('.test__btn--learn')) {
			s('.wrap').textContent = ''

			if (arr_mistake.length > 1) {
				arr_mistake.forEach((e, id) => {
					let string = `<p>${id + 1}) ${e.en} - ${e.tr ? e.tr + ' - ' : ''}${e.ru}${e.exp ? ' - ' + e.exp : ''}${e.pos ? ' (' + e.pos + ')' : ''}</p>`
					s('.wrap').insertAdjacentHTML('beforeend', string);
				})
			}


		} else {
			alert('Ошибка')
		}


	})

}

export default getTest