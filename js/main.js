// import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import { S, $ } from './modules/seybor-class.js'

import { socialStudies, informatics } from './data/all-arr.js'

const OBJ = {
	socialStudies,
	informatics
}

$('li[data-subject] a[data-theme]').evt('click', (evt) => {
	evt.preventDefault()

	let nameArr = evt.target.closest('li[data-subject]').dataset.subject
	let nameTheme = evt.target.dataset.theme

	$('.content').text(' ')

	let fragment = document.createDocumentFragment()
	OBJ[nameArr][nameTheme].cards.forEach((el, id) => {
		let newEl = document.createElement('div')
		newEl.innerHTML = el.subtheme
		newEl.classList.add('subtheme')
		newEl.dataset.id = id
		fragment.append(newEl)
	})
	document.querySelector('.content').append(fragment)

	$('.subtheme').evt('click', (evt) => {

		$('.content').text(' ')

		let subTheme = OBJ[nameArr][nameTheme].cards[evt.target.dataset.id].subtheme
		let content = OBJ[nameArr][nameTheme].cards[evt.target.dataset.id].content

		$('.content').insert(subTheme)
		$('.content').insert('<br><br>')
		$('.content').insert(content)

	})
})

let charCount = 0
OBJ.socialStudies.forEach(subject => {

	subject.cards.forEach(card => {

		let str = card.content

		// Удаляем HTML-теги и считаем количество символов, исключая пробелы и специальные символы
		let count = str.replace(/<[^>]*>/g, '') // Удаляем HTML-теги
			.replace(/\s*\(.*?\)\s*/g, '') // Удаляем текст в круглых скобках
			.replace(/[^а-яА-ЯёЁa-zA-Z0-9]/g, '') // Удаляем все не буквенно-цифровые символы
			.length; // Подсчитываем оставшиеся символы
		console.log(card.subtheme.replace(/<div class='subtheme'>/g, '').replace(/<\/div>/g, '') + ' : ' + count)
		charCount += count
	})


})
console.log('Всего символов: ' + charCount)

