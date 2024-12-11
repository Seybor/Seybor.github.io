/**Скрипт для создания массива объектов из карточек анки
* (предварительно удалить двойные кавычки где нужно)
*/

let content = ``

content = content.split('\n')
let arr = []

arr = content.map((el) => {
	return {
		subtheme: el.split('	')[0].trim(),
		content: el.split('	')[1].trim()
	}
})

const fs = require('fs');
const result = JSON.stringify(arr);
fs.writeFileSync('result.json', result);
