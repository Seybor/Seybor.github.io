let v = [
	{ en: 'in the beginning / at the beginning of', ru: 'в начале / в начале чего-то' },
	{ en: 'in the end / at the end of', ru: 'в конце(в конце концов) / в конце чего-то' },
	{ en: 'in the afternoon / evening / morning', ru: 'днём / вечером / утром' },
	{ en: 'in + time of year', ru: 'событие произошло в такое-то время года' },
	{ en: 'in the box', ru: 'в коробке' },
	{ en: 'in this photo', ru: 'на этой фотографии' },
]

let examples = `Ты заметил это в начале разговора?
Did you notice it at the beginning of the conversation?
Ты понял это в конце разговора?
Did you understand it at the end of the conversation?
Это было вечером
It was in the evening
Это было зимой
It was in winter
Это лежит в коробке
It lies in the box
Я изображён на этой фотографии
I'm pictured in this photo`


let arr = examples.split('\n')
let arrOne = []

for (let i = 0; i < arr.length; i += 2) {
	let newArr = []
	newArr.push(arr[i])
	newArr.push(arr[i + 1])
	arrOne.push(newArr)

}

arrOne.forEach((el, id) => {
	v[id].ru_example = el[0]
	v[id].en_example = el[1]
})

console.log(v)

