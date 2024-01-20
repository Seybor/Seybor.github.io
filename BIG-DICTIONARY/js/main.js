'use strict';

// $('body').hide()

$('#theme').click(() => {
	if ($('#html').attr('data-bs-theme') == 'dark') {
		$('#html').attr('data-bs-theme', 'light')
		$('#theme').css({
			'transform': 'rotate(180deg)',
		})
	} else {
		$('#html').attr('data-bs-theme', 'dark')
		$('#theme').css({
			'transform': 'rotate(0deg)',
		})
	}
})

let more
let counter = 0
let max = 100
let contents
let currentArr

const renderWords = (arr, fromfile = false) => {
	let newElement
	let target

	if (!fromfile) {
		target = arr
		switch (arr) {
			case 'noun': {
				arr = ALL_ARR.NOUN
			} break
			case 'r-verb': {
				arr = ALL_ARR.REGULAR_VERBS
			} break
			case 'ir-verb': {
				arr = ALL_ARR.IRREGULAR_VERBS
			} break
			case 'adjective': {
				arr = ALL_ARR.ADJECTIVE
			} break
			case 'adverbs': {
				arr = ALL_ARR.ADVERBS
			} break
			default: {
				alert(`Массив не найден`)
				return
			}
		}

		currentArr = arr
	} else {
		target = 'fromFile'
		currentArr = contents
	}


	$('#main').attr('data-current-arr', `${target}`)

	for (let i = 0; i < max; i++) {
		if (counter < arr.length) {
			newElement = $(`
				<div class="row">
					<div class="col-1">${counter + 1}</div>
					<div class="col-4" data-word="id-${counter}">${arr[counter]['en']}</div>
					<div class="col-3">${arr[counter]['tr']}</div>
					<div class="col-4">${arr[counter]['ru']}</div>
				</div>`);
			$('#field').append(newElement);
			counter++
		} else {
			break
		}
	}

	if (counter < arr.length) {
		newElement = $(`
			<hr class='s-hr'>
			<div class="row mt-5" id="more">
				<div class="col-12">
					<button class="btn bg-primary s-p" data-more='more' data-arr=${target}>ЕЩЁ</button>
				</div>
			</div>`
		);
		$('#field').append(newElement);


		$('#more').on('pointerdown', (evt) => {
			if (evt.target.dataset.more === 'more') {
				$('#more').remove()
				if (evt.target.dataset.arr !== 'fromFile') {
					$('#header').trigger('pointerdown', [evt.target.dataset.arr])
				} else {
					$('#header').trigger('pointerdown', [contents])
				}
			}
		})

	} else {
		$('#more').remove()
	}

}

$('#header').on('pointerdown', (evt, value) => {
	evt.preventDefault()

	if ((evt.target.dataset.name) || (value)) {

		if (value) {
			if (typeof value === 'string') {
				renderWords(value)
			} else {
				renderWords(value, true)
			}
		} else {
			counter = 0
			$('#field').text('')
			$('#field').append(`
				<div class="row s-b">
					<div class="col-1">№</div>
					<div class="col-4">EN</div>
					<div class="col-3">TR</div>
					<div class="col-4">RU</div>
				</div>
			`)
			renderWords(evt.target.dataset.name)
		}


	}
})


// @

let arrForDownload = []
$('#field').on('pointerdown', (evt) => {

	if (evt.target.dataset.word) {
		let el = evt.target.dataset.word.split('id-')[1]
		console.log(el)
		if (!arrForDownload.includes(currentArr[el])) {
			arrForDownload.push(currentArr[el])
		}
		console.log(arrForDownload)
	}
})

// @


// !

$('#fileInput').on('change', function (evt) {
	const file = evt.target.files[0];
	const reader = new FileReader();

	evt.target.value = ''

	const maxSize = 102400;

	if (file.size > maxSize) {
		alert(`Размер файла не должен быть больше: ${maxSize / 1024}кб`);
		return
	}

	reader.addEventListener('load', function (evt) {

		try {
			contents = JSON.parse(evt.target.result);
			counter = 0
			$('#field').text('')
			$('#field').append(`
			<div class="row s-b">
				<div class="col-1">№</div>
				<div class="col-4">EN</div>
				<div class="col-3">TR</div>
				<div class="col-4">RU</div>
			</div>
		`)
			$('#header').trigger('pointerdown', [contents])
		} catch {
			alert('Файл не был распознан как JSON')
			try {
				let newElement = []
				contents = (evt.target.result).split('\n')

				if (contents[0].split(' ').length === 1) {
					throw new Error('Мда')
				}

				contents = contents.filter(element => element.trim() !== "");

				contents.forEach((el) => {
					newElement.push(el.split(' '))
				})
				console.log(newElement)

				contents = newElement.map(([en, tr, ru]) => ({ en, tr, ru }))

				$('#header').trigger('pointerdown', [contents])

			} catch (e) {
				alert(`${e.message}`)
			}
		}

	});

	// Читаем содержимое файла в формате текста
	reader.readAsText(file);
});

// !

//-

$('#link').on('pointerdown', (evt) => {
	evt.preventDefault()
	// let jsonData = JSON.stringify(arrForDownload);
	// let blob = new Blob([jsonData], { type: 'application/json' });

	let finalResult = ``
	// arrForDownload.forEach((el) => {
	// 	finalResult += `${el['en']} ${el['tr']} ${el['ru']}\n`
	// })


	for (const key in ALL_ARR) {

		const arr = ALL_ARR[key];
		arr.forEach((el) => {
			finalResult += `${el['en']} ${el['tr']} ${el['ru']}\n`
		});

	}

	let blob = new Blob([finalResult], { type: 'text/plain' });


	let url = URL.createObjectURL(blob);
	console.log(url)

	$('#link').attr('href', `${url}`)
	$('#link').attr('download', 'data.txt')
})

//-