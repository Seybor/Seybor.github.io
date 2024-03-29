class Seybor {
	constructor(nodeList) {
		this.nodeList = nodeList;
	}

	attr(name, value) {
		this.nodeList.forEach((el, id) => {
			if (value) {
				el.setAttribute(name, value)
			}
		})
	}

	class(type, value) {
		this.nodeList.forEach((el, id) => {
			el.classList[type](value)
		})
	}

	f(fnc) {
		this.nodeList.forEach(fnc);
	}

	forEach(fnc) {
		this.nodeList.forEach(fnc);
	}
	evt(event, fnc) {
		this.nodeList.forEach((el, id) => {
			el.addEventListener(event, fnc)
		})
	}
	addEventListener(event, fnc) {
		this.nodeList.forEach((el, id) => {
			el.addEventListener(event, fnc)
		})
	}

	css(obj) {
		this.nodeList.forEach((el, id) => {
			for (let key in obj) {
				el.style.setProperty(key, obj[key])
			}
		})
	}

	hide() {
		this.nodeList.forEach((el, id) => {
			el.style.setProperty('display', 'none')
		})
	}

	show() {
		this.nodeList.forEach((el, id) => {
			el.style.removeProperty('display');
		})
	}

	toggle() {
		this.nodeList.forEach((el, id) => {
			if (window.getComputedStyle(el).getPropertyValue('display') === 'none') {
				el.style.removeProperty('display');
			} else {
				el.style.setProperty('display', 'none')
			}
		})
	}


	text(value) {
		let text = []

		this.nodeList.forEach((el, id) => {
			if ((value) || (value === '')) {
				console.log(value)
				el.textContent = value
			}
			text.push(el.textContent)
		})

		return text
	}

	dragStart() {
		this.nodeList.forEach((el, id) => {
			el.style.setProperty('touch-action', 'none')
			el.style.setProperty('z-index', '10000')

			el.addEventListener('pointerdown', function (evt) {
				evt.preventDefault();

				el.style.position = 'fixed';

				const windowWidth = window.innerWidth
				const windowHeight = window.innerHeight
				const timerWidth = el.offsetWidth
				const timerHeight = el.offsetHeight

				// console.log(windowWidth)
				// console.log(windowHeight)

				// console.log(timerWidth)
				// console.log(timerHeight)

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

}

const s = (el) => {
	const nodeList = document.querySelectorAll(el);
	const newElement = new Seybor(nodeList);
	return newElement;
}

const q = (el) => {
	return document.querySelector(el);
}

const a = (el) => {
	return document.querySelectorAll(el);
}

export {
	s,
	q,
	a
}



