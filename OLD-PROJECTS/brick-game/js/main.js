import { s, all, css, attr, html, text, insert, evt } from './modules/base.js'

import gameControler from './gameControler.js'

// Генерация игрового поля
for (let y = 1; y <= 20; y++) {
	for (let x = 1; x <= 10; x++) {
		let content = `<div data-coord="${x},${y}"></div>`

		insert('.content-display__field', content)
	}
}

document.oncontextmenu = () => false // убираем вызов контекстного меню

// Старт страницы

gameControler.init()
gameControler.getButtonsHandler()