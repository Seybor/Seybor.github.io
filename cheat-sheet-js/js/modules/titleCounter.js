import { s, all } from "./base.js"
import ARR from "./obj.js"

const getCounter = () => {
	let bigCounter = 0
	ARR.forEach((el) => {
		el.content.forEach((elContent) => {
			bigCounter += elContent.value.length
		})
	})
	s('.hints__title span').textContent = bigCounter
}

export default getCounter