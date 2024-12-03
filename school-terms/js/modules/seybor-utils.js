const utils = {

	shuffleArr(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let t = arr[i];
			arr[i] = arr[j];
			arr[j] = t;
		}
	},

	truncateString(str, maxlength = 20) {
		if (str.length > maxlength) {
			return str.slice(0, maxlength);
		}
		return str;
	},

	arraysEqual(firstArray, secondArray) {
		if (
			firstArray.length === secondArray.length &&
			firstArray.every((element, index) => element === secondArray[index])
		) {
			return true
		}
		return false
	},

	uniqueArr(arr) {
		return Array.from(new Set(arr));
	},

	extractNumber(str = '') {
		const pattern = /\d+/g;
		console.log(str.match(pattern))
		return +str.match(pattern).join('');
	},

	getRandomNumber(min = 1, max = 100) {
		return Math.floor(Math.random() * (max - min + 1) + min)
	},

	generateRandomNumbers(min = 1, max = 10, count = 5) {
		if (max - min + 1 < count) {
			throw new Error('Невозможно сгенерировать указанное количество уникальных чисел');
		}

		const numbers = [];
		while (numbers.length < count) {
			const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			if (!numbers.includes(randomNumber)) {
				numbers.push(randomNumber);
			}
		}
		return numbers;
	}

}

const u = utils

export { u }

