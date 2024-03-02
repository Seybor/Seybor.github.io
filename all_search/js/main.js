import IRREGULAR_VERBS from "./DATA/New-A0-A1/irregularAll.js"
import WORDS from "./DATA/New-A0-A1/words.js"
import PHRASAL_VERBS from "./DATA/New-A0-A1/phrasal-verbs.js"
import PHRASES_NO_VERBS from "./DATA/New-A0-A1/phrases-no-verbs.js"
import PHRASES_VERBS_ALL from "./DATA/New-A0-A1/phrases-with-verbs.js"

import PNV_A2 from "./DATA/A2/PNV-A2.js"
import PWV_A2 from "./DATA/A2/PWV-A2.js"
import REGULAR_A2 from "./DATA/A2/REGULAR-A2.js"
import WORDS_A2 from "./DATA/A2/WORDS-A2.js"

import ANIMALS from "./DATA/Additional/words-theme/animals.js"
import BODY from "./DATA/Additional/words-theme/body.js"
import NGSL_S from "./DATA/Additional/ngsl.js"

import clockStart from "./modules/clock.js"

// - basic
const s = (element) => {
	return document.querySelector(element)
}

const all = (element) => {
	return document.querySelectorAll(element)
}
// - basic


// ! clock
if (document.querySelector('.clock-wrapper')) {
	clockStart()
}

// ! concat all arr
const ARR_A1 = IRREGULAR_VERBS.concat(WORDS.concat(PHRASAL_VERBS.concat(PHRASES_NO_VERBS.concat(PHRASES_VERBS_ALL))))
const ARR_A2 = PNV_A2.concat(PWV_A2.concat(REGULAR_A2.concat(WORDS_A2)))
const ARR_ADD = ANIMALS.concat(BODY)

for (let i = 0; i < ARR_A1.length; i++) {
	ARR_A1[i].from = 'A0-A1'
}
for (let i = 0; i < ARR_A2.length; i++) {
	ARR_A2[i].from = 'A2'
}
for (let i = 0; i < ARR_ADD.length; i++) {
	ARR_ADD[i].from = 'add'
}
for (let i = 0; i < NGSL_S.length; i++) {
	NGSL_S[i].from = 'ngsl'
}

const ALL_ARRAY = ARR_A1.concat(ARR_A2.concat(ARR_ADD.concat(NGSL_S)))



// ! search
s('.search__input').placeholder = `elements: ${ALL_ARRAY.length}`
s('.search').addEventListener('submit', (evt) => {
	evt.preventDefault()
	const value = s('.search__input').value.trim().toLowerCase()
	s('.search__input').value = ''

	if (value.length < 2) {
		return
	}

	const arr = []
	s('.elements__items').textContent = ''

	ALL_ARRAY.forEach((el) => {
		if (el.ru.includes(value) || el.en.includes(value)) {
			arr.push(el)
		}
	})

	if (arr.length > 0) {
		arr.forEach((el) => {
			const htmlContent = `<div class="elements__item">

			<div class="elements__item-content">
				<div class="elements__item-from">${el.from}</div>
				<p data-value="en" style="font-weight: 700;">${el.en}</p>
				<p data-value="tr" style="font-weight: 700;">${el.tr ? el.tr : ''}</p>
				<p data-value="ru" style="font-weight: 700;">${el.ru}</p>
				<p data-value="ru_example">${el.ru_example ? el.ru_example : ''}</p>
				<p data-value="en_example">${el.en_example ? el.en_example : ''}</p>
			</div>
		
		</div>`

			s('.elements__items').insertAdjacentHTML('beforeend', htmlContent)
		})
	} else {
		s('.elements__items').insertAdjacentHTML('beforeend', 'Ничего не найдено')
	}

	s('.search__input').placeholder = `finded: ${arr.length}`
})


// ! footer - time
const currentTime = () => {
	let date = new Date()
	let currentYear = date.getFullYear().toString()
	let currentMonth = (date.getMonth() + 1).toString().padStart(2, 0)
	let currentDay = date.getDate().toString().padStart(2, 0)

	s('.footer__time').textContent = `${currentDay}.${currentMonth}.${currentYear}`
}
currentTime()

// ! для шрифта
s('.change-font').addEventListener('click', (evt) => {

	let fontSize = +((window.getComputedStyle(s('body')).getPropertyValue('font-size')).slice(0, -2))
	console.log(fontSize)
	const changeFontSize = (value) => {
		if (fontSize <= 10 && value < 0) {
			return
		}
		if (fontSize >= 24 && value > 0) {
			return
		}
		s('body').style.setProperty('font-size', `${fontSize + value}px`)
	}

	if (evt.target.dataset.btn) {
		window.getComputedStyle(s('body')).getPropertyValue('font-size')
		switch (evt.target.dataset.btn) {
			case 'plus': {
				changeFontSize(2)
			} break
			case 'minus': {
				changeFontSize(-2)
			}
		}

		window.getComputedStyle(s('body')).getPropertyValue('font-size')

	}
})




