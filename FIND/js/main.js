import ADJECTIVES from '../script/A0-A1/adjectives.js'
import ADVERBS from '../script/A0-A1/adverbs.js'
import REGULAR from '../script/A0-A1/regular.js'
import IRREGULAR_VERBS from '../script/A0-A1/irregularAll.js'
import NOUNS from '../script/A0-A1/nouns.js'

import PHRASAL_VERBS from '../script/A0-A1/phrasal-verbs.js'
import PHRASES_NO_VERBS from '../script/A0-A1/phrases-no-verbs.js'
import PHRASES_VERBS from '../script/A0-A1/phrases-verbs.js'



const s = (element) => {
	return document.querySelector(element)
}

const all = (element) => {
	return document.querySelectorAll(element)
}



const ALL_WORDS = ADJECTIVES.concat(ADVERBS.concat(IRREGULAR_VERBS.concat(NOUNS.concat(REGULAR))))
const ALL_PHRASES = PHRASAL_VERBS.concat(PHRASES_NO_VERBS.concat(PHRASES_VERBS))
const ALL_ARRAY = ALL_WORDS.concat(ALL_PHRASES)



console.log(ALL_WORDS.length)
console.log(ALL_PHRASES.length)
console.log(ALL_ARRAY.length)



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
		s('.search__input').placeholder = `finded: ${arr.length}`
	}

	s('.search__input').placeholder = `finded: ${arr.length}`
	console.log(arr.length)
})






