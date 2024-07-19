import { s, all } from './base.js'

import ALL from '../data/all.js'

const getSortArrAndGetSum = () => {
	let sum = 0

	Object.entries(ALL).forEach(e => {
		sum += e[1].length

		if (e[1][0]?.pos) {
			e[1].sort((a, b) => {
				return a.pos - b.pos
			})
		}

	})
	s('#arr-sum').textContent = sum
}

export default getSortArrAndGetSum