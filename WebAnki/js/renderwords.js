const renderWords = (arr, element) => {
	element.textContent = ''

	arr.forEach((el, id) => {
		let content = `<div class="test-item" data-item-id="${id}">
						<div class="test-item__front">
							<span>${el.ru}</span>
							<hr>
							<span></span>
							<hr>
							<button class="test-item__answer btn">Ответ</button>
						</div>

						<div class="test-item__end">
							<span>${el.en}</span>
							<hr>
							<span>${el.tr}</span>
							<hr>
							<div class="test-item__buttons">
								<button class="test-item__remember btn" data-value="bad">Забыл</button>
								<button class="test-item__back btn">Назад</button>
								<button class="test-item__forgot btn" data-value="good">Помню</button>
							</div>
						</div>
					</div>`;

		element.insertAdjacentHTML('beforeend', content);
	})
}

export default renderWords