import { WORDS } from './ARR/WORDS.js';
import { PHRASES } from './ARR/PHRASES.js';
import { PHRASES_VERBS } from './ARR/PHRASES-VERBS.js';
import { renderWords, renderPhrases, renderSearch, currentArr } from './renderAll.js';
import { renderTest } from './renderTest.js';

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

$('#test').click((evt) => {
	if (evt.target.dataset.name) {
		let arr
		switch (evt.target.dataset.name) {
			case 'noun': {
				arr = WORDS['NOUN']
			} break
			case 'r-verb': {
				arr = WORDS['REGULAR_VERBS']
			} break
			case 'ir-verb': {
				arr = WORDS['IRREGULAR_VERBS']
			} break
			case 'adjective': {
				arr = WORDS['ADJECTIVE']
			} break
			case 'adverbs': {
				arr = WORDS['ADVERBS']
			} break
			default: {
				alert(`Массив не найден`)
				return
			}
		}

		renderTest(arr)
	}
})

$('#words').on('pointerdown', (evt, value) => {
	evt.preventDefault()

	if ((evt.target.dataset.name) || (value)) {

		if (value) {
			if (typeof value === 'string') {
				renderWords(value, WORDS)
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
			renderWords(evt.target.dataset.name, WORDS, true)
		}

	}
})

$('#phrases').on('pointerdown', (evt, value) => {
	evt.preventDefault()

	if ((evt.target.dataset.name) || (value)) {

		if (value) {

			renderPhrases(value, [PHRASES, PHRASES_VERBS])

		} else {

			$('#field').text('')
			$('#field').append(`
				<div class="row s-b">
					<div class="col-1">№</div>
					<div class="col-4">EN</div>
					<div class="col-7">RU</div>
				</div>
			`)
			renderPhrases(evt.target.dataset.name, [PHRASES, PHRASES_VERBS], true)
		}


	}
})

$('#input-search').on('dblclick', () => {
	$('#input-search').val('')
})

$('#search').on('submit', (evt) => {
	evt.preventDefault()
	let value = $('#input-search').val().trim().toLowerCase()

	console.log(renderSearch(value, WORDS))

})
