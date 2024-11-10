import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

const getRandomNumber = (min = 1, max = 20) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let y = 1; y <= 20; y++) {
	for (let x = 1; x <= 10; x++) {
		let content = `<div data-coord="${x},${y}"></div>`

		insert('.content-display__field', content)
	}
}

for (let i = 1; i <= 16; i++) {
	let content = `<div data-id="${i}"></div>`

	insert('.content-display__info-life', content)
}

function renderPrevievGame() {

	const games = [
		{
			name: 'A',
			coord: [
				[5, 3],
				[6, 3],
				[4, 4],
				[4, 5],
				[4, 6],
				[4, 7],
				[7, 4],
				[7, 5],
				[7, 6],
				[7, 7],
				[5, 5],
				[6, 5]
			]
		}
	]

	games[0].coord.forEach(item => {
		let coord = item.join(',')
		let el = s('.content-display__field').querySelector(`[data-coord="${coord}"]`)
		el.classList.add('active')
	})
}

renderPrevievGame()