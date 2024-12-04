import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'
import { shuffleArr } from './modules/utils-others.js'

let values = []

evt('button[data-btn="start"]', 'click', () => {

	let quantity = s('input[name="quantity"]:checked').value
	s('.btn-wrap').remove()

	startGame(quantity)

})

function startGame(quantity) {

	css('.cards', { 'display': 'flex' })

	let attempts = 0
	let points = quantity
	console.log(points)

	function renderCards(quantity) {
		for (let i = 0; i < quantity; i++) {

			let string = `<div class="card" data-type="${i + 1}" data-checked="false">
					<div class="card-inner">
						<div class="card-front">
						</div>
						<div class="card-back" style="background-image: url(img/${i + 1}.jpg);">
						
						</div>
					</div>
				</div>`

			insert('.cards', string)
			insert('.cards', string)

		}

		const shuffledCards = shuffleArr([...all('.card')]);

		html('.cards', '');
		shuffledCards.forEach(card => {

			s('.cards').append(card);
		});
	}

	renderCards(quantity)


	all('.card').forEach(el => {
		el.addEventListener('click', () => {
			el.querySelector('.card-inner').classList.add('card-inner--active')
			el.style.setProperty('pointer-events', 'none')
			el.dataset.checked = 'true'

			values.push(el.dataset.type)

			if (values.length >= 2) {

				s('.cards').style.setProperty('pointer-events', 'none')

				if (values[0] === values[1]) {

					setTimeout(() => {
						all('.card[data-checked="true"]').forEach(element => {
							element.querySelector('.card-back').style.setProperty('filter', 'saturate(100%)')
							element.dataset.checked = 'false'
							element.style.setProperty('pointer-events', 'none')
						})

						s('.cards').style.setProperty('pointer-events', 'auto')

						points--
						console.log(points)

						if (points <= 0) {
							alert('Congratulations! You won! Your attempts: ' + attempts)
						}

					}, 1500)

				} else {


					setTimeout(() => {
						all('.card[data-checked="true"]').forEach(element => {
							element.querySelector('.card-inner').classList.remove('card-inner--active')
							element.style.cssText = ''
							element.dataset.checked = 'false'
						})
						s('.cards').style.setProperty('pointer-events', 'auto')
					}, 1500)
				}

				values = []
				attempts++
			}

		})
	})
}


