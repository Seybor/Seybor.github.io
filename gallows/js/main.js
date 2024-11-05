import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

const WORDS = [
	'машина',
	'собака',
	'компьютер',
	'программа',
	'море',
	'кошка',
	'школа',
	'книга',
	'домик',
	'солнце',
	'лесник',
	'волосы',
	'кровать',
	'музыка',
]

let word = ''
let count = 0
let attempt = 0
let charArr = []

function onDocumentClick(evt) {

	let char = evt.key.toLowerCase()

	if (char.length > 1) {
		return
	} else if (char - char === 0) {
		return
	}
	if (charArr.includes(char)) {
		return
	}

	const isCyrillic = /[А-Яа-яЁё]/.test(char);

	if (!isCyrillic) {
		alert('Английская раскладка активна');
		return
	}

	charArr.push(char)

	word.forEach((e, id) => {
		if (char === e) {
			text('.char[data-id="' + id + '"]', e)
			count++
		}
	})

	if (!word.includes(char)) {
		attempt--
		text('.attempt span', attempt)
		insert('.mistake', '<span>' + char + '</span>')

		if (attempt <= 0) {
			document.removeEventListener('keyup', onDocumentClick)
			setTimeout(() => {
				alert('Вы проиграли! Загаданное слово было: ' + word.join(''))
			}, 1)
		}
	}

	if (count === word.length) {
		document.removeEventListener('keyup', onDocumentClick)
		setTimeout(() => {
			alert('Вы выиграли!')
		}, 1)
	}
}

evt('.game', 'click', () => {
	word = WORDS[Math.floor(Math.random() * WORDS.length)].split('')
	attempt = word.length
	charArr = []
	count = 0
	text('.content', '')
	text('.attempt span', attempt)
	text('.mistake', '')

	word.forEach((e, id) => {
		let char = '<div class="char" data-char="' + e + '" data-id="' + id + '"> _ </div>'

		insert('.content', char)
	})

	document.removeEventListener('keyup', onDocumentClick)
	document.addEventListener('keyup', onDocumentClick)
})