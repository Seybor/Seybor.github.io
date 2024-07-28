import ALL from "./data/all.js"

let sum = 0
Object.entries(ALL).forEach(e =>
	sum += e[1].length
)
console.log(sum)

$('.header__sum').text(sum)


$.each($('.header-item'), function (id, el) {
	$(el).click(function (evt) {

		$('#content').empty()

		$('.header-item').removeClass('header-item--active')
		$(this).addClass('header-item--active')

		ALL[$(this).attr('data-type')].forEach((el, id) => {
			let str = `<p data-id="${id + 1}">`
			el.forEach((els, id) => {

				if (id > 1) {
					str += `<span style='font-size:0.9rem;'>${els}</span>`
				} else {
					str += `<span style='font-size:1rem;'>${els}</span>`
				}


			})
			str += '</p>'

			$('#content').append(str);

		})

	})
})

