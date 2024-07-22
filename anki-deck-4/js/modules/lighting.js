import { s, all } from './base.js'

const lighting = () => {

	all('.wrap .text').forEach(e => {

		if (e.dataset.pos <= 0) {
			e.dataset.difficult = '0'
		}
		else if (e.dataset.pos <= 3000) {
			e.dataset.difficult = '1'
		} else if (e.dataset.pos <= 6000) {
			e.dataset.difficult = '2'
		} else if (e.dataset.pos <= 10000) {
			e.dataset.difficult = '3'
		} else if (e.dataset.pos <= 15000) {
			e.dataset.difficult = '4'
		} else if (e.dataset.pos <= 21999) {
			e.dataset.difficult = '5'
		} else if (e.dataset.pos == 22000) {
			e.dataset.difficult = '6'
		}

	})

}

export default lighting