import ALL_PH from "./data/ph-all.js"


$.each($('.header-item'), function (id, el) {
	$(el).click(function (evt) {

		$('#content').empty()

		$('.header-item').removeClass('header-item--active')
		$(this).addClass('header-item--active')

		ALL_PH[$(this).attr('data-type')].forEach((el, id) => {
			let str = `<p data-id="${id + 1}">`
			el.forEach(els => {
				str += `<span>${els}</span>`
			})
			str += '</p>'

			$('#content').append(str);

		})

	})
})

