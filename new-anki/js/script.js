import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import PHV_1 from '../data/phv-1.js'
import PHV_2 from '../data/phv-2.js'
import W_1 from '../data/w-1.js'
import W_2 from '../data/w-2.js'
import W_3 from '../data/w-3.js'


function sortArrays() {
	PHV_1.sort((a, b) => a.en.localeCompare(b.en));
	PHV_2.sort((a, b) => a.en.localeCompare(b.en));
	W_1.sort((a, b) => +a.pos > +b.pos ? 1 : -1);
	W_2.sort((a, b) => +a.pos > +b.pos ? 1 : -1);
	W_3.sort((a, b) => +a.pos > +b.pos ? 1 : -1);
}

function renderContent(arr) {
	text('.content__inner', '')

	s('.buttons-wrapper').classList.add('buttons-wrapper--active')

	arr.forEach((e, id) => {
		let string = `<div class="content-item">
							<div class="content-item__top">
								<span class="content-item__text" data-type="en">${id + 1}) ${e.en}</span>
								-
								${e.tr ? `<span class="content-item__text" data-type="tr">${e.tr}</span> - ` : ''}
								<span class="content-item__text" data-type="ru">${e.ru}</span>
								${e.pos ? `- <span class="content-item__text" data-type="pos">${e.pos}</span>` : ''}
							</div>
	
							<div class="content-item__bottom">
								<span class="content-item__text" data-type="en_example">&nbsp;&nbsp;&nbsp;&nbsp; - ${e.en_example}</span>
								<br>
								<span class="content-item__text" data-type="ru_example">&nbsp;&nbsp;&nbsp;&nbsp; - ${e.ru_example}</span>
							</div>
						</div>`

		insert('.content__inner', string)
	})

}

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

function searchElement() {

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

		for (let key in bigArr) {

			bigArr[key].forEach((el, id) => {
				if (el.en.toLowerCase().includes(value) || el.ru.toLowerCase().includes(value)) {

					resultArr.push(el)
				}
			})
		}

		console.log(resultArr.length)

		if (resultArr.length > 0) {
			renderContent(resultArr)
		}




	})


}

function onListClick(e) {
	let type = e.target.getAttribute('data-type')

	renderContent(bigArr[type])
}

let bigArr = {
	'PHV_1': PHV_1,
	'PHV_2': PHV_2,
	'W_1': W_1,
	'W_2': W_2,
	'W_3': W_3
}

all('.header__item').forEach(el => {
	el.addEventListener('click', onListClick)
})

sortArrays()
progressBar()
searchElement()