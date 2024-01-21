'use strict';

// $('body').hide()

import { ALL_ARR } from './ARR/ALL-WORDS.js';
import { ALL_PHRASES_VERBS } from './ARR/ALL-PHRASES-VERBS.js';
import { ALL_PHRASES } from './ARR/ALL-PHRASES.js';
import { renderWords, renderPhrases, contents, currentArr } from './renderAll.js';

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


$('#words').on('pointerdown', (evt, value) => {
	evt.preventDefault()

	if ((evt.target.dataset.name) || (value)) {

		if (value) {
			if (typeof value === 'string') {
				renderWords(value, ALL_ARR)
			} else {
				renderWords(value, '', true, true)
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
			renderWords(evt.target.dataset.name, ALL_ARR, true)
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

				if (contents[0].split(' ').length === 1) {
					throw new Error('Мда')
				}

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
	arrForDownload.forEach((el) => {
		if (el['tr']) {
			finalResult += `${el['en']} ${el['tr']} ${el['ru']}\n`
		} else {
			finalResult += `${el['en']} ${el['ru']}\n`
		}

	})

	//! Скачать весь массив
	// for (const key in ALL_ARR) {

	// 	const arr = ALL_ARR[key];
	// 	arr.forEach((el) => {
	// 		finalResult += `${el['en']} ${el['tr']} ${el['ru']}\n`
	// 	});

	// }

	let blob = new Blob([finalResult], { type: 'text/plain' });


	let url = URL.createObjectURL(blob);
	console.log(url)

	$('#link').attr('href', `${url}`)
	$('#link').attr('download', 'data.txt')
})

//-