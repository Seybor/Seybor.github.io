const s = (e) => {
	return document.querySelector(e)
}
const all = (els) => {
	return document.querySelectorAll(els)
}

const css = (e, props) => {

	if (typeof props === 'object') {
		for (let key in props) {
			s(e).style[key] = props[key]
		}
	}

	return s(e)
}

const attr = (e, props) => {

	if (typeof props === 'object') {
		for (let key in props) {
			s(e).setAttribute(key, props[key])
		}
	}

	return s(e)
}

const html = (e, value) => {
	s(e).innerHTML = value

	return s(e)
}

const text = (e, value) => {
	s(e).textContent = value

	return s(e)
}

const insert = (e, value, where = 'beforeend') => {
	s(e).insertAdjacentHTML(where, value)

	return s(e)
}

export {
	s,
	all,
	css,
	attr,
	html,
	text,
	insert
}