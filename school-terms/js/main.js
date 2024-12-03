// import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import { S, $ } from './modules/seybor-class.js'

import socialStudies from './data/socialStudies.js'

const OBJ = {
	socialStudies
}


$('li[data-subject] a[data-theme]').evt('click', (evt) => {
	evt.preventDefault()

	let nameArr = evt.target.closest('li[data-subject]').dataset.subject
	let nameTheme = evt.target.dataset.theme

	$('.content').text(' ')

	OBJ[nameArr][nameTheme].cards.forEach(el => {

		let subtheme = el.subtheme
		$('.content').insert(subtheme)

	})

	$('.content div').each((el, id) => {
		el.dataset.id = id
	})

	$('.content div').evt('click', (evt) => {

		$('.content').text(' ')

		let subTheme = OBJ[nameArr][nameTheme].cards[evt.target.dataset.id].subtheme
		let content = OBJ[nameArr][nameTheme].cards[evt.target.dataset.id].content

		$('.content').insert(subTheme)
		$('.content').insert('<br>')
		$('.content').insert(content)

	})
})

OBJ.socialStudies.forEach(theme => {
	theme.cards.forEach(card => {

		let str = card.content

		// Удаляем HTML-теги и считаем количество символов, исключая пробелы и специальные символы
		let count = str.replace(/<[^>]*>/g, '') // Удаляем HTML-теги
			.replace(/\s*\(.*?\)\s*/g, '') // Удаляем текст в круглых скобках
			.replace(/[^а-яА-ЯёЁa-zA-Z0-9]/g, '') // Удаляем все не буквенно-цифровые символы
			.length; // Подсчитываем оставшиеся символы
		console.log(card.subtheme.replace(/<div style='text-align:\s*left;\s*font-size:\s*1rem;\s*'>/g, '').replace(/<\/div>/g, '') + ' : ' + count)

	})
})
