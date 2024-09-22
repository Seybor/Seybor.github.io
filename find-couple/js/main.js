import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import { shuffleArr } from './modules/utils-others.js'

// $('body').hide()

let values = []

evt('button[data-btn="start"]', 'click', () => {

	s('button[data-btn="start"]').remove()

	startGame()

})

function startGame() {

	css('.cards', {
		'display': 'flex',
	})

	for (let i = 0; i < 5; i++) {

		let string = `<div class="card" data-type="${i + 1}" data-checked="false">
				<div class="card-inner">
					<div class="card-front">
					</div>
					<div class="card-back" style="background-image: url(img/${i + 1}.jpg);">
					
					</div>
				</div>
			</div>`

		for (let j = 0; j < 2; j++) {
			insert('.cards', string)
		}



	}

	const shuffledCards = shuffleArr([...all('.card')]);

	html('.cards', '');
	shuffledCards.forEach(card => {

		s('.cards').append(card);
	});


	all('.card').forEach(el => {
		el.addEventListener('click', () => {
			el.querySelector('.card-inner').classList.add('card-inner--active')
			el.style.setProperty('pointer-events', 'none')
			el.dataset.checked = 'true'

			values.push(el.dataset.type)

			console.log(values)

			if (values.length >= 2) {

				s('.cards').style.setProperty('pointer-events', 'none')

				if (values[0] === values[1]) {

					console.log('равны')

					setTimeout(() => {
						all('.card[data-checked="true"]').forEach(element => {
							element.querySelector('.card-back').style.setProperty('filter', 'saturate(100%)')
							element.dataset.checked = 'false'
						})
						s('.cards').style.setProperty('pointer-events', 'auto')
					}, 1500)

				} else {
					console.log('неравны')
					setTimeout(() => {
						all('.card[data-checked="true"]').forEach(element => {
							element.querySelector('.card-inner').classList.remove('card-inner--active')
							element.style.setProperty('pointer-events', 'auto')
							element.dataset.checked = 'false'
						})
						s('.cards').style.setProperty('pointer-events', 'auto')
					}, 1500)
				}

				values = []
			}

		})
	})
}


