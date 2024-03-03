const s = (element) => {
	return document.querySelector(element)
}
const all = (element) => {
	return document.querySelectorAll(element)
}

const burger = () => {
	s('.burger').addEventListener('click', (evt) => {
		s('.burger').classList.toggle('burger--active')
		s('.should-hidden').classList.toggle('should-hidden--active')
	})
}

const theme = () => {
	s('.header-theme__img').addEventListener('click', (evt) => {

		if (!s('html').dataset.seyborTheme) {
			s('html').dataset.seyborTheme = 'dark'
			s('.header-theme__img').style.setProperty('transform', 'rotateZ(180deg)')
		} else {
			s('html').dataset.seyborTheme === 'light' ? (
				s('html').dataset.seyborTheme = 'dark',
				s('.header-theme__img').style.setProperty('transform', 'rotateZ(180deg)')
			) : (
				s('html').dataset.seyborTheme = 'light',
				s('.header-theme__img').style.setProperty('transform', 'rotateZ(0deg)')
			)
		}

	})

}

const menuToggleAndSmoothScrolling = (elements) => {
	elements.forEach((el) => {
		el.addEventListener('click', (evt) => {
			let path = (window.location.pathname).slice(1)
			let link = el.getAttribute('href')
			if (path === link) {
				evt.preventDefault();
				return
			}

			if (window.innerWidth <= 960) {
				s('.burger').classList.toggle('burger--active')
				s('.should-hidden').classList.toggle('should-hidden--active')
			}

			if (el.getAttribute('href').length > 1 && el.getAttribute('href').includes('#')) {
				evt.preventDefault();
				document.querySelector(el.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			}
		})
	})
}

const getIndicators = (element) => {
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


const shouldHiddenPosition = (position) => {

	switch (position) {
		case 'left': {
			position = 'translateX(-500%)'
		} break
		case 'right': {
			position = 'translateX(500%)'
		} break
		case 'top': {
			position = 'translateY(-500%)'
		} break
		default: {
			position = 'translateX(-500%)'
		}

	}

	if (window.innerWidth <= 960) {
		s('.should-hidden').style.setProperty('transform', `${position}`)
	}

}

const removeAddClass = (element, value) => {
	element.classList.remove(value);
	const add = () => {
		element.classList.add(value)
	}
	setTimeout(add, 10)
}

const eraseInput = (element) => {
	element.addEventListener('dblclick', (evt) => {
		evt.currentTarget.value = ''
	})
}

const pasteSelectionInput = (element, input) => {
	element.addEventListener('mouseup', function () {
		const selectedText = window.getSelection().toString();

		if (selectedText.length < 1) {
			return
		}
		input.value = selectedText;
	});
}

const highlightAll = (element) => {

	element.addEventListener('click', () => {
		if (window.getSelection) {

			let range = document.createRange();
			range.selectNodeContents(element);
			let selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);

		} else if (document.selection) {

			let range = document.body.createTextRange();
			range.moveToElementText(element);
			range.select();

		}
	});

}

const sourceLink = (text = 'Источник:') => {
	document.addEventListener('copy', (evt) => {
		evt.preventDefault();

		let copiedText = window.getSelection().toString();

		let copiedContent = copiedText + '\n\n' + text;

		evt.clipboardData.setData('text/plain', copiedContent);
	});
}

const copyText = (element, elementCopy) => {

	element.addEventListener('click', () => {
		let textCopy = (elementCopy.textContent).toString().trim()
		window.navigator.clipboard.writeText(textCopy)
			.then(function () {
				console.log('Текст скопирован в буфер обмена');
			})
			.catch(function (err) {
				console.error('Не удалось скопировать текст: ', err);
			});
	});

}

