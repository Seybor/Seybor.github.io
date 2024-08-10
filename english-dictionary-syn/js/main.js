import { s, all } from './modules/base.js'
import * as UI from './modules/ui.js'
import * as DOM from './modules/utilities-dom.js'
import * as UTIL from './modules/utilities-others.js'

import noun from './data/syn-noun.js'
import verb from './data/syn-verb.js'
import adjective from './data/syn-adjective.js'
import adverb from './data/syb-adverb.js'

const ALL = {
	noun,
	verb,
	adjective,
	adverb
}

const log = {
	style: 'color: #ffffff; padding: 5px; font-weight: bold; font-size: 12px;',
	info: (text) => {
		console.log(`%c${`info`}`, `background: blue; ${log.style}`, `${text}`);
	},
	warn: (text) => {
		console.log(`%c${`warn`}`, `background: orange; ${log.style}`, `${text}`);
	},
	success: (text) => {
		console.log(`%c${`success`}`, `background: green; ${log.style}`, `${text}`);
	},
	error: (text) => {
		console.log(`%c${`error`}`, `background: red; ${log.style}`, `${text}`);
	},
}

log.info(noun.length + verb.length + adjective.length + adverb.length)



// $('body').hide()

// UI.changeTheme()
// UI.burger()
// UI.accordionStart()
// UI.tabStart()

// DOM.eraseInput()
// DOM.removeAddClass()
// DOM.wrapper()

// UTIL.generateRandomNumbers()
// UTIL.getRandomNumber()
// UTIL.shuffleArr()

all('nav a').forEach(e => {
	e.addEventListener('click', (evt) => {
		evt.preventDefault()
		let arr = []
		s('.content .container').textContent = ''

		ALL[evt.target.dataset.type].forEach((el, id) => {
			let content = `
			<div class="wrap synonyms">
			<hr class="divider">
			<span class='synonyms__number'>${id + 1}</span>
			<span class='synonyms__ru'>${el.ru}</span>
			<span class='synonyms__en'>${el.en.join(', ')}</span>
			<hr class="divider">
			<span class='synonyms__desc'>${el.desc.join('<br>')}</span>
			<hr class="divider">
			<span class='synonyms__examples'>${el.ex.join('<br>')}</span>
			<hr class="divider">
		</div>`
			s('.content .container').insertAdjacentHTML('beforeend', content);
		})

	})
})


