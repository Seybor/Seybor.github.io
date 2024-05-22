const s = (e) => {
	return document.querySelector(e)
}

const all = (e) => {
	return document.querySelectorAll(e)
}

const deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
let round = 1
let points = 0
let money = 50
let seePoints = ''

let cash = 1000

s('.field').style.pointerEvents = 'none'

s('.start__btn').addEventListener('click', (evt) => {

	if (s('.start__btn').dataset.game === '0') {
		s('.start__btn').dataset.game = '1'
		s('.start__btn').textContent = 'restart'
	}
	gameStart()

})

const generateRandomNumber = (min = 0, max = deck.length - 1) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function gameStart() {
	seePoints = ''
	round = 1
	points = 0
	money = 50

	cash -= 50

	s('.cash span').textContent = cash
	s('.field__top-round span').textContent = round
	s('.field__top-points span').textContent = points
	s('.field__top-money span').textContent = money

	for (let i = 0; i < 2; i++) {
		let v = deck[generateRandomNumber()]
		points += v
		seePoints = seePoints + ' ' + String(v)
	}

	s('.field__deck').textContent = seePoints
	s('.field__top-points span').textContent = points

	s('.field').style.pointerEvents = 'auto'
}

function game() {
	s('.field').style.pointerEvents = 'none'

	round++

	if (points === 21) {
		money += 20
	} else if (points >= 17 && points <= 20) {
		money += 10
	} else if (points < 17) {
		money -= 10
	} else if (points > 21) {
		money -= 20
	}

	if (money <= 0) {
		alert('Вы проиграли')
		cash -= 50
		s('.cash span').textContent = cash
		return
	}

	if (round > 10) {
		alert(`Вы набрали: ${money} долларов`)
		cash += money
		s('.cash span').textContent = cash
		return
	}

	points = 0

	setTimeout(newRound, 2000)
}

function newRound() {
	seePoints = ''

	for (let i = 0; i < 2; i++) {
		let v = deck[generateRandomNumber()]
		points += v
		seePoints = seePoints + ' ' + String(v)
	}

	s('.field__deck').textContent = seePoints
	s('.field__top-round span').textContent = round
	s('.field__top-points span').textContent = points
	s('.field__top-money span').textContent = money

	s('.field').style.pointerEvents = 'auto'
}

function more() {
	let v = deck[generateRandomNumber()]
	points += v
	seePoints = seePoints + ' ' + String(v)

	s('.field__deck').textContent = seePoints
	s('.field__top-points span').textContent = points

	if (points === 21 || points > 21) {
		game()
	}

}

s('.field__bottom-stop').addEventListener('click', (evt) => {
	game()
})

s('.field__bottom-take').addEventListener('click', (evt) => {
	more()
})