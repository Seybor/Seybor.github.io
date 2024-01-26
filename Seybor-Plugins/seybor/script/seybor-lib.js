"use strict";
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

}

export const s = (el) => {
	const nodeList = document.querySelectorAll(el);
	const newElement = new Seybor(nodeList);
	return newElement;
}

export const q = (el) => {
	return document.querySelector(el);
}

export const a = (el) => {
	return document.querySelectorAll(el);
}





