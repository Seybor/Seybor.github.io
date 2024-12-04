import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'


import ARR from "./data/obj.js"

let bigCounter = 0
ARR.forEach((el, id) => {
	insert('.left-panel', `<div class="left-panel__item" data-id="${id}"><p data-type="${el.title}">${el.title}</p><span></span></div>`)

	let counter = 0
	el.content.forEach((current, id) => {
		counter += current.value.length
	})

	bigCounter += counter

	text(`div[data-id="${id}"] span`, counter)
})

text(`.hints__title span`, bigCounter)


function addClassLeftPanel() {
	if (window.innerWidth <= 576) {
		s('.left-panel').classList.add('left-panel--active')
	} else {
		s('.left-panel').classList.remove('left-panel--active')
	}
}
addClassLeftPanel()

all('.left-panel__item').forEach((el, id) => {
	el.addEventListener('click', (e) => {

		all('.left-panel__item p').forEach(link => {
			link.classList.remove('active')
		})
		el.querySelector('p').classList.add('active')

		renderElements(ARR[id].content)

	})
})

function renderElements(content) {

	console.log(content)

	text('.hints__content', '')

	content.forEach(el => {
		insert('.hints__content', `<div class="hints__item-title">${el.title}</div>`)

		el.value.forEach(items => {
			insert('.hints__content', `<div class="hints__item-content">${items[0]} - ${items[1]}</div>`)
		})

	})

}

function search(value) {

	const maxPositions = 10


	let arrFinded = []

	ARR.forEach(el => {
		el.content.forEach(els => {

			els.value.forEach(text => {

				if (text[0].toLowerCase().includes(value)) {
					arrFinded.push(text)
				}
			})

		})
	})


	if (arrFinded.length > 0) {
		text('.hints__content', '')

		if (arrFinded.length < maxPositions) {
			arrFinded.forEach(el => {
				insert('.hints__content', `<div class="hints__item-content">${el[0]} - ${el[1]}</div>`)
			})
		} else {
			console.log(arrFinded.length)
			for (let i = 0; i < maxPositions; i++) {
				insert('.hints__content', `<div class="hints__item-content">${arrFinded[i][0]} - ${arrFinded[i][1]}</div>`)
			}
		}



	}

}

evt('.left-panel__search', 'submit', (e) => {
	e.preventDefault()

	let value = s('.left-panel__search input').value.trim().toLowerCase()
	s('.left-panel__search input').value = ''

	if (value.length < 3) {
		s('.left-panel__search input').placeholder = 'Не меньше 3 en символов'
		return
	} else {

		if (s('.left-panel__item .active')) {
			s('.left-panel__item .active').classList.remove('active')
		}

		s('.left-panel__search input').placeholder = 'Search...'
		search(value)
	}


})


window.addEventListener('resize', (e) => {
	addClassLeftPanel()
})

if (s('.left-panel--active')) {


	s('.left-panel--active').addEventListener('pointerdown', (e) => {

		console.log(1)


	})


}


document.addEventListener('click', (e) => {
	console.log(e.target)
})