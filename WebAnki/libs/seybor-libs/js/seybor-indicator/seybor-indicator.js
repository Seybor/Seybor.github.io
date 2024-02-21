const getIndicators = (element, value = 'top') => {
	let indicator
	let style = document.createElement('style')
	style.innerHTML = `.indicator-top,
	.indicator-bottom {
		position: fixed;
		left: 0;
		z-index: 999999;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
		height: 10px;
		font-size: 10px;
		line-height: 10px;
		transition: all 0.2s linear;
	}
	.indicator-top {
		top: 0;
		background-color: rgba(45, 241, 6, 0.75);
	}
	.indicator-bottom {
		bottom: 0;
		background-color: rgba(241, 6, 6, 0.75);
	}`

	switch (value) {
		case 'top': {
			indicator = `<div class="indicator-top"></div>`
		} break
		case 'bottom': {
			indicator = `<div class="indicator-bottom"></div>`
		} break
		case 'both': {
			indicator = `<div class="indicator-top"></div><div class="indicator-bottom"></div>`
		} break
		default: {
			indicator = `<div class="indicator-top"></div>`
		}
	}
	s('head').insertAdjacentElement('beforeend', style);
	element.insertAdjacentHTML('beforeend', indicator);

	window.addEventListener('scroll', function () {
		const clientHeight = document.documentElement.clientHeight
		const elementHeight = element.clientHeight
		const scrolling = document.documentElement.scrollTop
		const residueStart = elementHeight - clientHeight

		let scrollBottom = elementHeight - clientHeight - scrolling
		let residueTop = ((scrolling / residueStart) * 100).toFixed(2)
		let residueBottom = ((scrollBottom / residueStart) * 100).toFixed(2)

		if (s('.indicator-top')) {
			s('.indicator-top').style.setProperty('width', `${residueTop}%`)
			residueTop === '0.00' ? s('.indicator-top').textContent = '' : s('.indicator-top').textContent = `${residueTop}%`

		}
		if (s('.indicator-bottom')) {
			s('.indicator-bottom').style.setProperty('width', `${residueBottom}%`)
			residueBottom === '0.00' ? s('.indicator-bottom').textContent = '' : s('.indicator-bottom').textContent = `${residueBottom}%`
		}

	});
}
