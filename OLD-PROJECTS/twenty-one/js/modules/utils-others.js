const shuffleArr = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
};

const truncateString = (str, maxlength = 20) => {
	if (str.length > maxlength) {
		return str.slice(0, maxlength);
	}
	return str;
};

const arraysEqual = (firstArray, secondArray) => {
	if (
		firstArray.length === secondArray.length &&
		firstArray.every((element, index) => element === secondArray[index])
	) {
		return true
	}
	return false
};

const uniqueArr = (arr) => {
	return Array.from(new Set(arr));
};

const extractNumber = (str = '') => {
	const pattern = /\d+/g;
	console.log(str.match(pattern))
	return +str.match(pattern).join('');
};

const getRandomNumber = (min = 1, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateRandomNumbers = (min = 1, max = 10, count = 5) => {
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
};

export {
	shuffleArr,
	truncateString,
	arraysEqual,
	uniqueArr,
	extractNumber,
	getRandomNumber,
	generateRandomNumbers
}
