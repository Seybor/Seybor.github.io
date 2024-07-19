const createWordsForArchive = () => {
	let arr = [{ en: 'knock', tr: '[nɒk]', ru: 'стучать', pos: 1394 }];

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

createWordsForArchive();
