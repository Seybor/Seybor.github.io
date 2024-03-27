import { s, all } from "./basic.js"

const searchStart = (ALL_ARRAY) => {
	s('.search__input').placeholder = `elements: ${ALL_ARRAY.length}`

	s('.search').addEventListener('submit', (evt) => {
		evt.preventDefault()
		const value = s('.search__input').value.trim().toLowerCase()
		s('.search__input').value = ''

		if (value.length < 2) {
			return
		}

		const arr = []
		s('.elements__items').textContent = ''

		ALL_ARRAY.forEach((el) => {
			if (el.ru.includes(value) || el.en.includes(value)) {
				arr.push(el)
			}
		})

		if (arr.length > 0) {

			arr.forEach((el, id) => {
				const htmlContent = `<div class="elements__item">
	
				<div class="elements__item-content">
					<div class="elements__item-from">${el.from}</div>
					<p data-value="en" style="font-weight: 700;">${el.en}</p>
					<p data-value="tr" style="font-weight: 700;">${el.tr ? el.tr : ''}</p>
					<p data-value="ru" style="font-weight: 700;">${el.ru}</p>
					<p data-value="ru_example">${el.ru_example ? el.ru_example : ''}</p>
					<p data-value="en_example">${el.en_example ? el.en_example : ''}</p>
				</div>
			
			</div>`

				if (id < 20) {
					s('.elements__items').insertAdjacentHTML('beforeend', htmlContent)
				}


			})
		} else {
			s('.elements__items').insertAdjacentHTML('beforeend', 'Ничего не найдено')
		}

		s('.search__input').placeholder = `finded: ${arr.length}`
	})
}

export default searchStart