const s = (element) => {
	console.log(document.querySelector(element))
	return document.querySelector(element)
}

const all = (element) => {
	console.log(document.querySelectorAll(element))
	return document.querySelectorAll(element)
}


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'z') {
    alert('yes')
  }
});


let n = '−'

console.log(n.codePointAt(0))

// s('.wrapper').removeChild(s('.wrapper .item'))

// all('.wrapper .item').forEach((el) => {
// 	el.remove()
// })

let v = document.createTextNode('<p>А вот и я')


div.before(v);
div.before('<h1>Привет</h1>');
div.insertAdjacentHTML('beforebegin', '<h1>Привет</h1>');
div.insertAdjacentText('afterend', '<h1>Пока</h1>');


s('.wrapper').replaceChild(s('.wrapper1 .item1:last-child'), s('.wrapper .item:first-child'))


