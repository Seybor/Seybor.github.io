import { s, all } from "./basic.js"

const currentTime = () => {
	let date = new Date()
	let currentYear = date.getFullYear().toString()
	let currentMonth = (date.getMonth() + 1).toString().padStart(2, 0)
	let currentDay = date.getDate().toString().padStart(2, 0)

	s('.footer__time').textContent = `${currentDay}.${currentMonth}.${currentYear}`
}

export default currentTime