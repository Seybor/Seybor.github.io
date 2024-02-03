import ADJECTIVES from "./A0-A1/adjectives.js"
import ADVERBS from "./A0-A1/adverbs.js"
import IRREGULAR from "./A0-A1/irregular.js"
import NOUNS from "./A0-A1/nouns.js"
import REGULAR from "./A0-A1/regular.js"
import PHRASES_NO_VERBS from "./A0-A1/phrases-no-verbs.js"
import PHRASES_VERBS from "./A0-A1/phrases-verbs.js"

import MURPHY_18_38 from "./Additional/murphy.js"

const ALL_ARR = ADJECTIVES.concat(ADVERBS.concat(IRREGULAR.concat(NOUNS.concat(REGULAR))))

console.log(ALL_ARR)

const seyborWrapper = document.querySelector('.seybor-wrapper')
const template = document.querySelector('#template')
const search = document.querySelector('#search')
const searchInput = search.querySelector('input')
const searchBtn = search.querySelector('button')

const renderAll = (arr) => {
	seyborWrapper.textContent = ''
	for (let i = 0; i < arr.length; i++) {
		let createContent = document.createElement('div')
		createContent.classList.add('content')
		for (let j = 0; j < arr[i].length; j++) {
			let createEl = document.createElement('div')
			createEl.classList.add('item')
			createEl.innerHTML = `
					<hr>
					<span class='item__en'>${arr[i][j]['en']}</span>
					<hr>
					<span class='item__tr'>${arr[i][j]['tr']}</span>
					<hr>
					<span class='item__ru'>${arr[i][j]['ru']}</span>
					<hr>
					<span class='item__ru-example'>${arr[i][j]['en_example']}</span>
					<hr>
					<span class='item__en-example'>${arr[i][j]['ru_example']}</span>
					<hr>
		`

			createContent.append(createEl)
		}
		seyborWrapper.append(createContent)
	}

	arr === PHRASES_NO_VERBS || PHRASES_VERBS ? (
		document.querySelectorAll('.item__tr').forEach((el) => {
			el.style.display = 'none';
		})
	) : console.log('false');
}

const renderMurphy = (arr) => {
	seyborWrapper.textContent = ''
	for (let i = 0; i < arr.length; i++) {
		let createContent = document.createElement('div')
		createContent.classList.add('content')
		for (let j = 0; j < arr[i].length; j++) {
			let createEl = document.createElement('div')
			createEl.classList.add('item')
			createEl.innerHTML = `
					<hr>
					<span class='item__en'>${arr[i][j]['en']}</span>
					<hr>
					<span class='item__ru'>${arr[i][j]['ru']}</span>
					<hr>
		`
			createContent.append(createEl)
		}
		seyborWrapper.append(createContent)
	}

}

const renderFind = (arr) => {
	seyborWrapper.textContent = ''
	let createContent = document.createElement('div')
	createContent.classList.add('content')
	for (let i = 0; i < arr.length; i++) {
		let createEl = document.createElement('div')
		createEl.classList.add('item')
		createEl.innerHTML = `
					<hr>
					<span class='item__en'>${arr[i]['en']}</span>
					<hr>
					<span class='item__tr'>${arr[i]['tr']}</span>
					<hr>
					<span class='item__ru'>${arr[i]['ru']}</span>
					<hr>
					<span class='item__ru-example'>${arr[i]['en_example']}</span>
					<hr>
					<span class='item__en-example'>${arr[i]['ru_example']}</span>
					<hr>
		`
		createContent.append(createEl)
	}
	seyborWrapper.append(createContent)

}

const header = document.querySelector('.header')


header.addEventListener('click', (evt) => {
	if (!evt.target.dataset.name) {
		return
	}
	evt.preventDefault()

	let arr = []

	switch (evt.target.dataset.name) {
		case 'ADVERBS': {
			arr = ADVERBS
		} break
		case 'ADJECTIVES': {
			arr = ADJECTIVES
		} break
		case 'NOUNS': {
			arr = NOUNS
		} break
		case 'REGULAR': {
			arr = REGULAR
		} break
		case 'IRREGULAR': {
			arr = IRREGULAR
		} break
		case 'MURPHY': {
			arr = MURPHY_18_38
		} break
		case 'PHRASES-NO-VERBS': {
			arr = PHRASES_NO_VERBS
		} break
		case 'PHRASES-VERBS': {
			arr = PHRASES_VERBS
		} break

		default: {
			arr = ADVERBS
		}
	}

	evt.target.dataset.name === "MURPHY" ? renderMurphy(arr) : renderAll(arr)



})


let findArr = []
search.addEventListener('submit', (evt) => {
	evt.preventDefault()
	let value = (searchInput.value).trim()

	if (value.length < 2) {
		return
	}

	findArr = []

	ALL_ARR.forEach((arr_el) => {

		arr_el.forEach((el) => {
			if ((el['en'].includes(value)) || (el['ru'].includes(value))) {
				findArr.push(el)
			}
		})

		searchInput.value = `Найдено: ${findArr.length}`
		renderFind(findArr)

	})
})

searchInput.addEventListener('dblclick', (evt) => {
	console.log(evt.currentTarget.value)

	searchInput.value = ''
})


