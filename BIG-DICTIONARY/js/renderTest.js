export const renderTest = (arr) => {
	$('#field').text('')

	let testArr = arr.slice()
	let newElement

	const shuffleArr = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	};

	shuffleArr(testArr)

	$('#field').append('<div class="row" id="for-test"></div>')

	for (let i = 0; i < testArr.length; i++) {

		if (i % 2 === 0) {
			newElement = $(`<div class="col-4" title="${testArr[i]['ru']}" data-test="id-${i}">${testArr[i]['en']}</div>`);
		} else {
			newElement = $(`<div class="col-4" title="${testArr[i]['en']}" data-test="id-${i}">${testArr[i]['ru']}</div>`);
		}

		$('#for-test').append(newElement);

	}

	let arrForDownload = []
	$('#link').removeClass('disabled')
	$('#link').attr('id', 'link-test')

	$('#field').on('pointerdown', (evt) => {
		if (evt.target.dataset.test) {
			let el = evt.target.dataset.test.split('id-')[1]
			console.log(el)
			if (!arrForDownload.includes(testArr[el])) {
				arrForDownload.push(testArr[el])

				$('#link-count').text(`${arrForDownload.length}`)
			}
			console.log(arrForDownload)
		}
	})





	$('#link-test').on('pointerdown', (evt) => {
		evt.preventDefault()
		let finalResult = ``

		if (arrForDownload.length === 0) {
			return
		}

		arrForDownload.forEach((el) => {
			if (el['tr']) {
				finalResult += `${el['en']} - ${el['tr']} - ${el['ru']}\n`
			} else {
				finalResult += `${el['en']} - ${el['ru']}\n`
			}
		})


		let blob = new Blob([finalResult], { type: 'text/plain' });
		let url = URL.createObjectURL(blob);
		console.log(url)
		$('#link-test').attr('href', `${url}`)
		$('#link-test').attr('download', `badRemeber.txt`)

	})

}


