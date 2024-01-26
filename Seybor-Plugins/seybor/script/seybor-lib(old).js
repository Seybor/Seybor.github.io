"use strict";
class Seybor {
	constructor(element) {
		this.search = element
		this._ELEMENT = document.querySelectorAll(this.search)

		this.height = []
		this.width = []
		this.startHeight = []
		this.startWidth = []
		this.styles = []

		this._ELEMENT.forEach((el, id) => {
			this.startHeight.push(el.offsetHeight);
			this.startWidth.push(el.offsetWidth);
			this.height.push(el.offsetHeight);
			this.width.push(el.offsetWidth);
			this.styles.push(window.getComputedStyle(el))
		})
	}

	_start(outputFunction, currentMethod) {
		let elFromMethod = document.querySelectorAll(this.search)

		elFromMethod.forEach((el, id) => {

			if (outputFunction) {
				if (typeof outputFunction !== 'function') {
					return
				}
				outputFunction(el, id)
			} else {
				switch (currentMethod) {
					case 'hide': {
						el.style.display = 'none'
					} break
					case 'show': {
						el.style.display = 'block'
					} break
					case 'toggle': {
						if (this.styles[id]['display'] == 'none') {
							el.style.display = 'block'
						} else {
							el.style.display = 'none'
						}
					} break
					default: console.log('Метод не найден')
				}
			}

		})
	}

	attr(name, value) {
		let elFromMethod = document.querySelectorAll(this.search)

		elFromMethod.forEach((el, id) => {
			console.log(el.dataset[name])
			if (value) {
				el.dataset[name] = value
			}
		})
	}

	class(type) {
		let elFromMethod = document.querySelectorAll(this.search)
		let doIt = type.replaceAll(' ', '').split(':')
		console.log(doIt)

		elFromMethod.forEach((el, id) => {
			switch (doIt[0]) {
				case 'add': {
					el.classList.add(doIt[1])
				} break
				case 'remove': {
					el.classList.remove(doIt[1])
				} break
				case 'toggle': {
					el.classList.toggle(doIt[1])
				} break
			}
		})
	}

	css(property) {
		let elFromMethod = document.querySelectorAll(this.search)

		elFromMethod.forEach((el, id) => {
			if (typeof property === 'object') {
				for (let key in property) {
					el.style.setProperty(key, property[key])
				}
			}
		})

	}

	f(fnc) {
		this._start(fnc)
	}

	evt(event, fnc) {
		let elFromMethod = document.querySelectorAll(this.search)

		elFromMethod.forEach((el, id) => {
			el.addEventListener(`${event}`, fnc)
		})

	}

	static() {
		console.log(`elements ${this._ELEMENT.length}`)
		console.log(`startHeight ${this.startHeight}`)
		console.log(`startWidth ${this.startWidth}`)
		console.log(`height ${this.height}`)
		console.log(`width ${this.width}`)
	}

	hide() {
		this._start(false, 'hide')
	}

	show() {
		this._start(false, 'show')
	}

	toggle() {
		this._start(false, 'toggle')
	}

	resize(fnc) {
		window.addEventListener('resize', fnc)
	}

	text(value) {
		let elFromMethod = document.querySelectorAll(this.search)
		let text = []

		elFromMethod.forEach((el, id) => {
			if (!value) {
				text.push(el.textContent)
			} else {
				el.textContent = value
				text.push(el.textContent)
			}
		})
		return text
	}

}

const id = []
export const el = function (el) {

	if (!id.some(item => item.key === el)) {
		let obj = new Seybor(el)
		let addObj = { key: el, link: obj };

		id.push(addObj)

		console.log(true)

		return obj
	}

	const index = id.findIndex((item) => {
		return item.key == el
	});

	console.log(false)

	return id[index].link

}

export const s = function (el) {
	return document.querySelector(el)
}

export const sa = function (el) {
	return document.querySelectorAll(el)
}




