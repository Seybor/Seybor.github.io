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

clockStart()

const clock = document.querySelector('.clock')

const dragStart = (dragElemenet) => {
	dragElemenet.style.setProperty('touch-action', 'none')
	dragElemenet.style.setProperty('z-index', '10000')

	dragElemenet.addEventListener('pointerdown', function (evt) {
		evt.preventDefault();

		dragElemenet.style.position = 'fixed';

		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight
		const timerWidth = dragElemenet.offsetWidth
		const timerHeight = dragElemenet.offsetHeight

		// console.log(windowWidth)
		// console.log(windowHeight)

		// console.log(timerWidth)
		// console.log(timerHeight)

		let startCoords = {
			x: evt.clientX,
			y: evt.clientY,
		};

		let dragged = false;
		let onMouseMove = function (moveEvt) {
			moveEvt.preventDefault();
			dragged = true;

			let shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY,
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY,
			};

			if (shift.y < 0) {
				shift.y
			}

			if (dragElemenet.offsetLeft < 0) {
				dragElemenet.style.left = '0px'
			} else {
				dragElemenet.style.left = dragElemenet.offsetLeft - shift.x + 'px';
			}

			if (dragElemenet.offsetTop < 0) {
				dragElemenet.style.top = '0px'
			} else {
				dragElemenet.style.top = dragElemenet.offsetTop - shift.y + 'px';
			}

			if (windowWidth - timerWidth <= dragElemenet.offsetLeft) {
				dragElemenet.style.left = windowWidth - timerWidth + 'px'
			}

			if (windowHeight - timerHeight <= dragElemenet.offsetTop) {
				dragElemenet.style.top = windowHeight - timerHeight + 'px'
			}
		};

		let onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('pointermove', onMouseMove);
			document.removeEventListener('pointerup', onMouseUp);

			if (dragged) {
				let onClickPreventDefault = function (evt) {
					evt.preventDefault();
					dragElemenet.removeEventListener('click', onClickPreventDefault);
				};
				dragElemenet.addEventListener('click', onClickPreventDefault);
			}

		};

		document.addEventListener('pointermove', onMouseMove);
		document.addEventListener('pointerup', onMouseUp);
	});
}

dragStart(clock)