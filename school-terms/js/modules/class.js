class S {
	constructor(e) {
		this.e = document.querySelectorAll(e)
	}

	text(value) {

		if (!value) return this.e[0].textContent

		this.e.forEach(el => el.textContent = value)

		return this
	}

	html(value) {

		if (!value) return this.e[0].innerHTML

		this.e.forEach(el => el.innerHTML = value)

		return this
	}

	css(props) {
		if (typeof props === 'object') {
			for (let key in props) {
				this.e.forEach(el => el.style.setProperty(key, props[key]))
			}
		}

		return this
	}

	attr(props) {

		if (typeof props === 'object') {
			for (let key in props) {
				this.e.forEach(el => el.setAttribute(key, props[key]))
			}
		}

		return this

	}

	insert(value, where = 'beforeend') {

		this.e.forEach(el => el.insertAdjacentHTML(where, value))

		return this
	}

	evt(event, callback) {
		this.e.forEach(el => el.addEventListener(event, callback))

		return this
	}

	forEach(callback) {
		this.e.forEach(callback)
	}

	static find(e) {
		return document.querySelector(e)
	}
}

const $ = (e) => new S(e)

export {
	S,
	$
}