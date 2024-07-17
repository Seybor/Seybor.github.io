function giveAnkiLists(string) {
	string = string.split('\n')
	let arr = []

	string.forEach(e => {
		arr.push(e.split(' - '))
	})

	for (let i = 0; i < arr.length; i++) {
		[arr[i][0], arr[i][1]] = [arr[i][1], arr[i][0]]
	}

	let result = '<div style="font-size: 1rem; text-align: left; color: gray;">\n'

	arr.forEach(e => {
		result += `<span>${e[0]} - ${e[1]}</span><br>\n`
	})

	result += '</div>'

	return result
}

// let string = ``

// string = string.split('\n')

// let arr = []
// string.forEach(e => {
// 	arr.push(e.split('	'))
// })



// let arr2 = []
// arr.forEach(e => {
// 	let obj = {}
// 	obj.en = e[2]
// 	obj.ru = e[0]
// 	obj.pos = ''

// 	arr2.push(obj)
// })

// console.log(JSON.stringify(arr2))











