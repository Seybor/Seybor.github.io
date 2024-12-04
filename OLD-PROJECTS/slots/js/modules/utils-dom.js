// ! удалить и добавить класс (для анимации)
const removeAddClass = (element, value) => {
	element.classList.remove(value);
	setTimeout(() => {
		element.classList.add(value)
	}, 0)
}

// ! очистить input двойным кликом
const eraseInput = (element) => {
	element.addEventListener('dblclick', (evt) => {
		evt.currentTarget.value = ''
	})
}

// ! вставить выделенное в другое поле
const pasteSelectionInput = (element, input) => {
	element.addEventListener('mouseup', function () {
		const selectedText = window.getSelection().toString();
		if (selectedText.length < 1) {
			return
		}
		input.value = selectedText;
	});
}

// ! Подсветить весь текст
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

// ! Ссылка на источник
const sourceLink = (text = 'Источник:') => {
	document.addEventListener('copy', (evt) => {
		evt.preventDefault();

		let copiedText = window.getSelection().toString();

		let copiedContent = copiedText + '\n\n' + text;

		evt.clipboardData.setData('text/plain', copiedContent);
	});
}

// ! Скопировать текст
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

// ! обёртка вокруг элемента
const wrapper = (element, wrapper, className) => {
	const wrapperElement = document.createElement(wrapper);

	if (className) {
		wrapperElement.classList.add(className);
	}

	element.parentNode.insertBefore(wrapperElement, element)
	wrapperElement.append(element);
}

// ! Скачать файл .txt
const downloadFile = (value) => {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(value));
	element.setAttribute('download', 'file.txt');
	element.style.display = 'none';
	document.body.append(element);
	element.click();
	element.remove()
}

// ! Перетаскивание элемента
const drag = (dragElement) => {
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

export {
	removeAddClass,
	eraseInput,
	pasteSelectionInput,
	highlightAll,
	sourceLink,
	copyText,
	wrapper,
	downloadFile,
	drag
}