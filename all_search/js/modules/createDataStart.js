import { s, all } from "./basic.js"

const createDataStart = () => {
	const createData = (data, separator = '	', anki = false) => {
		class Text {
			constructor(en, ru, ru_example, en_example, tr) {
				this.en = en;
				this.ru = ru;
				this.ru_example = ru_example;
				this.en_example = en_example;
				this.tr = tr;
			}
		}

		const arr = data.split('\n');
		let arrObj = [];

		arr.forEach((el, id) => {
			let value = el.split(separator);
			for (let i = 0; i < value.length; i++) {
				if (value[i] == '.') {
					value[i] = null;
				}
			}

			let obj = new Text(
				value[0],
				value[1],
				value[2] ? value[2] : '',
				value[3] ? value[3] : '',
				value[4] ? value[4] : ''
			);

			arrObj.push(JSON.parse(JSON.stringify(obj)));
		});

		if (!anki) {
			console.log(arrObj);
			arrObj = JSON.stringify(arrObj)
			arrObj = arrObj.slice(1, arrObj.length - 1)

			return arrObj;
		} else {
			let anki_en = ``;
			let anki_ru = ``;
			let anki_all = ``;

			arrObj.forEach((el, id) => {
				anki_ru += `${el.ru}${el.ru_example != '' ? '<br><br>' + el.ru_example : ''}\t${el.en}${el.tr != '' ? '<br><br>' + el.tr : ''
					}${el.en_example != '' ? '<br><br>' + el.en_example : ''}\n`;
				anki_en += `${el.en}<br><br>${el.tr != '' ? el.tr + '<br><br>' : ''}${el.en_example != '' ? el.en_example : ''
					}\t${el.ru}${el.ru_example != '' ? '<br><br>' + el.ru_example : ''}\n`;
			});

			anki_all = anki_en.concat(anki_ru).split('\n');

			const shuffleArr = (arr) => {
				for (let i = arr.length - 1; i > 0; i--) {
					let j = Math.floor(Math.random() * (i + 1));
					let t = arr[i];
					arr[i] = arr[j];
					arr[j] = t;
				}
			};

			shuffleArr(anki_all);
			anki_all = anki_all.filter((el) => el != '').join('\n');

			console.log(anki_all);

			return anki_ru;
		}
	};

	s('#form-main').addEventListener('submit', (evt) => {
		evt.preventDefault();

		let value = s('#form-main textarea[name="input"]').value;
		let separator = s('.form-main__input[name="separator"]:checked').value;
		let anki = s('.form-main__input[name="anki"]:checked').value;

		console.log(value.value);
		console.log(separator.value);
		console.log(anki.value);

		switch (anki) {
			case 'true':
				{
					anki = true;
				}
				break;
			case 'false':
				{
					anki = false;
				}
				break;

			default: {
				anki = false;
			}
		}

		s('#form-main textarea[name="output"]').value = createData(value, separator, anki);

		s('.form-main__link').style.display = 'block'

		let text = ''
		if (anki) {
			console.log(123)
			console.log(text)
			text = '#separator:tab\n#html:true\n';
		}
		text += s('#form-main textarea[name="output"]').value
		console.log(text)

		s('.form-main__link').setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		s('.form-main__link').setAttribute('download', 'anki.txt');

	});

}

export default createDataStart