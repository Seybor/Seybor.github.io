const clockStart = () => {
	const hours = document.querySelector('.hours')
	const minutes = document.querySelector('.minutes')
	const seconds = document.querySelector('.seconds')

	const deg = 6
	const hoursDeg = 30

	setInterval(() => {
		const day = new Date()

		const currentHours = day.getHours() * hoursDeg
		const currentMinutes = day.getMinutes() * deg
		const currentSeconds = day.getSeconds() * deg

		hours.style.setProperty('transform', `rotateZ(${currentHours + (currentMinutes / 12)}deg)`)
		minutes.style.setProperty('transform', `rotateZ(${currentMinutes}deg)`)
		seconds.style.setProperty('transform', `rotateZ(${currentSeconds}deg)`)

	}, 0)


}

if (document.querySelector('.clock-wrapper')) {
	clockStart()
} 
