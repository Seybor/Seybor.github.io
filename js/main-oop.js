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

const model = {
	bankBot: 100,
	bankPlayer: 100,
	pointBot: 0,
	pointPlayer: 0,
	winBot: 0,
	winPlayer: 0,
	draw: 0,
	round: 0,
	insertCard: function (player) {
		let card = getRandomNumber(0, CARDS.length - 1)
		insert(player, `<div class="card" data-points="${CARDS[card].value}" style="background-image: url('img/21.png'); background-position: ${CARDS[card].position};"></div>`)
	},
	updatePoints: function (playerSearch) {
		switch (playerSearch) {
			case '.bot': {
				this.pointBot = 0
				all(`${playerSearch} .card`).forEach(card => {
					this.pointBot += +card.getAttribute('data-points')
				})
			} break;
			case '.player': {
				this.pointPlayer = 0
				all(`${playerSearch} .card`).forEach(card => {
					this.pointPlayer += +card.getAttribute('data-points')
				})
			} break;
			default: {
				alert('error updatePoints')
			}
		}

		text('.points', `Bot: ${this.pointBot} | Player: ${this.pointPlayer}`)
	},
	getMore: function (playerSearch) {
		this.insertCard(playerSearch)
		this.updatePoints(playerSearch)
		this.checkWin(playerSearch)
	},
	botPlayer: function () {
		this.getMore('.bot')
	},
	checkWin: function (player) {
		switch (player) {
			case '.bot': {

				if (this.pointBot > 21) {
					this.bankPlayer += 20
					this.winPlayer++


					setTimeout(() => {
						startGame()
					}, 1000)

				} else if (this.pointBot === 21) {
					if (this.pointBot === this.pointPlayer) {
						this.draw++
						this.bankBot += 10
						this.bankPlayer += 10
					} else {
						this.winBot++
						this.bankBot += 20
					}

					setTimeout(() => {
						startGame()
					}, 1000)


				}

				else if (this.pointPlayer > this.pointBot && this.pointPlayer <= 21) {
					setTimeout(() => {
						this.botPlayer()
					}, 1000)
				} else if (this.pointBot === this.pointPlayer && this.pointBot < 16) {
					setTimeout(() => {
						this.botPlayer()
					}, 1000)

				} else if (this.pointBot === this.pointPlayer && this.pointBot >= 16) {
					this.draw++
					this.bankBot += 10
					this.bankPlayer += 10
					setTimeout(() => {
						startGame()
					}, 1000)
				}
				else if (this.pointBot > this.pointPlayer) {
					this.winBot++
					this.bankBot += 20
					setTimeout(() => {
						startGame()
					}, 1000)
				}

			} break;
			case '.player': {

				if (this.pointPlayer > 21) {
					this.winBot++
					this.bankBot += 20
					css('.buttons__more', { 'pointer-events': 'none' })
					css('.buttons__stop', { 'pointer-events': 'none' })

					setTimeout(() => {
						startGame()
					}, 1000)
				} else if (this.pointPlayer === 21) {
					css('.buttons__more', { 'pointer-events': 'none' })
					css('.buttons__stop', { 'pointer-events': 'none' })

					setTimeout(() => {
						this.botPlayer()
					}, 1000)
				}

			} break;
			default: {
				alert('error checkWin')
			}
		}
	}
}

const startGame = () => {
	model.round++
	model.bankBot -= 10
	model.bankPlayer -= 10

	if (model.bankBot < 0) {
		alert('Победил Игрок')
		return
	}

	if (model.bankPlayer < 0) {
		alert('Победил Бот')
		return
	}


	html('.game', '')
	insert('.game', `
		<div class="bot"></div>
		<div class='points'>
			Bot: ${model.pointBot} | Player: ${model.pointPlayer}
		</div>
		<div class="player"></div>
		<div class='bank'>
			<div class='bank__value'>Банк: <br> Bot: ${model.bankBot} <br> Player: ${model.bankPlayer}</div>
		</div>
			<div class='result'>
			<div class='result__value'>Раунд: ${model.round} <br> Победил Бот: ${model.winBot}<br> Победил Игрок: ${model.winPlayer}<br> Ничья: ${model.draw}</div>
		</div>
		<div class='buttons'>
			<button class='btn buttons__more'>Взять ещё</button>
			<button class='btn buttons__stop'>Хватит</button>
		</div>
		`)

	css('.buttons__more', { 'pointer-events': 'auto' })
	css('.buttons__stop', { 'pointer-events': 'auto' })

	model.insertCard('.bot')
	model.insertCard('.bot')
	model.insertCard('.player')
	model.insertCard('.player')

	model.updatePoints('.bot')
	model.updatePoints('.player')

	s('.buttons__more').addEventListener('click', () => {
		model.getMore('.player')
	})

	s('.buttons__stop').addEventListener('click', () => {
		css('.buttons__more', { 'pointer-events': 'none' })
		css('.buttons__stop', { 'pointer-events': 'none' })
		model.checkWin('.bot')
	})
}

function init() {
	s('.game__btn').addEventListener('click', () => {
		s('.game__btn').remove()
		startGame();
	})
}

init()

