'use strict';

// $('body').hide()

import { ALL_WORDS } from './ARR/ALL-WORDS.js';
import { ALL_PHRASES } from './ARR/ALL-PHRASES.js';
import { ALL_PHRASES_VERBS } from './ARR/ALL-PHRASES-VERBS.js';
import { renderWords, renderPhrases, renderSearch, currentArr } from './renderAll.js';
import { renderTest } from './renderTest.js';

$('#test').click((evt) => {
	if (evt.target.dataset.name) {
		let arr
		switch (evt.target.dataset.name) {
			case 'noun': {
				arr = ALL_WORDS['NOUN']
			} break
			case 'r-verb': {
				arr = ALL_WORDS['REGULAR_VERBS']
			} break
			case 'ir-verb': {
				arr = ALL_WORDS['IRREGULAR_VERBS']
			} break
			case 'adjective': {
				arr = ALL_WORDS['ADJECTIVE']
			} break
			case 'adverbs': {
				arr = ALL_WORDS['ADVERBS']
			} break
			default: {
				alert(`Массив не найден`)
				return
			}
		}

		renderTest(arr)

	}
})

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


let lengthWords = $('#words .badge')
let count = 0
for (let key in ALL_WORDS) {
	lengthWords[count].textContent = ALL_WORDS[key].length
	count++
}

lengthWords = $('#phrases .badge')
lengthWords[0].textContent = ALL_PHRASES.length
lengthWords[1].textContent = ALL_PHRASES_VERBS.length


$('#words').on('pointerdown', (evt, value) => {
	evt.preventDefault()

	if ((evt.target.dataset.name) || (value)) {

		if (value) {
			if (typeof value === 'string') {
				renderWords(value, ALL_WORDS)
			} else {
				renderWords(value, '', true, true, contents)
			}
		} else {
			$('#field').text('')
			$('#field').append(`
				<div class="row s-b">
					<div class="col-1">№</div>
					<div class="col-4">EN</div>
					<div class="col-3">TR</div>
					<div class="col-4">RU</div>
				</div>
			`)
			renderWords(evt.target.dataset.name, ALL_WORDS, true)
		}


	}
})

$('#phrases').on('pointerdown', (evt, value) => {
	evt.preventDefault()

	if ((evt.target.dataset.name) || (value)) {

		if (value) {

			renderPhrases(value, [ALL_PHRASES, ALL_PHRASES_VERBS])

		} else {

			$('#field').text('')
			$('#field').append(`
				<div class="row s-b">
					<div class="col-1">№</div>
					<div class="col-4">EN</div>
					<div class="col-7">RU</div>
				</div>
			`)
			renderPhrases(evt.target.dataset.name, [ALL_PHRASES, ALL_PHRASES_VERBS], true)
		}


	}
})


$('#input-search').on('input', (evt) => {
	let value = (evt.currentTarget.value).trim()
	console.log(value)
})

$('#search').on('submit', (evt) => {
	evt.preventDefault()
	let value = $('#input-search').val()

	console.log(renderSearch(value, ALL_WORDS))

})

// @

let arrForDownload = []
$('#field').on('pointerdown', (evt) => {

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

$('#link').on('pointerdown', (evt) => {
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

	// ! Скачать весь массив

	// for (const key in ALL_WORDS) {
	// 	ALL_WORDS[key].forEach((el, id) => {
	// 		if (id === 0) {
	// 			finalResult += `${key}\n`
	// 		}
	// 		finalResult += `${el['en']} ${el['tr']} ${el['ru']}\n`
	// 	});

	// }

	let blob = new Blob([finalResult], { type: 'text/plain' });
	let url = URL.createObjectURL(blob);
	console.log(url)
	$('#link').attr('href', `${url}`)
	$('#link').attr('download', `LearningList.txt`)

})

//-

