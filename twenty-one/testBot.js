const deck = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

let round = 1
let points = 0
let money = 50

let cash = 0

let check = true

let lose = 0




const generateRandomNumber = (min = 0, max = deck.length - 1) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

for (let i = 0; i < 100; i++) {

	cash -= 50

	for (let j = 0; j < 10; j++) {

		if (money <= 0) {
			money = 50
			lose++
			break
		}

		check = true
		points = 0

		do {
			points += deck[generateRandomNumber()]

			if (points >= 16 && points < 17) {
				check = false
				money -= 10

			} else if (points >= 17 && points <= 20) {
				check = false
				money += 10
			} else if (points === 21) {
				check = false
				money += 20
			} else if (points > 21) {
				check = false
				money -= 20
			}

		} while (check)


		if (j === 9) {
			cash += money >= 0 ? money : 0
		}


	}

}



console.log(cash)
console.log(lose)