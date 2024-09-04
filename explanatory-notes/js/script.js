import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

import WORDS from '../data/words.js';

WORDS.sort((a, b) => a.pos - b.pos)

function progressBar() {
	window.addEventListener("scroll", function () {
		let scrollHeight = document.documentElement.scrollHeight;
		let scrollTop = document.documentElement.scrollTop;
		let clientHeight = document.documentElement.clientHeight;

		let percentScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

		// console.log("Прокручено: " + percentScrolled.toFixed(2) + "%");

		css(".progress", { 'width': percentScrolled + "%" });
	});
}

function searchElement(arr) {

	evt('.header__search-input', 'dblclick', (e) => {
		s('.header__search-input').value = ''
	})

	evt('.header__search', 'submit', (e) => {
		e.preventDefault()
		let value = s('.header__search-input').value.trim().toLowerCase()

		if (value.length < 3) {
			return
		}

		s('.header__search-input').value = ''

		let resultArr = []

		arr.forEach((el, id) => {
			if (el.en.toLowerCase().includes(value)) {
				resultArr.push(el)
			}
		})


		console.log(resultArr.length)

		if (resultArr.length > 0) {
			renderContent(resultArr)
		}

	})


}

function renderContent(arr) {

	text('.content__inner', '')


	arr.forEach((el, id) => {
		let string = `<div class="content-item">
			<span class="content-item__text" data-type="en">${el.en} - </span>
			<span class="content-item__text" data-type="tr">${el.tr} - </span>
			<span class="content-item__text" data-type="pos">${el.pos}</span>
			<br><br>
			<ul class="content-item__list" data-id=${id}>
			</ul>
			
			</div>`

		insert('.content__inner', string)

		el.ru.forEach(element => {

			let content = `<li class="content-item__list-item">
									<span style='color: #fff;'>${element[0]}</span>
									<ul style='color: #000; font-weight: 700;'>
										<li>${element[1]}</li>
										<li>${element[2]}</li>
									</ul>
								</li>`

			insert(`.content-item__list[data-id="${id}"]`, content)


		})

	})

}

evt('.header__item[data-type="W"]', 'click', (e) => {
	renderContent(WORDS)
})


searchElement(WORDS)
progressBar()
