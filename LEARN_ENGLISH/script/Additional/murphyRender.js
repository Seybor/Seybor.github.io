'use strict';

import MURPHY_18_38 from "./murphy.js"

const seyborWrapper = document.querySelector('.seybor-wrapper')

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
					<figure class="container">
						<div class="film">

							<div class="face front">
							${arr[i][j][i % 2 === 0 ? 'en' : 'ru']}
							</div>
							<div class="face back">
							${arr[i][j][i % 2 === 0 ? 'ru' : 'en']}
							</div>

						</div>
					</figure>
					<hr>
		`
			createContent.append(createEl)
		}
		seyborWrapper.append(createContent)
	}

}
renderMurphy(MURPHY_18_38)
