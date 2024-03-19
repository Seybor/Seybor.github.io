import { s, all } from "./basic.js"

const toggleStart = () => {
	s('#toggle').addEventListener('click', (evt) => {
		let height = (window.getComputedStyle(s('.contents')).getPropertyValue('height'))
		height === '0px' ? (
			s('.contents').style.setProperty('padding', '24px 0'),
			s('.contents').style.setProperty('height', `auto`)
		) : (
			s('.contents').style.setProperty('height', `0px`),
			s('.contents').style.setProperty('padding', '0')
		);
	})
}

export default toggleStart