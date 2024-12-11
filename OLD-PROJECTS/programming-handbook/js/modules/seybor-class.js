// v 2.0.0.031220240000
class S {
	constructor(e) {
		this.e = document.querySelectorAll(e)
	}

	static setSourceLink(text = 'Источник:', isCopy = true) {
		document.addEventListener('copy', (evt) => {
			evt.preventDefault();
			let copiedContent
			if (isCopy) {
				let copiedText = window.getSelection().toString();
				copiedContent = copiedText + '\n\n' + text;
			} else {
				copiedContent = text
			}

			evt.clipboardData.setData('text/plain', copiedContent);
		});
	}

	static find(e) {
		return document.querySelector(e)
	}

	static noContextMenu() {
		document.oncontextmenu = () => false
	}

	static startDeveloping() {
		document.body.contentEditable = true
	}


	// - Асинхронный запрос
	static getData(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(response => response.json())
				.then(json => resolve(json))
				.catch(error => reject(error))
		})
	}

	// - Асинхронный post запрос
	// - data - объект с даннымыми для отправки
	static getPostData(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(response => response.json())
				.then(json => resolve(json))
				.catch(error => reject(error))
		})
	}

}

S.prototype.text = function (value) {

	if (!value) return this.e[0].textContent

	this.e.forEach(el => el.textContent = value)

	return this
}

S.prototype.html = function (value) {

	if (!value) return this.e[0].innerHTML

	this.e.forEach(el => el.innerHTML = value)

	return this
}

S.prototype.css = function (props, value) {
	this.e.forEach(el => {

		if (typeof props === 'string' && typeof value === 'string') {
			el.style.setProperty(props, value)
		}
		if (typeof props === 'object') {
			for (let key in props) {
				el.style.setProperty(key, props[key])
			}
		}
	})
	return this
}

S.prototype.attr = function (props, value) {

	this.e.forEach(el => {

		if (typeof props === 'string' && typeof value === 'string') {
			el.setAttribute(props, value)
		}
		if (typeof props === 'object') {
			for (let key in props) {
				el.setAttribute(key, props[key])
			}
		}
	})

	return this

}

S.prototype.insert = function (value, where = 'beforeend') {

	this.e.forEach(el => el.insertAdjacentHTML(where, value))

	return this
}

S.prototype.evt = function (event, callback) {
	this.e.forEach(el => el.addEventListener(event, callback))

	return this
}

S.prototype.each = function (callback) {
	this.e.forEach(callback)

	return this
}

S.prototype.class = function (type, value) {
	this.e.forEach((el) => {

		if (typeof value === 'string') {
			el.classList[type](value)
		}

		if (typeof value === 'object') {
			for (let key in value) {
				el.classList[type](value[key])
			}
		}


	})

	return this
}

S.prototype.wrap = function (wrapper, className) {
	this.e.forEach(el => {
		const wrapperElement = document.createElement(wrapper);
		if (className) {
			wrapperElement.classList.add(className);
		}

		el.parentNode.insertBefore(wrapperElement, el)
		wrapperElement.append(el);

	})

	return this
}

S.prototype.copy = function (elementCopy) {
	this.e.forEach(el => {

		let textCopy
		if (elementCopy) {
			textCopy = document.querySelector(elementCopy).textContent.toString().trim()
		} else {
			textCopy = el.textContent.toString().trim()
		}

		el.addEventListener('click', () => {
			window.navigator.clipboard.writeText(textCopy)
				.then(function () {
					console.log('Текст скопирован в буфер обмена');
				})
				.catch(function (err) {
					console.error('Не удалось скопировать текст: ', err);
				});
		});

	})

	return this
}

S.prototype.hide = function () {
	this.e.forEach((el) => {
		el.style.setProperty('display', 'none')
	})

	return this
}

S.prototype.show = function () {
	this.e.forEach((el) => {
		el.style.removeProperty('display');
	})

	return this
}

S.prototype.toggle = function () {
	this.e.forEach((el) => {
		if (window.getComputedStyle(el).getPropertyValue('display') === 'none') {
			el.style.removeProperty('display');
		} else {
			el.style.setProperty('display', 'none')
		}
	})

	return this
}

S.prototype.drag = function (childElement) {
	this.e.forEach(el => {

		let moveElement

		if (childElement) {
			moveElement = el.querySelector(childElement)
		} else {
			moveElement = el
		}

		el.style.setProperty('touch-action', 'none')
		el.style.setProperty('z-index', '10000')
		el.style.setProperty('min-height', 'auto')

		moveElement.addEventListener('pointerdown', function (evt) {
			evt.preventDefault();

			el.style.position = 'fixed';

			const windowWidth = window.innerWidth
			const windowHeight = window.innerHeight
			const elWidth = el.offsetWidth
			const elHeight = el.offsetHeight

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

				if (windowWidth - elWidth <= el.offsetLeft) {
					el.style.left = windowWidth - elWidth + 'px'
				}

				if (windowHeight - elHeight <= el.offsetTop) {
					el.style.top = windowHeight - elHeight + 'px'
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

	return this
}

// - подсветить весь текст при клике
S.prototype.highlightAll = function (element) {
	this.e.forEach(el => {

		let whatToHighlight
		if (element) {
			whatToHighlight = document.querySelector(element)
		} else {
			whatToHighlight = el
		}

		el.addEventListener('click', () => {
			if (window.getSelection) {
				let range = document.createRange();
				range.selectNodeContents(whatToHighlight);
				let selection = window.getSelection();
				selection.removeAllRanges();
				selection.addRange(range);

			} else if (document.selection) {

				let range = document.body.createTextRange();
				range.moveToElementText(whatToHighlight);
				range.select();

			}
		});

	})

	return this
}

// - вставить выделенное в поле input
S.prototype.pasteSelectionInput = function (elForInput) {

	this.e.forEach(el => {

		let input
		if (elForInput) {
			input = document.querySelector(elForInput)
		} else {
			input = el
		}

		el.addEventListener('mouseup', function () {
			const selectedText = window.getSelection().toString();
			if (selectedText.length < 1) {
				return
			}
			input.value = selectedText;
		});

	})
	return this
}

// - очистить input двойным кликом
S.prototype.eraseInput = function () {
	this.e.forEach(el => {
		el.addEventListener('dblclick', (evt) => {
			evt.currentTarget.value = ''
		})
	})

	return this
}

// - удалить и добавить класс (для анимации)
S.prototype.removeAddClass = function (value) {
	this.e.forEach(el => {
		el.classList.remove(value);
		setTimeout(() => {
			el.classList.add(value)
		}, 0)
	})
	return this
}

// - скачать файл .txt при клике
S.prototype.downloadFile = function (value) {

	this.e.forEach(el => {

		el.addEventListener('click', () => {

			let element = document.createElement('a')
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(value))
			element.setAttribute('download', 'file.txt')
			element.style.display = 'none'
			document.body.append(element)
			element.click()
			element.remove()

		})

	})
	return this
}

S.prototype.getAccordion = function () {

	this.e.forEach(el => {

		el.addEventListener("click", function () {
			this.classList.toggle("accordion--active");
			let panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});


	});
	return this
}

S.prototype.getTabs = function () {

	this.e.forEach(el => {

		el.addEventListener("click", (evt) => {

			document.querySelectorAll(".tabcontent").forEach((element) => {
				element.style.display = "none"
			})

			document.querySelectorAll(".tablinks").forEach((element) => {
				element.classList.remove('tablinks--active')
			})

			document.querySelector(`.tabcontent[data-tab-id="${evt.currentTarget.dataset.tabBtnId}"]`).style.display = "block";
			evt.currentTarget.classList.add('tablinks--active')

		})

	})
	return this
}

S.prototype.getSlider = function () {

	this.e.forEach(el => {

		let slideIndex = 1;
		showSlides(slideIndex);
		function plusSlides() {
			document.querySelectorAll('a[data-slider-btn]').forEach(el => {
				el.addEventListener('click', () => {
					showSlides(slideIndex += +el.dataset.sliderBtn);
				})

			})
		}

		function currentSlide() {
			document.querySelectorAll('.dot[data-dot]').forEach(el => {
				el.addEventListener('click', () => {
					showSlides(slideIndex = +el.dataset.dot);
				})

			})

		}
		plusSlides()
		currentSlide()

		function showSlides(n) {
			let slides = document.querySelectorAll(".mySlides");
			let dots = document.querySelectorAll(".dot");
			if (n > slides.length) { slideIndex = 1 }
			if (n < 1) { slideIndex = slides.length }

			slides.forEach(element => {
				element.style.display = "none";
			})

			dots.forEach(element => {
				element.classList.remove("active");
			})

			slides[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].classList.add("active")
		}

	})

	return this
}

S.prototype.getImgModal = function () {
	this.e.forEach(el => {

		let modal = el.querySelector(".modal");

		let img = el.querySelectorAll(".thumbnail");
		let modalImg = el.querySelector(".modal-content");
		let captionText = el.querySelector(".caption");

		img.forEach(element => {
			element.onclick = function () {
				modal.style.display = "block";
				modalImg.src = this.src;
				captionText.innerHTML = this.alt;
			}
		})

		let span = el.querySelector(".close");

		span.onclick = function () {
			modal.style.display = "none";
		}

	})

	return this
}

const $ = (e) => new S(e)

export {
	S,
	$
}