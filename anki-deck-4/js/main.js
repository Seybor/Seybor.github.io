import { s, all } from './modules/base.js';

import getSortArrAndGetSum from './modules/getSortArrAndGetSum.js';
import getNum from './modules/getNum.js';
import getSearch from './modules/getSearch.js';
import getRender from './modules/getRender.js';

import getTest from './modules/getTest.js';

import ALL from './data/unity_arrays.js';
import w_3000 from './data/arrays/words/w-3000.js';
import w_6000 from './data/arrays/words/w-6000.js';
import w_10000 from './data/arrays/words/w-10000.js';
import w_21999 from './data/arrays/words/w-21999.js';
import w_22000 from './data/arrays/words/w-22000.js';

const startScript = () => {
	getSortArrAndGetSum();
	getNum();
	getSearch();
	getRender();

	all('.nav__link[data-script]').forEach((e) => {
		e.addEventListener('click', (evt) => {
			getTest(e.dataset.script);
		});
	});
};

startScript();

const createWordsForArchive = (arr) => {
	let newArr = JSON.parse(JSON.stringify(w_3000));

	const finalArr = newArr.filter((item1) => !arr.some((item2) => item1.en === item2.en));

	console.log(arr.length);
	console.log(newArr.length);
	console.log(finalArr.length);

	if (arr.length + finalArr.length === newArr.length) {
		console.log(JSON.stringify(finalArr));
	}

	return finalArr;
};

let arr = [

];
// createWordsForArchive(arr);