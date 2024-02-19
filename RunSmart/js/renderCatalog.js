const renderStart = () => {

	const productsFitness = document.querySelector('.catalog__content[data-catalog="fitness"]');
	const productsJogging = document.querySelector('.catalog__content[data-catalog="jogging"]');
	const productsTriathlon = document.querySelector('.catalog__content[data-catalog="triathlon"]');

	async function getProducts() {

		const response = await fetch('./json/products.json');

		console.log(response)

		const productsArray = await response.json();

		console.log(productsArray)

		renderProducts(productsArray);
	}

	getProducts();

	function renderProducts(productsArray) {
		productsArray.forEach(function (item) {
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
			productsFitness.insertAdjacentHTML('beforeend', productHTML);
		});
	}
}

export default renderStart