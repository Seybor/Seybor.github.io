import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

function startCalc() {

	let result = 0
	let addNumber = 0
	let isOn = false
	let act = ''
	let equal = false
	let setZeroAddNumber = false

	if (localStorage.getItem('calc')) {
		isOn = true
		result = localStorage.getItem('calc')
		updateNumber(result)
	}




	function add(a, b) {
		result = +a + +b
		localStorage.setItem('calc', result)
		updateNumber(result)
	}

	function sub(a, b) {
		result = a - b
		localStorage.setItem('calc', result)
		updateNumber(result)
	}

	function factorial(a) {
		if (a > 10) {
			text('.calc__display', '>99999999')
			return
		}
		for (let i = 1; i <= a; i++) {
			result *= i
		}
		localStorage.setItem('calc', result)
		updateNumber(result)
	}

	function sqrt(a) {
		result = Math.sqrt(a).toFixed(2)
		localStorage.setItem('calc', result)
		updateNumber(result)
	}

	function multiplication(a, b) {
		result = a * b
		localStorage.setItem('calc', result)
		updateNumber(result)
	}

	function devide(a, b) {

		if (b == 0) {
			text('.calc__display', 'error')
			return
		}
		result = (a / b).toFixed(2)
		localStorage.setItem('calc', result)
		updateNumber(result)
	}

	function updateNumber(value) {

		if (+value > 99999999) {
			text('.calc__display', '>99999999')
		} else {

			text('.calc__display', value)

		}

	}



	all('.calc-control__keys').forEach((el, id) => {

		el.addEventListener('click', (evt) => {

			if (isOn) {

				if (evt.target.dataset.control - evt.target.dataset.control === 0) {

					if (result === 0) {

						result = evt.target.dataset.control
						updateNumber(result)
					} else {

						if (addNumber === 0) {
							result += evt.target.dataset.control
							updateNumber(result)

						} else {

							if (addNumber === '0') {
								addNumber = evt.target.dataset.control
							} else {

								if (setZeroAddNumber) {
									addNumber = evt.target.dataset.control
									setZeroAddNumber = false
								} else {
									addNumber += evt.target.dataset.control
								}

							}

							updateNumber(addNumber)

						}

					}




				}

			}


		})


	})

	evt('.calc-control__keys[data-control="="', 'click', (evt) => {

		if (isOn) {

			switch (act) {
				case '+': {
					add(result, addNumber)
				} break
				case '-': {
					sub(result, addNumber)
				} break
				case '!': {
					factorial(result)
				} break
				case '√': {
					sqrt(result)
				} break
				case '*': {
					multiplication(result, addNumber)
				} break
				case '/': {
					devide(result, addNumber)
				} break
			}


			setZeroAddNumber = true
			equal = true

		}


	})


	evt('.calc-control__keys[data-control="+"]', 'click', (evt) => {


		if (isOn) {

			if (result === 0) {

				return

			} else {

				act = '+'

				if (addNumber === 0) {
					addNumber = '0'
					return
				} else {

					if (equal) {
						return
					} else {
						add(result, addNumber)
						equal = true
					}


				}

			}

		}


	})

	evt('.calc-control__keys[data-control="-"]', 'click', (evt) => {


		if (isOn) {

			if (result === 0) {

				return

			} else {

				act = '-'

				if (addNumber === 0) {
					addNumber = '0'
					return
				} else {

					if (equal) {
						return
					} else {
						sub(result, addNumber)
						equal = true
					}


				}



			}

		}


	})

	evt('.calc-control__keys[data-control="*"]', 'click', (evt) => {


		if (isOn) {

			if (result === 0) {

				return

			} else {

				act = '*'

				if (addNumber === 0) {
					addNumber = '0'
					return
				} else {

					if (equal) {
						return
					} else {
						multiplication(result, addNumber)
						equal = true
					}


				}



			}

		}


	})

	evt('.calc-control__keys[data-control="/"]', 'click', (evt) => {


		if (isOn) {

			if (result === 0) {

				return

			} else {

				act = '/'

				if (addNumber === 0) {
					addNumber = '0'
					return
				} else {

					if (equal) {
						return
					} else {
						devide(result, addNumber)
						equal = true
					}


				}



			}

		}


	})

	evt('.calc-control__keys[data-control="!"]', 'click', (evt) => {


		if (isOn) {

			if (result === 0) {

				return

			} else {

				act = '!'

				if (equal) {
					return
				} else {
					factorial(result)
					equal = true
				}
			}

		}


	})

	evt('.calc-control__keys[data-control="√"]', 'click', (evt) => {


		if (isOn) {

			if (result === 0) {

				return

			} else {

				act = '√'

				if (equal) {
					return
				} else {
					sqrt(result)
					equal = true
				}
			}

		}


	})

	evt('.calc-control__keys[data-control="off"]', 'click', (evt) => {

		isOn = false
		result = 0
		addNumber = 0
		act = ''
		equal = false
		updateNumber('')
		localStorage.clear()

	})

	evt('.calc-control__keys[data-control="on/c"]', 'click', (evt) => {
		isOn = true
		result = 0
		addNumber = 0
		act = ''
		equal = false
		updateNumber(result)
		localStorage.clear()
	})

}


startCalc()




