import { s, all } from './modules/base.js'

import getSortArrAndGetSum from './modules/getSortArrAndGetSum.js'
import getNum from './modules/getNum.js'
import getSearch from './modules/getSearch.js'
import getRender from './modules/getRender.js'

import getTest from './modules/getTest.js'

import ALL from './data/all.js'

const startScript = () => {

	getSortArrAndGetSum()
	getNum()
	getSearch()
	getRender()

	s('button[data-script="test"').addEventListener('click', (evt) => {
		getTest()
	})

}

startScript()