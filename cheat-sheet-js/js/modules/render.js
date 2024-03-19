import { s, all } from "./base.js"
import ARR from "./obj.js"

const renderEl = () => {
	s('.hints__items').textContent = ''

	ARR.forEach((el, id) => {
		let counter = 0

		el.content.forEach((elContent) => {
			counter += elContent.value.length
		})

		let template =
			`<div class="hints__item hints-item" data-index=${id}>
				<h3 class="hints-item__title">${el.title}<span>${counter}</span></h3>
				<div class="hints-item__content hints-content"></div>
		</div>`

		s('.hints__items').insertAdjacentHTML('beforeend', template);

		el.content.forEach((elContent, index) => {
			let content =
				`<div class="hints-content__item" data-index-item="${index}">
						<h4 class="hints-content__title">${elContent.title}</h4>
				</div>`

			s(`.hints-item[data-index="${id}"] .hints-content`).insertAdjacentHTML('beforeend', content);

			elContent.value.forEach((elContentValue) => {
				let value = `
			<div class="hints-content__value">
						<p class="hints-content__value-name">${elContentValue[0]}</p>
						<p class="hints-content__value-desc">${elContentValue[1]}</p>
			</div>
			`

				s(`.hints-item[data-index="${id}"] .hints-content__item[data-index-item="${index}"]`).insertAdjacentHTML('beforeend', value);
			})

		})

	})
}

export default renderEl