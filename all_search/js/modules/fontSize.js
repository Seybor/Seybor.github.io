import { s, all } from "./basic.js"

const fontSize = () => {
	s('.change-font').addEventListener('click', (evt) => {

		let fontSize = +((window.getComputedStyle(s('body')).getPropertyValue('font-size')).slice(0, -2))
		console.log(fontSize)
		const changeFontSize = (value) => {
			if (fontSize <= 10 && value < 0) {
				return
			}
			if (fontSize >= 24 && value > 0) {
				return
			}
			s('body').style.setProperty('font-size', `${fontSize + value}px`)
		}

		if (evt.target.dataset.btn) {
			window.getComputedStyle(s('body')).getPropertyValue('font-size')
			switch (evt.target.dataset.btn) {
				case 'plus': {
					changeFontSize(2)
				} break
				case 'minus': {
					changeFontSize(-2)
				}
			}

			window.getComputedStyle(s('body')).getPropertyValue('font-size')

		}
	})
}

export default fontSize

