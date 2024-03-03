// - utilities

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

// ! utilities end

// - drag

const dragOne = (dragElement) => {
	dragElement.style.setProperty('touch-action', 'none')
	dragElement.style.setProperty('z-index', '10000')
	dragElement.style.setProperty('min-height', 'auto')

	dragElement.addEventListener('pointerdown', function (evt) {
		evt.preventDefault();

		dragElement.style.position = 'fixed';

		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight
		const dragElementWidth = dragElement.offsetWidth
		const dragElementHeight = dragElement.offsetHeight

		let startCoords = {
			x: evt.clientX,
			y: evt.clientY,
		};

		let dragged = false;
		let onMouseMove = function (moveEvt) {
			moveEvt.preventDefault();
			dragged = true;

			let shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY,
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY,
			};

			if (shift.y < 0) {
				shift.y
			}

			if (dragElement.offsetLeft < 0) {
				dragElement.style.left = '0px'
			} else {
				dragElement.style.left = dragElement.offsetLeft - shift.x + 'px';
			}

			if (dragElement.offsetTop < 0) {
				dragElement.style.top = '0px'
			} else {
				dragElement.style.top = dragElement.offsetTop - shift.y + 'px';
			}

			if (windowWidth - dragElementWidth <= dragElement.offsetLeft) {
				dragElement.style.left = windowWidth - dragElementWidth + 'px'
			}

			if (windowHeight - dragElementHeight <= dragElement.offsetTop) {
				dragElement.style.top = windowHeight - dragElementHeight + 'px'
			}
		};

		let onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('pointermove', onMouseMove);
			document.removeEventListener('pointerup', onMouseUp);

			if (dragged) {
				let onClickPreventDefault = function (evt) {
					evt.preventDefault();
					dragElement.removeEventListener('click', onClickPreventDefault);
				};
				dragElement.addEventListener('click', onClickPreventDefault);
			}

		};

		document.addEventListener('pointermove', onMouseMove);
		document.addEventListener('pointerup', onMouseUp);
	});
}

const dragTwo = (dragElement, parentElemenet) => {
	dragElement.style.setProperty('touch-action', 'none')
	dragElement.style.setProperty('z-index', '1000')
	dragElement.style.setProperty('min-height', 'auto')

	dragElement.addEventListener('pointerdown', function (evt) {
		evt.preventDefault();

		parentElemenet.style.setProperty('position', 'fixed')
		parentElemenet.style.setProperty('z-index', '10000')

		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight
		const parentElementWidth = parentElemenet.offsetWidth
		const parentElementHeight = parentElemenet.offsetHeight

		let startCoords = {
			x: evt.clientX,
			y: evt.clientY,
		};

		let dragged = false;
		let onMouseMove = function (moveEvt) {
			moveEvt.preventDefault();
			dragged = true;

			let shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY,
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY,
			};

			if (shift.y < 0) {
				shift.y
			}

			if (parentElemenet.offsetLeft < 0) {
				parentElemenet.style.left = '0px'
			} else {
				parentElemenet.style.left = parentElemenet.offsetLeft - shift.x + 'px';
			}

			if (parentElemenet.offsetTop < 0) {
				parentElemenet.style.top = '0px'
			} else {
				parentElemenet.style.top = parentElemenet.offsetTop - shift.y + 'px';
			}

			if (windowWidth - parentElementWidth <= parentElemenet.offsetLeft) {
				parentElemenet.style.left = windowWidth - parentElementWidth + 'px'
			}

			if (windowHeight - parentElementHeight <= parentElemenet.offsetTop) {
				parentElemenet.style.top = windowHeight - parentElementHeight + 'px'
			}
		};

		let onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('pointermove', onMouseMove);
			document.removeEventListener('pointerup', onMouseUp);

			if (dragged) {
				let onClickPreventDefault = function (evt) {
					evt.preventDefault();
					parentElemenet.removeEventListener('click', onClickPreventDefault);
				};
				parentElemenet.addEventListener('click', onClickPreventDefault);
			}

		};

		document.addEventListener('pointermove', onMouseMove);
		document.addEventListener('pointerup', onMouseUp);
	});
}

const dragAll = (elements) => {
	elements.forEach((el, id) => {
		el.style.setProperty('touch-action', 'none')
		el.style.setProperty('z-index', '10000')

		el.addEventListener('pointerdown', function (evt) {
			evt.preventDefault();

			el.style.position = 'fixed';

			const windowWidth = window.innerWidth
			const windowHeight = window.innerHeight
			const timerWidth = el.offsetWidth
			const timerHeight = el.offsetHeight

			let startCoords = {
				x: evt.clientX,
				y: evt.clientY,
			};

			let dragged = false;
			let onMouseMove = function (moveEvt) {
				moveEvt.preventDefault();
				dragged = true;

				let shift = {
					x: startCoords.x - moveEvt.clientX,
					y: startCoords.y - moveEvt.clientY,
				};

				startCoords = {
					x: moveEvt.clientX,
					y: moveEvt.clientY,
				};

				if (shift.y < 0) {
					shift.y
				}

				if (el.offsetLeft < 0) {
					el.style.left = '0px'
				} else {
					el.style.left = el.offsetLeft - shift.x + 'px';
				}

				if (el.offsetTop < 0) {
					el.style.top = '0px'
				} else {
					el.style.top = el.offsetTop - shift.y + 'px';
				}

				if (windowWidth - timerWidth <= el.offsetLeft) {
					el.style.left = windowWidth - timerWidth + 'px'
				}

				if (windowHeight - timerHeight <= el.offsetTop) {
					el.style.top = windowHeight - timerHeight + 'px'
				}
			};

			let onMouseUp = function (upEvt) {
				upEvt.preventDefault();

				document.removeEventListener('pointermove', onMouseMove);
				document.removeEventListener('pointerup', onMouseUp);

				if (dragged) {
					let onClickPreventDefault = function (evt) {
						evt.preventDefault();
						el.removeEventListener('click', onClickPreventDefault);
					};
					el.addEventListener('click', onClickPreventDefault);
				}

			};

			document.addEventListener('pointermove', onMouseMove);
			document.addEventListener('pointerup', onMouseUp);
		});
	})
}

// ! drag end

// - node

const shuffleArr = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
};

const truncateString = (str, maxlength = 20) => {
	if (str.length > maxlength) {
		return str.slice(0, maxlength);
	}
	return str;
};

const areArraysEqual = (firstArray, secondArray) => {
	if (
		firstArray.length === secondArray.length &&
		firstArray.every((element, index) => element === secondArray[index])
	) {
		return true
	}
	return false
};

const uniqueArr = (arr) => {
	return Array.from(new Set(arr));
};

const extractNumber = (str = '') => {
	const pattern = /\d+/g;
	console.log(str.match(pattern))
	return +str.match(pattern).join('');
};

const randomNumber = (min = 1, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateRandomNumbers = (min = 1, max = 10, count = 5) => {
	if (max - min + 1 < count) {
		throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
	}

	const numbers = [];
	while (numbers.length < count) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		if (!numbers.includes(randomNumber)) {
			numbers.push(randomNumber);
		}
	}
	return numbers;
};

const createDocument = (value, filename = 'result.json') => {

	if ((!filename.endsWith('txt')) && (!filename.endsWith('json'))) {
		filename += '.json';
	}

	const fs = require('fs');
	const result = JSON.stringify(value);

	console.log(filename)
	fs.writeFileSync(`${filename}`, result);
}

// ! node end