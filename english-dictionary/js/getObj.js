let v = ``

v = v.split('_____')
let arr = []
v.forEach(e => {

	arr.push(e.split('\n\n'))

})
let obj = arr.map(([ru, en, desc, ex]) => ({ ru, en, desc, ex }))

for (let i = 0; i < obj.length; i++) {
	try {
		obj[i].en = obj[i].en.split('\n');
		obj[i].desc = obj[i].desc.split('\n');
		obj[i].ex = obj[i].ex.split('\n');
	} catch {
		console.log(obj[i])
	}
}

console.log(obj);