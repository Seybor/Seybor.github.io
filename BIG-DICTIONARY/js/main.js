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
			'transform': 'rotate(-180deg)',
		})
	}
})
let more
const renderWords = (arr) => {
	let newElement
	for (let i = 0; i < 101; i++) {
		setTimeout(function run() {

			if (i < 100) {
				newElement = $(`
				<div class="row">
					<div class="col-4">${ALL_ARR.NOUN[i].en}</div>
					<div class="col-4">${ALL_ARR.NOUN[i].tr}</div>
					<div class="col-4">${ALL_ARR.NOUN[i].ru}</div>
				</div>`);
				$('#field').append(newElement);
			} else {
				newElement = $(`
				<div class="row">
					<div class="col-12">
						<button class="btn" id="more">ЕЩЁ</button>
					</div>
				</div>`);
				$('#field').append(newElement);


				$('#more').on('pointerdown', (evt) => {
					$('#choice').trigger('pointerdown', ['noun'])
				})

			}
		}, 10 * i);
	}
	console.log(ALL_ARR.NOUN.length)
}


$('#choice').on('pointerdown', (evt, value) => {
	evt.preventDefault()

	if ((evt.target.dataset.name) || (value)) {
		if (value) {
			evt.target.dataset.name = value
		}

		if (evt.target.dataset.name === 'noun') {
			renderWords(evt.target.dataset.name)
		}
	}
})

$('.one').on('pointerdown', (evt) => {
	$('#choice').trigger('pointerdown', ['noun'])
})

