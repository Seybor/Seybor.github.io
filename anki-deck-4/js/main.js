import { s, all } from './modules/base.js';

import getSortArrAndGetSum from './modules/getSortArrAndGetSum.js';
import getNum from './modules/getNum.js';
import getSearch from './modules/getSearch.js';
import getRender from './modules/getRender.js';

import getTest from './modules/getTest.js';

import ALL from './data/unity_arrays.js';

const startScript = () => {
	getSortArrAndGetSum();
	getNum();
	getSearch();
	getRender();

	s('button[data-script="test"').addEventListener('click', (evt) => {
		getTest();
	});
};

startScript();

const createWordsForArchive = (arr) => {
	let newArr = JSON.parse(JSON.stringify(ALL.w));

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
