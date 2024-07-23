// let s = $.noConflict()

let el = []
const arrays = ['Добро пожаловать на мой сайт!', 'Я Александр - фронтенд-разработчик', 'Посмотрите мои работы']


let start = false
$(document).click((evt) => {
	if (start) {
		return
	}

	start = true

	let i = 0
	let j = 0
	let str = ''


	el = arrays[j]
	let time = Math.round(2000 / arrays[j].length)

	console.log(time)

	function type() {

		if (!arrays[j]) {
			console.log('конец')
			$('#test').html('Посмотрите мои работы')
			clearInterval(int)
			return
		}
		if (!el[i]) {
			clearInterval(int)
			str = el
			i = 0
			time = Math.round(1000 / arrays[j].length)
			int = setInterval(wipe, time)
			return
		}
		str += el[i]
		$('#test').html(str + (i % 2 === 0 ? '<span class="test__span">|</span>' : ''))
		i++
	}

	function wipe() {
		if (el.length === 0) {
			j++
			el = arrays[j]
			$('#test').html('')
			clearInterval(int)

			if (arrays[j]) {
				time = Math.round(2000 / arrays[j].length)
			}


			int = setInterval(type, time)
			return
		}
		el = el.split('')
		el.pop()
		el = el.join('')
		str = el
		$('#test').html(str + (i % 2 === 0 ? '<span class="test__span">|</span>' : ''))
	}

	let int = setInterval(type, time)

})