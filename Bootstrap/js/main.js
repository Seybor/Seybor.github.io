'use strict';

// $('body').hide()

if ($(window).width() >= 760) {
	$('#footer-links .collapse').addClass('show')
	$('#footer-links .get-show').addClass('visually-hidden')
} else {
	$('#footer-links .collapse').removeClass('show')
	$('#footer-links .get-show').removeClass('visually-hidden')
}

$(window).resize(() => {
	if ($(window).width() >= 760) {
		console.log('да')
		$('#footer-links .collapse').addClass('show')
		$('#footer-links .get-show').addClass('visually-hidden')
	} else {
		$('#footer-links .collapse').removeClass('show')
		$('#footer-links .get-show').removeClass('visually-hidden')
	}
})


$(window).on('scroll', function () {
	if (window.scrollY > 0) {
		$('#header').addClass('opacity-75')
	} else {

		$('#header').removeClass('opacity-75');
	}


	if (window.scrollY > 200) {
		$('#spinner').css({ 'display': 'none' })
	} else {
		$('#spinner').css({ 'display': 'block' })
	}
});


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
	const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
	toastTrigger.addEventListener('click', () => {
		toastBootstrap.show()
	})
}


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

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

const SITE = `https://ya.ru/search/?text=site:https://seybor.github.io/ `;

$('#form-search').submit((evt) => {
	evt.preventDefault()

	let search = $('#input-search').val().trim();

	if (search.length > 0) {
		window.location.href = `${SITE}${search}`;
	}
})

$('#input-search').dblclick((evt) => {
	$('#input-search').val('')
})