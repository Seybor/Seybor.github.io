// Регулярка для создания удобной разметки и записи её в новый файл
// В файле data.txt заношу данные в удобном виде, скрипт добавляет разметку и записывает в файл output.txt
//# (после него пробел) обозначает параграф и ставит в конце <br><br>
//+ начало списка <ul>
//- элемент списка (важно, чтобы начинался на новой строке и перед ним не было пробела)
//* - конец списка </ul>

const fs = require('fs');

// Чтение файла data.txt
fs.readFile('js/data.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	let result =
		data.replace(/^# (.+)/gm, '$1 <br><br>')
			.replace(/^- (.+)/gm, '<li>$1</li>')
			.replace(/(<li>.*?<\/li>\s*)+/gm, '<ul>\n$&\n</ul>')

	fs.writeFileSync('js/output.txt', result);
});