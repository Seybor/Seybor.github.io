function extractData(string) {
	string = string.split('\n')
	let arr = []

	string.forEach(el => {
		arr.push(el.split('\t'))
	});

	arr = arr.map(el => {
		return {
			en: el[0],
			tr: el[1],
			ru: el[2],
			pos: el[3],
			en_example: el[4],
			ru_example: el[5]
		}
	})

	return arr
}

let content = ``

console.log(extractData(content))