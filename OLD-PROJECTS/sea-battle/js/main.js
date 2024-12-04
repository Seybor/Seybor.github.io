import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

const ships = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

function renderShips() {
	let arrPositions = []
	let arrPositionsControl = []

	function getShipPosition(size) {
		let position = 0
		let control = false
		let arrOrientation = ['left', 'right', 'up', 'down']
		let orientation = Math.floor(Math.random() * arrOrientation.length)
		let interuption = 1000

		do {
			interuption--

			if (interuption <= 0) {
				console.log('Произошла ошибка в цикле')
				break
			}

			position = [[Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1)]];

			if (size >= 2) {

				if (arrOrientation[orientation] === 'left') {

					position[1] = [position[0][0] - 1, position[0][1]]

					if (size >= 3) {
						position[2] = [position[1][0] - 1, position[1][1]]

						if (size === 4) {
							position[3] = [position[2][0] - 1, position[2][1]]
						}
					}

				} else if (arrOrientation[orientation] === 'right') {


					position[1] = [position[0][0] + 1, position[0][1]]

					if (size >= 3) {
						position[2] = [position[1][0] + 1, position[1][1]]

						if (size === 4) {
							position[3] = [position[2][0] + 1, position[2][1]]
						}
					}


				} else if (arrOrientation[orientation] === 'up') {

					position[1] = [position[0][0], position[0][1] + 1]

					if (size >= 3) {
						position[2] = [position[1][0], position[1][1] + 1]

						if (size === 4) {
							position[3] = [position[2][0], position[2][1] + 1]
						}
					}

				} else if (arrOrientation[orientation] === 'down') {

					position[1] = [position[0][0], position[0][1] - 1]

					if (size >= 3) {
						position[2] = [position[1][0], position[1][1] - 1]

						if (size === 4) {
							position[3] = [position[2][0], position[2][1] - 1]
						}
					}

				}

			}

			for (let i = 0; i < arrPositions.length; i++) {
				if (arrPositions[i][0] === position[0][0] && arrPositions[i][1] === position[0][1]) {
					control = true
					break
				} else {
					control = false
				}

				if (size >= 2) {

					if (arrPositions[i][0] === position[1][0] && arrPositions[i][1] === position[1][1]) {
						control = true
						break
					} else {
						control = false
					}

					if (size >= 3) {

						if (arrPositions[i][0] === position[2][0] && arrPositions[i][1] === position[2][1]) {
							control = true
							break
						} else {
							control = false
						}



						if (size === 4) {

							if (arrPositions[i][0] === position[3][0] && arrPositions[i][1] === position[3][1]) {
								control = true
								break
							} else {
								control = false
							}


						}

					}

				}
			}

			if (size >= 2) {
				if (position[1][0] < 1 || position[1][1] < 1 || position[1][0] > 10 || position[1][1] > 10) {
					control = true
					continue
				} else {
					control = false
				}

				if (size >= 3) {
					if (position[2][0] < 1 || position[2][1] < 1 || position[2][0] > 10 || position[2][1] > 10) {
						control = true
						continue
					} else {
						control = false
					}

					if (size === 4) {
						if (position[3][0] < 1 || position[3][1] < 1 || position[3][0] > 10 || position[3][1] > 10) {
							control = true
							continue
						} else {
							control = false
						}
					}
				}
			}

			if (control === true) {
				continue
			}

			for (let i = 0; i < arrPositionsControl.length; i++) {
				if (arrPositionsControl[i][0] === position[0][0] && arrPositionsControl[i][1] === position[0][1]) {
					control = true
					break
				} else {
					control = false
				}

				if (size >= 2) {

					if (arrPositionsControl[i][0] === position[1][0] && arrPositionsControl[i][1] === position[1][1]) {
						control = true
						break
					} else {
						control = false
					}

					if (size >= 3) {

						if (arrPositionsControl[i][0] === position[2][0] && arrPositionsControl[i][1] === position[2][1]) {
							control = true
							break
						} else {
							control = false
						}

						if (size === 4) {
							if (arrPositionsControl[i][0] === position[3][0] && arrPositionsControl[i][1] === position[3][1]) {
								control = true
								break
							} else {
								control = false
							}
						}

					}


				}
			}

		} while (control);

		if (interuption <= 0) {
			return 0
		}

		arrPositions.push(position[0])

		if (size >= 2) {
			arrPositions.push(position[1])

			if (size >= 3) {
				arrPositions.push(position[2])

				if (size === 4) {
					arrPositions.push(position[3])
				}
			}
		}

		if (size === 1) {

			arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
			arrPositionsControl.push([position[0][0], position[0][1] + 1])
			arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
			arrPositionsControl.push([position[0][0] - 1, position[0][1]])
			arrPositionsControl.push([position[0][0] + 1, position[0][1]])
			arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])
			arrPositionsControl.push([position[0][0], position[0][1] - 1])
			arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

		} else if (size === 2) {

			if (arrOrientation[orientation] === 'left') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 2, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 2, position[0][1]])
				arrPositionsControl.push([position[0][0] - 2, position[0][1] - 1])

				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1]])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

			} else if (arrOrientation[orientation] === 'right') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 2, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 2, position[0][1]])
				arrPositionsControl.push([position[0][0] + 2, position[0][1] - 1])


			} else if (arrOrientation[orientation] === 'up') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 2])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])


				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 2])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1]])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0], position[0][1] + 2])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])

			} else if (arrOrientation[orientation] === 'down') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 2])


				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1]])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 2])

				arrPositionsControl.push([position[0][0], position[0][1] - 2])
				arrPositionsControl.push([position[0][0], position[0][1] + 1])

			}
		} else if (size === 3) {


			if (arrOrientation[orientation] === 'left') {

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1]])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 2, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 2, position[0][1] - 1])


				arrPositionsControl.push([position[0][0] - 3, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 3, position[0][1]])
				arrPositionsControl.push([position[0][0] - 3, position[0][1] - 1])

			} else if (arrOrientation[orientation] === 'right') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 2, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 2, position[0][1] - 1])


				arrPositionsControl.push([position[0][0] + 3, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 3, position[0][1]])
				arrPositionsControl.push([position[0][0] + 3, position[0][1] - 1])


			} else if (arrOrientation[orientation] === 'up') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1]])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 2])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 2])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 3])
				arrPositionsControl.push([position[0][0], position[0][1] + 3])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 3])

			} else if (arrOrientation[orientation] === 'down') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1]])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 2])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]] - 2)

				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 3])
				arrPositionsControl.push([position[0][0], position[0][1] - 3])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 3])


			}

		} else if (size === 4) {

			if (arrOrientation[orientation] === 'left') {

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1]])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 2, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 2, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 3, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 3, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 4, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 4, position[0][1]])
				arrPositionsControl.push([position[0][0] - 4, position[0][1] - 1])

			} else if (arrOrientation[orientation] === 'right') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] - 1, position[0][1]])
				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 2, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 2, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 3, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 3, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] + 4, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 4, position[0][1]])
				arrPositionsControl.push([position[0][0] + 4, position[0][1] - 1])

			} else if (arrOrientation[orientation] === 'up') {

				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])
				arrPositionsControl.push([position[0][0], position[0][1] - 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 1, position[0][1]])
				arrPositionsControl.push([position[0][0] + 1, position[0][1]])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 2])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 2])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 3])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 3])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 4])
				arrPositionsControl.push([position[0][0], position[0][1] + 4])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 4])

			} else if (arrOrientation[orientation] === 'down') {


				arrPositionsControl.push([position[0][0] - 1, position[0][1] + 1])
				arrPositionsControl.push([position[0][0], position[0][1] + 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] + 1])

				arrPositionsControl.push([position[0][0] - 1, position[0][1]])
				arrPositionsControl.push([position[0][0] + 1, position[0][1]])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 1])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 1])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 2])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 2])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 3])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 3])

				arrPositionsControl.push([position[0][0] - 1, position[0][1] - 4])
				arrPositionsControl.push([position[0][0], position[0][1] - 4])
				arrPositionsControl.push([position[0][0] + 1, position[0][1] - 4])

			}
		}



		return position

	}


	function renderShipsAll(whoPlayer) {

		arrPositions = []
		arrPositionsControl = []
		let ifMistake = false

		ships.forEach(e => {
			let position = getShipPosition(e)

			if (position === 0) {
				ifMistake = true
				return
			}

			if (e === 1) {
				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).dataset.name = 'one'
				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).classList.add('ship')
			} else if (e === 2) {
				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).dataset.name = 'two'
				s(`${whoPlayer} .cell[data-coord="[${position[1][0]},${position[1][1]}]"]`).dataset.name = 'two'

				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).classList.add('ship')
				s(`${whoPlayer} .cell[data-coord="[${position[1][0]},${position[1][1]}]"]`).classList.add('ship')
			} else if (e === 3) {
				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).dataset.name = 'three'
				s(`${whoPlayer} .cell[data-coord="[${position[1][0]},${position[1][1]}]"]`).dataset.name = 'three'
				s(`${whoPlayer} .cell[data-coord="[${position[2][0]},${position[2][1]}]"]`).dataset.name = 'three'

				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).classList.add('ship')
				s(`${whoPlayer} .cell[data-coord="[${position[1][0]},${position[1][1]}]"]`).classList.add('ship')
				s(`${whoPlayer} .cell[data-coord="[${position[2][0]},${position[2][1]}]"]`).classList.add('ship')
			} else if (e === 4) {

				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).dataset.name = 'four'
				s(`${whoPlayer} .cell[data-coord="[${position[1][0]},${position[1][1]}]"]`).dataset.name = 'four'
				s(`${whoPlayer} .cell[data-coord="[${position[2][0]},${position[2][1]}]"]`).dataset.name = 'four'
				s(`${whoPlayer} .cell[data-coord="[${position[3][0]},${position[3][1]}]"]`).dataset.name = 'four'

				s(`${whoPlayer} .cell[data-coord="[${position[0][0]},${position[0][1]}]"]`).classList.add('ship')
				s(`${whoPlayer} .cell[data-coord="[${position[1][0]},${position[1][1]}]"]`).classList.add('ship')
				s(`${whoPlayer} .cell[data-coord="[${position[2][0]},${position[2][1]}]"]`).classList.add('ship')
				s(`${whoPlayer} .cell[data-coord="[${position[3][0]},${position[3][1]}]"]`).classList.add('ship')
			}

		})

		if (all(`${whoPlayer} .ship`).length < 20) {
			console.log(all(`${whoPlayer} .ship`).length)
			ifMistake = true
		}

		if (ifMistake) {
			console.log('error')
			text(whoPlayer, '')

			for (let y = 1; y <= 10; y++) {
				for (let x = 1; x <= 10; x++) {
					insert(whoPlayer, `<div class="cell" data-coord="[${x},${y}]"></div>`);
				}
			}

			renderShipsAll(whoPlayer)
		}


	}

	renderShipsAll('.board--player')
	renderShipsAll('.board--bot')

}

function gameControl(player) {

	let botShips = 20
	let playerShips = 20

	function onClickPlayer(evt) {
		if (evt.target.classList.contains('ship')) {
			evt.target.classList.add('hit')
			botShips--
			s('audio[data-id="hit"').play()

			if (botShips <= 0) {
				alert('you win')
			}
		} else {
			evt.target.classList.add('mistake')
			s('audio[data-id="miss"').play()

			s('.board--bot').removeEventListener('click', onClickPlayer)

			setTimeout(turnBot, 2000)
		}


	}

	function turnBot() {
		let target = [[Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1)]];

		if (s(`.board--player .cell[data-coord="[${target[0][0]},${target[0][1]}]"]`).classList.contains('ship')) {
			s(`.board--player .cell[data-coord="[${target[0][0]},${target[0][1]}]"]`).classList.add('hit')

			playerShips--

			if (playerShips <= 0) {
				alert('bot win')
				return
			}

			turnBot()
		} else {
			s(`.board--player .cell[data-coord="[${target[0][0]},${target[0][1]}]"]`).classList.add('mistake')
			s('.board--bot').addEventListener('click', onClickPlayer)
		}


	}

	if (player === 'player') {
		s('.board--bot').addEventListener('click', onClickPlayer)
	}






}

evt('.game', 'click', () => {
	text('.board--player', '')
	text('.board--bot', '')

	for (let y = 1; y <= 10; y++) {
		for (let x = 1; x <= 10; x++) {
			insert('.board--player', `<div class="cell" data-coord="[${x},${y}]"></div>`);
			insert('.board--bot', `<div class="cell" data-coord="[${x},${y}]"></div>`);
		}

	}

	renderShips()
	gameControl('player')
})