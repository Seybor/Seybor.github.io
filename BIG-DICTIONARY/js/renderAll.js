let max = 100

export let contents
export let currentArr
export let counter = 0

export const renderWords = (arr, arrWords, remove = false, fromfile = false) => {
	let newElement
	let target

	if (remove) {
		counter = 0
	}

	if (!fromfile) {
		target = arr
		switch (arr) {
			case 'noun': {
				arr = arrWords['NOUN']
			} break
			case 'r-verb': {
				arr = arrWords['REGULAR_VERBS']
			} break
			case 'ir-verb': {
				arr = arrWords['IRREGULAR_VERBS']
			} break
			case 'adjective': {
				arr = arrWords['ADJECTIVE']
			} break
			case 'adverbs': {
				arr = arrWords['ADVERBS']
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
		console.log(counter)
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
					$('#words').trigger('pointerdown', [evt.target.dataset.arr])
				} else {
					$('#words').trigger('pointerdown', [contents])
				}
			}
		})

	} else {
		$('#more').remove()
		counter = 0
	}

}

export const renderPhrases = (arr, arrPhrases, remove = false) => {
	let newElement
	let target

	if (remove) {
		counter = 0
	}

	target = arr
	switch (arr) {
		case 'phrases': {
			arr = arrPhrases[0]
		} break
		case 'phases-verbs': {
			arr = arrPhrases[1]
		} break
		default: {
			alert(`Массив не найден`)
			return
		}
	}
	currentArr = arr

	$('#main').attr('data-current-arr', `${target}`)

	for (let i = 0; i < max; i++) {
		if (counter < arr.length) {
			newElement = $(`
				<div class="row">
					<div class="col-1">${counter + 1}</div>
					<div class="col-4" data-word="id-${counter}">${arr[counter]['en']}</div>
					<div class="col-7">${arr[counter]['ru']}</div>
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
				$('#phrases').trigger('pointerdown', [evt.target.dataset.arr])
			}
		})

	} else {
		$('#more').remove()
		counter = 0
	}

}
