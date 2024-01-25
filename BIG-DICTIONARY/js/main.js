'use strict';

// $('body').hide()

import { WORDS } from './ARR/WORDS.js';
import { PHRASES } from './ARR/PHRASES.js';
import { PHRASES_VERBS } from './ARR/PHRASES-VERBS.js';
import { renderWords, renderPhrases, renderSearch, currentArr } from './renderAll.js';
import { } from './events.js';

{
	let lengthWords = $('#words .badge')
	let count = 0
	for (let key in WORDS) {
		lengthWords[count].textContent = WORDS[key].length
		count++
	}

	lengthWords = $('#phrases .badge')
	lengthWords[1].textContent = PHRASES_VERBS.length

	let counter = 0
	for (let key in PHRASES) {
		counter += PHRASES[key].length
	}
	lengthWords[0].textContent = counter
}

// @

let arrForDownload = []
$('#field').on('pointerup', (evt) => {

	if (evt.target.dataset.word) {
		let el = evt.target.dataset.word.split('id-')[1]
		console.log(el)
		if (!arrForDownload.includes(currentArr[el])) {
			arrForDownload.push(currentArr[el])
			$('#link').removeClass('disabled')

			$('#link-count').text(`${arrForDownload.length}`)
		}
		console.log(arrForDownload)
	}
})

// @


// !

let contents
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

			$('#field').text('')
			$('#field').append(`
			<div class="row s-b">
				<div class="col-1">№</div>
				<div class="col-4">EN</div>
				<div class="col-3">TR</div>
				<div class="col-4">RU</div>
			</div>
		`)
			$('#words').trigger('pointerdown', [contents])
		} catch {
			alert('Файл не был распознан как JSON')
			try {
				let newElement = []
				contents = (evt.target.result).split('\n')

				contents = contents.filter(element => element.trim() !== "");

				contents.forEach((el) => {
					newElement.push(el.split(' '))
				})
				console.log(newElement)

				contents = newElement.map(([en, tr, ru]) => ({ en, tr, ru }))

				$('#words').trigger('pointerdown', [contents])

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

$('#link').on('pointerup', (evt) => {
	evt.preventDefault()
	// let jsonData = JSON.stringify(arrForDownload);
	// let blob = new Blob([jsonData], { type: 'application/json' });
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
	$('#link').attr('href', `${url}`)
	$('#link').attr('download', `LearningList.txt`)

})

//-

