// getProducts();

// $('body').hide()



const s = (element) => {
	return document.querySelector(element)
}
const all = (element) => {
	return document.querySelectorAll(element)
}
const toggleCatalog = (item) => {
	item.forEach((el, id) => {
		el.addEventListener('click', (evt) => {
			evt.preventDefault()

			let wrapper = evt.target.closest('.catalog-item__wrapper')

			wrapper.querySelector('.catalog-item__content').classList.toggle('catalog-item__content--active')
			wrapper.querySelector('.catalog-item__list').classList.toggle('catalog-item__list--active')

		})

	})
}

const renderStart = () => {

	const productsFitness = document.querySelector('.catalog__content[data-catalog="fitness"]');
	const productsJogging = document.querySelector('.catalog__content[data-catalog="jogging"]');
	const productsTriathlon = document.querySelector('.catalog__content[data-catalog="triathlon"]');
	let productsArray

	async function getProducts() {

		const response = await fetch('./json/products.json');

		console.log(response)

		productsArray = await response.json();

		console.log(productsArray)

		renderProducts(productsArray);
		toggleCatalog(all('.catalog .catalog-item__link'))
		toggleCatalog(all('.catalog .catalog-item__list-link'))

	}

	getProducts();


	let counter = 0
	let currentCounter = 0
	function renderProducts(productsArray) {
		let value = productsArray.length - currentCounter - 6
		value > 0 ? value : value = 0
		let showWore = `<div class='show-more'><button class="show-more__btn">Показать ещё: ${value}</button></div>`

		for (let i = currentCounter; i < productsArray.length; i++) {
			let item = productsArray[i]
			if ((counter > 0) && (counter % 6 === 0)) {
				productsFitness.insertAdjacentHTML('beforeend', showWore);
				insertShowWore()

				counter = 0
				break
			}
			counter++
			currentCounter++
			const productHTML = `<div class="catalog-item" data-id="item-${item.id}">
			<div class="catalog-item__container">
				<div class="catalog-item__wrapper">
					<div class="catalog-item__content catalog-item__content--active">
						<img class="catalog-item__img" src="img/catalog/${item.img}" alt="${item.img}" loading="lazy"
							width="140" height="200">
						<div class="catalog-item__subtitle">${item.title}</div>
						<div class="catalog-item__descr">${item.descr}
						</div>
						<a class="catalog-item__link" href="#">ПОДРОБНЕЕ</a>
					</div>
					<ul class="catalog-item__list">
						${item.li}
						<li class="catalog-item__list-li"><a class="catalog-item__list-link" href="#">назад</a></li>
					</ul>
				</div>
				<hr>
	
				<div class="catalog-item__footer">
					<div class="catalog-item__prices">
						<div class="catalog-item__old-price">
							${item.oldPrice} руб.
						</div>
						<div class="catalog-item__new-price">
						${item.newPrice} руб.
						</div>
					</div>
					<button class="catalog-item__btn btn">
						КУПИТЬ
					</button>
				</div>
			</div>
	
		</div>`;


			productsFitness.insertAdjacentHTML('beforeend', productHTML);

			function insertShowWore() {
				if (s('.show-more')) {
					s('.show-more').addEventListener('click', (evt) => {
						s('.show-more').remove()
						renderProducts(productsArray)
					})
				}
			}

		}

		all('.catalog-item__btn').forEach((el, id) => {
			el.addEventListener('click', (evt) => {
				s('#order .modal__subtitle').textContent =
					el.closest('.catalog-item__container')
						.querySelector('.catalog-item__subtitle')
						.textContent
						.toString()
						.trim()

				s('.overlay').style.display = 'block'
				s('#order').style.display = 'block'
				s('#order').focus()
			})
		})
	}



}

renderStart()


// ! Плавная прокрутка до каталога
s('.header-bottom__link-start').addEventListener('click', (evt) => {
	evt.preventDefault();

	document.querySelector(s('.header-bottom__link-start').getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	});
})

// ! Слайдер
const container = document.getElementById("slider-main");
const options = {
	infinite: true,
};

new Carousel(container, options);


// ! Табы
s('.catalog__tabs').addEventListener('click', (evt) => {
	if ((evt.target.closest('li')) && (evt.target.closest('li').dataset.catalog)) {

		if (s('.catalog__tab--active').dataset.catalog === evt.target.closest('li').dataset.catalog) {
			return
		} else {
			s(`.catalog__content[data-catalog="${s('.catalog__tab--active').dataset.catalog}"]`)
				.classList.remove('catalog__content--active')
			s('.catalog__tab--active').classList.remove('catalog__tab--active')


			evt.target.closest('li').classList.add('catalog__tab--active')
			s(`.catalog__content[data-catalog="${s('.catalog__tab--active').dataset.catalog}"]`)
				.classList.add('catalog__content--active')
		}
	}

})

// ! Модальные окна

all('[data-modal="consultation"]').forEach((el, id) => {
	el.addEventListener('click', (evt) => {
		s('.overlay').style.display = 'block'
		s('#consultation').style.display = 'block'
		s('#consultation').focus()
	})
})

const closeModal = (el) => {
	s('.overlay').style.display = 'none'
	el.style.display = 'none'
}

all('.modal__close').forEach((el, id) => {
	el.addEventListener('click', (evt) => {
		closeModal(el.closest('.modal'))
	})
	el.addEventListener('keydown', (evt) => {
		if (evt.keyCode === 13 || evt.keyCode === 27) {
			closeModal(el.closest('.modal'))
		}
	})
})


all('.modal').forEach((el) => {
	el.addEventListener('keydown', (evt) => {
		if (evt.keyCode === 27) {
			closeModal(el)
		}
	})
})

window.addEventListener('resize', (evt) => {
	if (window.innerHeight < 600) {
		s('.overlay').style.position = 'absolute'
	}
})

// ! валидация формы

function validateForm(form) {
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			phone: 'required',
			email: {
				required: true,
				email: true
			}
		},

		messages: {
			name: {
				required: "Пожалуйста, введите своё имя",
				minlength: jQuery.validator.format("Введите {0} символа!")
			},
			phone: "Пожалуйста, введите свой номер телефона",
			email: {
				required: "Пожалуйста, введите свою почту",
				email: "Введите email в формате name@domain.com"
			}
		}
	});
}

validateForm(('.consultation .form'))

validateForm(('#consultation .form'))
validateForm(('#order .form'))

// - маска для телефона в форме
// - У тегов input нужно убрать type='number' так как плагин не работает с ним
$('input[name="phone"]').mask("+7 (999) 999-99-99")

// - плагин с php mailer

// $('.form').sumbit(function (evt) {
// 	evt.preventDefault();

// 	if (!$(this).valid()) {
// 		return;
// 	}

// 	$.ajax({
// 		type: "POST",
// 		url: "libs/phpPlugins/mailer/smart.php",
// 		data: $(this).serialize()
// 	}).done(function () {
// 		$(this).find("input").val('');


// 		$('.form').trigger('reset');

// 	});

// 	return false;
// })



// ! Плавная прокрутка до начала страницы

// window.getComputedStyle(s('.page-up')).getPropertyValue('opacity')

window.addEventListener('scroll', (evt) => {
	if (document.documentElement.scrollTop >= 1600) {
		s('.page-up').style.display = 'block'
	} else {
		s('.page-up').style.display = 'none'

	}
})



s('.page-up').addEventListener('click', (evt) => {
	evt.preventDefault();

	document.querySelector(s('.page-up').getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	});
})