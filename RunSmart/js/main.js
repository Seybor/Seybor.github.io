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
				setTimeout(insertShowWore, 1300)

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
						${item.newPrice}
						</div>
					</div>
					<button class="catalog-item__btn btn">
						КУПИТЬ
					</button>
				</div>
			</div>
	
		</div>`;


			function insertProducts() {
				productsFitness.insertAdjacentHTML('beforeend', productHTML);
				toggleCatalog(all('.catalog .catalog-item__link'))
				toggleCatalog(all('.catalog .catalog-item__list-link'))
			}
			function insertShowWore() {
				productsFitness.insertAdjacentHTML('beforeend', showWore);

				if (s('.show-more')) {
					s('.show-more').addEventListener('click', (evt) => {
						s('.show-more').remove()
						renderProducts(productsArray)
					})
				}
			}

			setTimeout(insertProducts, 200 * counter)
		}




	}

}

renderStart()

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











