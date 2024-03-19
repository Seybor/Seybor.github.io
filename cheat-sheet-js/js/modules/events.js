import { s, all } from "./base.js"

const startEvents = () => {
	all('.hints-item__title').forEach((el, id) => {
		el.addEventListener('click', (evt) => {

			if (window.getComputedStyle(el.nextElementSibling).getPropertyValue('height') === '0px') {
				el.nextElementSibling.style.height = 'auto'
			} else {
				el.nextElementSibling.style.height = '0px'
			}
		})
	})
}

export default startEvents
