import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

const calcControl = {
	init: function () {

		this.result = 0
		this.numberOne = ''
		this.numberTwo = ''
		this.isOn = false
		this.act = ''
		this.equal = false
		this.setControls()
	},

	result: 0,
	addNumber: 0,
	isOn: false,
	act: '',
	equal: false,
	setZeroAddNumber: false,

	add: function (a, b) {
		this.result = +a + +b

		this.updateNumber(this.result)
	},

	sub: function (a, b) {
		this.result = a - b
		this.updateNumber(this.result)
	},

	factorial: function (a) {
		if (a > 10) {
			text('.calc__display', '>99999999')
			return
		}
		for (let i = 1; i <= a; i++) {
			this.result *= i
		}
		this.updateNumber(this.result)
	},

	sqrt: function (a) {
		this.result = Math.sqrt(a).toFixed(2)
		this.updateNumber(this.result)
	},

	multiplication: function (a, b) {
		this.result = a * b
		this.updateNumber(this.result)
	},

	devide: function (a, b) {

		if (b == 0) {
			text('.calc__display', 'error')
			return
		}
		this.result = (a / b).toFixed(2)
		this.updateNumber(this.result)
	},

	setControls: function () {

		all('.calc-control__keys').forEach((el, id) => {

			el.addEventListener('click', (evt) => {

				if (this.isOn) {

					if (evt.target.dataset.control - evt.target.dataset.control === 0) {

						if (this.result === 0) {

							this.result = evt.target.dataset.control
							this.updateNumber(this.result)
						} else {

							if (this.addNumber === 0) {
								this.result += evt.target.dataset.control
								this.updateNumber(this.result)

							} else {

								if (this.addNumber === '0') {
									this.addNumber = evt.target.dataset.control
								} else {

									if (this.setZeroAddNumber) {
										this.addNumber = evt.target.dataset.control
										this.setZeroAddNumber = false
									} else {
										this.addNumber += evt.target.dataset.control
									}

								}

								this.updateNumber(this.addNumber)

							}

						}




					}

				}


			})


		})

		evt('.calc-control__keys[data-control="="', 'click', (evt) => {

			if (this.isOn) {

				switch (this.act) {
					case '+': {
						this.add(this.result, this.addNumber)
					} break
					case '-': {
						this.sub(this.result, this.addNumber)
					} break
					case '!': {
						this.factorial(this.result)
					} break
					case '√': {
						this.sqrt(this.result)
					} break
					case '*': {
						this.multiplication(this.result, this.addNumber)
					} break
					case '/': {
						this.devide(this.result, this.addNumber)
					} break
				}


				this.setZeroAddNumber = true
				this.equal = true

			}


		})


		evt('.calc-control__keys[data-control="+"]', 'click', (evt) => {


			if (this.isOn) {

				if (this.result === 0) {

					return

				} else {

					this.act = '+'

					if (this.addNumber === 0) {
						this.addNumber = '0'
						return
					} else {

						if (this.equal) {
							return
						} else {
							this.add(this.result, this.addNumber)
							this.equal = true
						}


					}

				}

			}


		})

		evt('.calc-control__keys[data-control="-"]', 'click', (evt) => {


			if (this.isOn) {

				if (this.result === 0) {

					return

				} else {

					this.act = '-'

					if (this.addNumber === 0) {
						this.addNumber = '0'
						return
					} else {

						if (this.equal) {
							return
						} else {
							this.sub(this.result, this.addNumber)
							this.equal = true
						}


					}



				}

			}


		})

		evt('.calc-control__keys[data-control="*"]', 'click', (evt) => {


			if (this.isOn) {

				if (this.result === 0) {

					return

				} else {

					this.act = '*'

					if (this.addNumber === 0) {
						this.addNumber = '0'
						return
					} else {

						if (this.equal) {
							return
						} else {
							this.multiplication(this.result, this.addNumber)
							this.equal = true
						}


					}



				}

			}


		})

		evt('.calc-control__keys[data-control="/"]', 'click', (evt) => {


			if (this.isOn) {

				if (this.result === 0) {

					return

				} else {

					this.act = '/'

					if (this.addNumber === 0) {
						this.addNumber = '0'
						return
					} else {

						if (this.equal) {
							return
						} else {
							this.devide(this.result, this.addNumber)
							this.equal = true
						}


					}



				}

			}


		})

		evt('.calc-control__keys[data-control="!"]', 'click', (evt) => {


			if (this.isOn) {

				if (this.result === 0) {

					return

				} else {

					this.act = '!'

					if (this.equal) {
						return
					} else {
						this.factorial(this.result)
						this.equal = true
					}
				}

			}


		})

		evt('.calc-control__keys[data-control="√"]', 'click', (evt) => {


			if (this.isOn) {

				if (this.result === 0) {

					return

				} else {

					this.act = '√'

					if (this.equal) {
						return
					} else {
						this.sqrt(this.result)
						this.equal = true
					}
				}

			}


		})

		evt('.calc-control__keys[data-control="off"]', 'click', (evt) => {

			this.isOn = false
			this.result = 0
			this.addNumber = 0
			this.act = ''
			this.equal = false
			this.updateNumber('')

		})

		evt('.calc-control__keys[data-control="on/c"]', 'click', (evt) => {
			this.isOn = true
			this.result = 0
			this.addNumber = 0
			this.act = ''
			this.equal = false
			this.updateNumber(this.result)
		})

	},

	updateNumber: function (value) {

		if (+value > 99999999) {
			text('.calc__display', '>99999999')
		} else {

			text('.calc__display', value)

		}


	}
}

calcControl.init()