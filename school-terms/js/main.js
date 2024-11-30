// import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import { S, $ } from './modules/class.js'

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

	$('.content div').forEach((el, id) => {
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