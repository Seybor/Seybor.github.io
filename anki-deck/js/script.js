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

let string = `набрасываться, внезапно атаковать	Кошка набросилась на мышь	pounce	[paʊns]	The cat pounced on the mouse
проспать	Обязательно заведите будильник, чтобы не проспать	oversleep	[ˌəʊvəˈsliːp]	Be sure to set your alarm clock so that you don't oversleep
ходить на цыпочках	Она встала на цыпочки, чтобы его поцеловать	tiptoe	[ˈtɪptəʊ]	She stood on tiptoe to kiss him
задушить	Жертва была задушена ремнём	strangle	[ˈstræŋɡl]	The victim had been strangled with a belt
расстегиваться	 Этот нахал пытается расстегнуть мои ботинки.	unbutton	[tə ʌnˈbʌtn̩]	This smart aleck's trying to unbutton my high-top shoes
расстегивать, распаковывать	 Вы можете распаковать эти мешки, пожалуйста?	unzip	[tə ˌʌnˈzɪp]	Can you unzip those bags, please?
развязывать	 Я не могу развязать этот узел	untie	[tə ʌnˈtaɪ]	I can't untie this knot
шнуровать, зашнуровывать	Зашнуруй ботинки	lace	[tə leɪs]	Lace up your shoes
расшнуровывать	Расшнуруйте ботинки	unlace	[tə ʌnˈleɪs]	Unlace your shoes
дурно вести себя	Дети всё утро плохо себя вели	misbehave	[ˌmɪsbɪˈheɪv]	The children misbehaved all morning`

string = string.split('\n')

let arr = []
string.forEach(e => {
	arr.push(e.split('	'))
})



let arr2 = []
arr.forEach(e => {
	let obj = {}
	obj.en = e[2]
	obj.tr = e[3]
	obj.ru = e[0]
	obj.pos = ''

	arr2.push(obj)
})

console.log(JSON.stringify(arr2))





