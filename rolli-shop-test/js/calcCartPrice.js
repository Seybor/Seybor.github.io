function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');
	const deliveryPrompt = document.querySelector('.delivery-prompt')

	// Общая стоимость товаров
	let priceTotal = 0;

	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Находим количество товара
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});


	// Скрываем / Показываем блок со стоимостью доставки
	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	// Указываем стоимость доставки
	if (priceTotal >= 600) {
		deliveryCost.classList.add('free');
		deliveryPrompt.classList.add('none')
		deliveryCost.innerText = 'бесплатно';

		totalPriceEl.innerText = priceTotal;
	} else if (priceTotal > 0) {
		deliveryCost.classList.remove('free');
		deliveryPrompt.classList.remove('none')
		deliveryCost.innerText = '250 ₽';

		totalPriceEl.innerText = priceTotal + 250;
	} else {
		totalPriceEl.innerText = 0;
	}

}