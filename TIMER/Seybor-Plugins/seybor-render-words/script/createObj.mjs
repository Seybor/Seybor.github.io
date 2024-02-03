const start = () => {
	let createEl = document.createElement('div')
	createEl.classList.add('seybor-wrapper')
	createEl.innerHTML = `
	<div class='seybor-wrapper'>
		<div class="wrap-input">
			<label>
				Вставить свой файл
				<input class="visually-hidden" type="file" accept=".txt" id="file">
			</label>
		</div>

		<div class="content">
		</div>
	</div>
`
	let style = document.createElement('link')
	style.rel = "stylesheet"
	style.href = "Seybor-Plugins/seybor-render-words/css/style.css"
	document.querySelector('head').append(style)

	document.querySelector('body').append(createEl)

	const file = document.querySelector('#file')
	let renderArr
	file.addEventListener('change', (evt) => {
		const file = evt.currentTarget.files[0];
		const reader = new FileReader();

		reader.onload = function (evt) {
			const contents = evt.target.result;
			console.log(contents);
			renderArr = createObj(contents)
			renderAll(renderArr)
		};

		reader.readAsText(file);
	})
}



const createObj = (str) => {
	let arr = str.split('\n')
	let arrTwo = []
	let finalArr = []
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		count++
		if (count >= 5) {
			count = 0
			arrTwo.push(arr[i].trim())
			finalArr.push(arrTwo)
			arrTwo = []
		} else {
			arrTwo.push(arr[i].trim())
		}

	}

	finalArr = finalArr.map(([en, tr, ru, ru_example, en_example]) => ({ en, tr, ru, ru_example, en_example }))

	// - для скачивания по ссылке
	// finalArr = JSON.stringify(finalArr);
	// let blob = new Blob([finalArr], { type: 'application/json' });
	// let blob = new Blob([finalArr], { type: 'text/plain' });
	// let url = URL.createObjectURL(blob);
	// console.log(url)
	// document.querySelector('#link').setAttribute('href', `${url}`)
	// document.querySelector('#link').setAttribute('download', `LearningList.txt`)

	return finalArr
}

const renderAll = (arr) => {
	let content = document.querySelector('.content')
	content.textContent = ''
	for (let i = 0; i < arr.length; i++) {
		let createEl = document.createElement('div')
		createEl.classList.add('item')
		createEl.innerHTML = `
				<hr>
				<span class='item__en'>${arr[i]['en']}</span>
				<hr>
				<span class='item__tr'>${arr[i]['tr']}</span>
				<hr>
				<span class='item__ru'>${arr[i]['ru']}</span>
				<hr>
				<span class='item__ru-example'>${arr[i]['en_example']}</span>
				<hr>
				<span class='item__en-example'>${arr[i]['ru_example']}</span>
				<hr>
	`
		content.append(createEl)
	}
}



export { start, createObj }