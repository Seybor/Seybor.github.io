import { s, all } from "./base.js"

// @ burger
const burger = () => {
	s('.burger').addEventListener('click', (evt) => {
		s('.should-hidden').classList.toggle('should-hidden--active')
	})
}

// @ Переключение темы
const changeTheme = () => {
	s('.theme').addEventListener('click', (evt) => {
		let theme = s('.theme').classList.toggle('theme--active')

		if (theme) {
			s('html').dataset.theme = 'dark';
			localStorage.setItem("darkMode", "dark");
		} else {
			s('html').dataset.theme = 'light';
			localStorage.setItem("darkMode", "light");
		}
	})

	function toogleTheme(theme) {
		if (theme === 'dark') {
			s('.theme').classList.add("theme--active");
			s('html').dataset.theme = 'dark';
		} else {
			s('.theme').classList.remove("theme--active");
			s('html').dataset.theme = 'light';
		}
	}

	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		toogleTheme('dark')
	}

	if (localStorage.getItem('darkMode') === 'dark') {
		toogleTheme('dark')
	} else if (localStorage.getItem("darkMode") === "light") {
		toogleTheme('light')
	}

	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (evt) => {
		const newColorScheme = evt.matches ? "dark" : "light";
		if (newColorScheme === "dark") {
			toogleTheme('dark')
			localStorage.setItem("darkMode", "dark");
		} else {
			toogleTheme('light')
			localStorage.setItem("darkMode", "light");
		}
	});
}

// @ Аккордеон
const accordionStart = (accordionButtons, accordionPanels) => {
	accordionButtons.forEach((el, id) => {
		el.addEventListener('click', () => {
			let panel = el.nextElementSibling
			let isOpen = panel.classList.contains("active");

			accordionPanels.forEach((element, index) => {
				let btn = element.previousElementSibling
				btn.classList.remove("active");
				element.classList.remove("active");
				element.style.maxHeight = null
			})

			if (!isOpen) {
				el.classList.add("active");
				panel.classList.add("active");
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		})

	})
}

// @ Табы
const tabStart = (parrent) => {
	parrent.querySelector('.tab').addEventListener('click', (evt) => {
		if (evt.target.dataset.tabId) {
			parrent.querySelectorAll('.tabcontent').forEach((el, id) => {
				el.style.display = "none";
				el.classList.remove('active')
			})
			parrent.querySelectorAll('.tablinks').forEach((el, id) => {
				el.classList.remove('active');
			})
			parrent.querySelector(`.tabcontent[data-tab-id="${evt.target.dataset.tabId}"]`).style.display = "block";
			parrent.querySelector(`.tabcontent[data-tab-id="${evt.target.dataset.tabId}"]`).classList.add('active')
			evt.target.classList.add('active')
		}
	})
}

export {
	burger,
	changeTheme,
	accordionStart,
	tabStart
}