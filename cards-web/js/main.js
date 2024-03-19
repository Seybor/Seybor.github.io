import R_A2 from '../data/R_A2.js';

const s = (e) => document.querySelector(e);
const all = (e) => document.querySelectorAll(e);

let i = 0;
function renderCard(el) {
	let content = `<div class="front flex-centering">
	<p class='regular mt-auto'>
		${el.ru}
	</p>
	<div class="divider"></div>
	<p class='small'>
	${el.ru_example}
	</p>
	<p class='small count'>
	${i + 1}/${R_A2.length}
	</p>
	</div>
	<div class="back flex-centering">
	<p class='regular mt-auto'>
	${el.en}
	</p>
	<p class='regular'>
	${el.tr}
	</p>
	<div class="divider"></div>
	<p class='small'>
	${el.en_example}
	</p>
	<p class='small count'>
	${i + 1}/${R_A2.length}
	</p>
	</div>`;

	s('.card').textContent = '';
	s('.card').insertAdjacentHTML('beforeend', content);
}

renderCard(R_A2[0]);


all('.btn').forEach((el, id) => {
	el.addEventListener('click', (evt) => {
		let data = el.getAttribute('data-value');

		data === 'answer'
			? s('.card').classList.toggle('card--active')
			: (
				s('.card').classList.remove('card--active'),
				data === 'prev'
					? (i--, !!R_A2[i] ? renderCard(R_A2[i]) : (i = R_A2.length - 1, renderCard(R_A2[i])))
					: (i++, !!R_A2[i] ? renderCard(R_A2[i]) : (i = 0, renderCard(R_A2[i])))
			)
	});
});
