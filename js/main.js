import { s, all, css, attr, html, text, insert } from './modules/base.js'

// $('body').hide()

const getRandomNumber = (min = 1, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const CARDS = [
	{
		value: 2,
		position: '-44px -70px'
	},
	{
		value: 4,
		position: '-210px -70px'
	},
	{
		value: 6,
		position: '-370px -70px'
	},
	{
		value: 8,
		position: '-530px -70px'
	},
	{
		value: 10,
		position: '-690px -70px'
	},
	{
		value: 3,
		position: '-44px -290px'
	},
	{
		value: 5,
		position: '-210px -290px'
	},
	{
		value: 7,
		position: '-370px -290px'
	},
	{
		value: 9,
		position: '-530px -290px'
	},
	{
		value: 10,
		position: '-854px -70px'
	},
	{
		value: 10,
		position: '-690px -290px'
	},
	{
		value: 10,
		position: '-854px -290px'
	},
	{
		value: 1,
		position: '-1060px -170px'
	},
]
const BACK = {
	value: 'back',
	position: '-1242px -170px'
}

function insertCard(player) {
	let card = getRandomNumber(0, CARDS.length - 1)
	insert(player, `<div class="card" data-points="${CARDS[card].value}" style="background-image: url('img/21.png'); background-position: ${CARDS[card].position};"></div>`)
}

let pointBot = 0
let pointPlayer = 0

let bankBot = 100
let bankPlayer = 100

let winBot = 0
let winPlayer = 0
let draw = 0
let round = 0

function updatePoints(playerSearch) {
	switch (playerSearch) {
		case '.bot': {
			pointBot = 0
			all(`${playerSearch} .card`).forEach(card => {
				pointBot += +card.getAttribute('data-points')
			})
		} break;
		case '.player': {
			pointPlayer = 0
			all(`${playerSearch} .card`).forEach(card => {
				pointPlayer += +card.getAttribute('data-points')
			})
		} break;
		default: {
			alert('error updatePoints')
		}
	}

	text('.points', `Bot: ${pointBot} | Player: ${pointPlayer}`)
}

function getMore(playerSearch) {
	insertCard(playerSearch)
	updatePoints(playerSearch)
	checkWin(playerSearch)
}


function botPlayer() {
	getMore('.bot')
}

function checkWin(player) {
	switch (player) {
		case '.bot': {

			if (pointBot > 21) {
				bankPlayer += 20
				winPlayer++


				setTimeout(() => {
					startGame()
				}, 1000)

			} else if (pointBot === 21) {
				if (pointBot === pointPlayer) {
					draw++
					bankBot += 10
					bankPlayer += 10
				} else {
					winBot++
					bankBot += 20
				}

				setTimeout(() => {
					startGame()
				}, 1000)


			}

			else if (pointPlayer > pointBot && pointPlayer <= 21) {
				setTimeout(() => {
					botPlayer()
				}, 1000)
			} else if (pointBot === pointPlayer && pointBot < 16) {
				setTimeout(() => {
					botPlayer()
				}, 1000)

			} else if (pointBot === pointPlayer && pointBot >= 16) {
				draw++
				bankBot += 10
				bankPlayer += 10
				setTimeout(() => {
					startGame()
				}, 1000)
			}
			else if (pointBot > pointPlayer) {
				winBot++
				bankBot += 20
				setTimeout(() => {
					startGame()
				}, 1000)
			}

		} break;
		case '.player': {

			if (pointPlayer > 21) {
				winBot++
				bankBot += 20
				css('.buttons__more', { 'pointer-events': 'none' })
				css('.buttons__stop', { 'pointer-events': 'none' })

				setTimeout(() => {
					startGame()
				}, 1000)
			} else if (pointPlayer === 21) {
				css('.buttons__more', { 'pointer-events': 'none' })
				css('.buttons__stop', { 'pointer-events': 'none' })

				setTimeout(() => {
					botPlayer()
				}, 1000)
			}

		} break;
		default: {
			alert('error checkWin')
		}
	}
}

const startGame = () => {
	round++
	bankBot -= 10
	bankPlayer -= 10

	if (bankBot < 0) {
		alert('Победил Игрок')
		return
	}

	if (bankPlayer < 0) {
		alert('Победил Бот')
		return
	}


	html('.game', '')
	insert('.game', `
		<div class="bot"></div>
		<div class='points'>
			Bot: ${pointBot} | Player: ${pointPlayer}
		</div>
		<div class="player"></div>
		<div class='bank'>
			<div class='bank__value'>Банк: <br> Bot: ${bankBot} <br> Player: ${bankPlayer}</div>
		</div>
			<div class='result'>
			<div class='result__value'>Раунд: ${round} <br> Победил Бот: ${winBot}<br> Победил Игрок: ${winPlayer}<br> Ничья: ${draw}</div>
		</div>
		<div class='buttons'>
			<button class='btn buttons__more'>Взять ещё</button>
			<button class='btn buttons__stop'>Хватит</button>
		</div>
		`)

	css('.buttons__more', { 'pointer-events': 'auto' })
	css('.buttons__stop', { 'pointer-events': 'auto' })

	insertCard('.bot')
	insertCard('.bot')
	insertCard('.player')
	insertCard('.player')

	updatePoints('.bot')
	updatePoints('.player')

	s('.buttons__more').addEventListener('click', () => {
		getMore('.player')
	})

	s('.buttons__stop').addEventListener('click', () => {
		checkWin('.bot')
	})


}

s('.game__btn').addEventListener('click', () => {
	s('.game__btn').remove()
	startGame();
})