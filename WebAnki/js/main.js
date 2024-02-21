import WORDS_A2_1_5 from './A2/WORDS-A2.js'
import renderWords from './renderwords.js'

// $('body').hide()

const s = (element) => {
	return document.querySelector(element)
}
const all = (element) => {
	return document.querySelectorAll(element)
}


renderWords(WORDS_A2_1_5, s('.test__items'))

const currentDate = (element) => {
	let date = new Date()
	let currentYear = date.getFullYear().toString()
	let currentMonth = (date.getMonth() + 1).toString().padStart(2, 0)
	let currentDay = date.getDate().toString().padStart(2, 0)

	element.textContent = `${currentDay}.${currentMonth}.${currentYear}`
}

currentDate(s('.footer__inner'))

const getIndicators = (element, value = 'top') => {
	let indicator
	let style = document.createElement('style')
	style.innerHTML = `.indicator-top,
	.indicator-bottom {
		position: fixed;
		left: 0;
		z-index: 999999;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
		height: 10px;
		font-size: 10px;
		line-height: 10px;
		transition: all 0.2s linear;
	}
	.indicator-top {
		top: 0;
		background-color: rgba(45, 241, 6, 0.75);
	}
	.indicator-bottom {
		bottom: 0;
		background-color: rgba(241, 6, 6, 0.75);
	}`

	switch (value) {
		case 'top': {
			indicator = `<div class="indicator-top"></div>`
		} break
		case 'bottom': {
			indicator = `<div class="indicator-bottom"></div>`
		} break
		case 'both': {
			indicator = `<div class="indicator-top"></div><div class="indicator-bottom"></div>`
		} break
		default: {
			indicator = `<div class="indicator-top"></div>`
		}
	}
	s('head').insertAdjacentElement('beforeend', style);
	element.insertAdjacentHTML('beforeend', indicator);

	console.log(document.documentElement.clientHeight)

	window.addEventListener('scroll', function () {
		const clientHeight = document.documentElement.clientHeight
		const elementHeight = element.clientHeight
		const scrolling = document.documentElement.scrollTop
		const residueStart = elementHeight - clientHeight

		let scrollBottom = elementHeight - clientHeight - scrolling
		let residueTop = Math.round(((scrolling / residueStart) * 100).toFixed(2))
		let residueBottom = Math.round(((scrollBottom / residueStart) * 100).toFixed(2))

		if (s('.indicator-top')) {
			s('.indicator-top').style.setProperty('width', `${residueTop}%`)
			residueTop == 0 ? s('.indicator-top').textContent = '' : s('.indicator-top').textContent = `${residueTop}%`
		}
		if (s('.indicator-bottom')) {
			s('.indicator-bottom').style.setProperty('width', `${residueBottom}%`)
			residueBottom == 0 ? s('.indicator-bottom').textContent = '' : s('.indicator-bottom').textContent = `${residueBottom}%`
		}

	});
}
getIndicators(s('.wrapper'), 'top')

let currentEl
all('.test-item__answer').forEach((el, id) => {
	el.addEventListener('click', (evt) => {
		el.closest('.test-item__front').style.setProperty('margin-top', `-${window.getComputedStyle(s('.test-item__front')).getPropertyValue('height')}`)
		currentEl = el.closest('.test-item__front')
	})
})

all('.test-item__back').forEach((el, id) => {
	el.addEventListener('click', (evt) => {
		el.closest('.test-item').querySelector('.test-item__front').style.setProperty('margin-top', '0')
	})
})

let counter = 0
let offset = 0
s('.test-buttons__prev').addEventListener('click', (evt) => {

	if (currentEl) {
		console.log(currentEl)
		currentEl.style.setProperty('margin-top', '0')
	}


	if (s(`[data-item-id="${counter - 1}"]`)) {
		offset -= 100
		s(`[data-item-id="${0}"]`).style.setProperty('margin-left', `-${offset}%`)
		counter--
	}

})

s('.test-buttons__next').addEventListener('click', (evt) => {

	if (currentEl) {
		console.log(currentEl)
		currentEl.style.setProperty('margin-top', '0')
	}

	if (s(`[data-item-id="${counter + 1}"]`)) {
		offset += 100
		s(`[data-item-id="${0}"]`).style.setProperty('margin-left', `-${offset}%`)
		counter++
	}

})


