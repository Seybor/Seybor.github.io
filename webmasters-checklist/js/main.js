'use strict';

// $('body').hide()

// localStorage.setItem('checked', 0)


const s = (element) => {
	return document.querySelector(element)
}
const all = (element) => {
	return document.querySelectorAll(element)
}

console.log(localStorage)
let indexEl = []
for (let i = 0; i < localStorage.length; i++) {
	indexEl.push(localStorage.key(i).slice(8))
}

console.log(indexEl)




all('.checklist-item__check').forEach((el, id) => {
	if (indexEl.find(index => index === id.toString())) {
		console.log(id)

		el.closest('.checklist__item.checklist-item').querySelector('.checklist-item__note').textContent = localStorage.getItem(`checked-${id}`)
		el.classList.add('checklist-item__check--checked')
	}
})

const currentTime = () => {
	let date = new Date()
	let currentYear = date.getFullYear().toString()
	let currentMonth = (date.getMonth() + 1).toString().padStart(2, 0)
	let currentDay = date.getDate().toString().padStart(2, 0)
	let currentHours = date.getHours().toString().padStart(2, 0)
	let currentMinutes = date.getMinutes().toString().padStart(2, 0)
	let currentSeconds = date.getSeconds().toString().padStart(2, 0)

	return `${currentDay}.${currentMonth}.${currentYear} ${currentHours}:${currentMinutes}:${currentSeconds}`
}

all('.checklist-item__check').forEach((el, id) => {
	el.addEventListener('click', (evt) => {

		if (!el.classList.contains('checklist-item__check--checked')) {

			let current = currentTime()
			el.classList.add('checklist-item__check--checked')

			el.closest('.checklist__item.checklist-item').querySelector('.checklist-item__note').textContent = current

			localStorage.setItem(`checked-${id}`, current)

		} else {

			let affirm = confirm('Вы уверены, что хотите отменить выбор?')

			if (affirm) {
				el.classList.remove('checklist-item__check--checked')
				el.closest('.checklist__item.checklist-item').querySelector('.checklist-item__note').textContent = ''

				localStorage.removeItem(`checked-${id}`)
			}

		}



	})
})