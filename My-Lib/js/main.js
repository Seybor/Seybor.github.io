'use strict';

import { s, el, sa } from '../seybor/script/seybor-lib.js';


// $('body').hide

// s('#ccc').css({
// 	'background-color': 'red',
// 	'color': 'red'
// })

import { updateTime } from './timer.js';

const rWidth = (min = 0, max = 1) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
const rHeigth = (min = 0, max = 1) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const rBorder = (min = 0, max = 1) => {
	let arr = []
	for (let i = 0; i < 4; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1) + min))
	}
	return arr
}

const rBgc = (min = 1, max = 5) => {
	let arr = []
	for (let i = 0; i < 3; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1) + min))
	}
	return arr
}

const rShadow = (min = 0, max = 1) => {
	let arr = []
	for (let i = 0; i < 7; i++) {
		arr.push(Math.floor(Math.random() * (max - min + 1) + min))
	}
	return arr
}


s('#start').addEventListener('click', (evt) => {
	if (evt.target.dataset.start) {

		let el = evt.target

		let rWidth1 = rWidth()
		let rHeigth1 = rHeigth()
		let rBorder1 = rBorder()
		let rBgc1 = rBgc()
		let rShadow1 = rShadow()
		console.log(rWidth1)
		console.log(rHeigth1)
		console.log(rBorder1)
		console.log(rBgc1)
		console.log(rShadow1)

		let width = +el.dataset.width + +rWidth1
		let height = +el.dataset.height + +rHeigth1
		let color1 = +el.dataset.color1 + +rBgc1[0]
		let color2 = +el.dataset.color2 + +rBgc1[1]
		let color3 = +el.dataset.color3 + +rBgc1[2]
		let rad1 = +el.dataset.radius1 + +rBorder1[0]
		let rad2 = +el.dataset.radius2 + +rBorder1[1]
		let rad3 = +el.dataset.radius3 + +rBorder1[2]
		let rad4 = +el.dataset.radius4 + +rBorder1[3]
		let shadow1 = +el.dataset.shadow1 + +rShadow1[0]
		let shadow2 = +el.dataset.shadow2 + +rShadow1[1]
		let shadow3 = +el.dataset.shadow3 + +rShadow1[2]
		let shadow4 = +el.dataset.shadow4 + +rShadow1[3]
		let shadow5 = +el.dataset.shadow5 + +rShadow1[4]
		let shadow6 = +el.dataset.shadow6 + +rShadow1[5]
		let shadow7 = +el.dataset.shadow7 + +rShadow1[6]



		let generation = +el.textContent + 1

		if (color1 > 125) {
			color1 = color1 - +rBgc1[0] - +rBgc1[0]
		}
		if (color2 > 125) {
			color2 = color2 - +rBgc1[1] - +rBgc1[1]
		}
		if (color3 > 125) {
			color3 = color3 - +rBgc1[2] - +rBgc1[2]
		}


		if (shadow5 > 125) {
			shadow5 = shadow5 - +rShadow1[4] - +rShadow1[4]
		}
		if (shadow6 > 125) {
			shadow6 = shadow6 - +rShadow1[5] - +rShadow1[5]
		}
		if (shadow7 > 125) {
			shadow7 = shadow7 - +rShadow1[6] - +rShadow1[6]
		}

		el.dataset.width = width
		el.dataset.height = height
		el.dataset.color1 = color1
		el.dataset.color2 = color2
		el.dataset.color3 = color3
		el.dataset.radius1 = rad1
		el.dataset.radius2 = rad2
		el.dataset.radius3 = rad3
		el.dataset.radius4 = rad4
		el.dataset.shadow1 = shadow1
		el.dataset.shadow2 = shadow2
		el.dataset.shadow3 = shadow3
		el.dataset.shadow4 = shadow4
		el.dataset.shadow5 = shadow5
		el.dataset.shadow6 = shadow6
		el.dataset.shadow7 = shadow7
		el.textContent = generation


		el.style.width = `${width}%`
		el.style.height = `${height}%`
		el.style.backgroundColor = `rgb(${color1}, ${color2},${color3})`
		el.style.borderRadius = `${rad1}%, ${rad2}%,${rad3}%, ${rad4}%`
		el.style.boxShadow = `${shadow1}px ${shadow2}px ${shadow3}px ${shadow4}px rgb(${shadow5},${shadow6},${shadow7})`
	}
})



