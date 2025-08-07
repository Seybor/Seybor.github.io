// * Асинхронный запрос с fetch
const getData = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	})
}

// * Асинхронный запрос с fetch, с помощью async/await
const getAsyncData = async (url) => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}

// getData('https://jsonplaceholder.typicode.com/todos')
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error.message))


// * Асинхронный post запрос
// - data - объект с даннымыми для отправки
const getPostData = (url, data) => {
	return new Promise((resolve, reject) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	})
}
