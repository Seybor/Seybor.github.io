const timer = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const continueBtn = document.getElementById('continueBtn')
const title = document.getElementById('title');
const initTimer = document.getElementById('init-timer');
const initDrag = document.getElementById('init-drag');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

timer.textContent = `00:00:00`

const startTimer = () => {
	if (localStorage.getItem('time')) {
		startBtn.disabled = true;
		resetBtn.disabled = false;

		if (localStorage.getItem('pause')) {
			pauseBtn.disabled = true;
			startBtn.disabled = false;
		} else {
			pauseBtn.disabled = false;
			localStorage.setItem('passed', `${Date.now()}`)
			let passedTime = Math.round((+(localStorage.getItem('passed')) - +(localStorage.getItem('start'))) / 1000)

			seconds = passedTime % 60
			minutes = Math.floor(passedTime / 60) % 60
			hours = Math.floor(passedTime / 60 / 60)

			interval = setInterval(updateTime, 1000);
		}
	} else {
		title.textContent = timer.textContent
		console.log('null')
	}
}

setTimeout(startTimer, 500)

export function updateTime() {
	seconds++;
	if (seconds === 60) {
		minutes++;
		seconds = 0;
	}
	if (minutes === 60) {
		hours++;
		minutes = 0;
	}
	timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

	title.textContent = timer.textContent
}


startBtn.addEventListener('click', () => {
	localStorage.setItem('start', `${Date.now()}`)

	localStorage.removeItem('pause')
	interval = setInterval(updateTime, 1000);
	startBtn.disabled = true;
	pauseBtn.disabled = false;
	resetBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
	clearInterval(interval);
	startBtn.classList.add('visually-hidden')
	continueBtn.classList.remove('visually-hidden')
	pauseBtn.disabled = true;
	localStorage.setItem('pause', 'true')
});

resetBtn.addEventListener('click', () => {
	clearInterval(interval);
	seconds = 0;
	minutes = 0;
	hours = 0;
	timer.textContent = '00:00:00';
	title.textContent = timer.textContent
	startBtn.disabled = false;
	pauseBtn.disabled = true;
	resetBtn.disabled = true;
	continueBtn.classList.add('visually-hidden')
	startBtn.classList.remove('visually-hidden')
	localStorage.removeItem('time')
});

continueBtn.addEventListener('pointerdown', (evt) => {
	interval = setInterval(updateTime, 1000);
	continueBtn.disabled = true
	pauseBtn.disabled = false;
})

initDrag.addEventListener('pointerdown', function (evt) {
	evt.preventDefault();

	const windowWidth = window.innerWidth
	const windowHeight = window.innerHeight
	const timerWidth = initTimer.offsetWidth
	const timerHeight = initTimer.offsetHeight

	console.log(windowWidth)
	console.log(windowHeight)

	console.log(timerWidth)
	console.log(timerHeight)

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

		if (initTimer.offsetLeft < 0) {
			initTimer.style.left = '0px'
		} else {
			initTimer.style.left = initTimer.offsetLeft - shift.x + 'px';
		}

		if (initTimer.offsetTop < 0) {
			initTimer.style.top = '0px'
		} else {
			initTimer.style.top = initTimer.offsetTop - shift.y + 'px';
		}

		if (windowWidth - timerWidth <= initTimer.offsetLeft) {
			initTimer.style.left = windowWidth - timerWidth + 'px'
		}

		if (windowHeight - timerHeight <= initTimer.offsetTop) {
			initTimer.style.top = windowHeight - timerHeight + 'px'
		}
	};

	let onMouseUp = function (upEvt) {
		upEvt.preventDefault();

		document.removeEventListener('pointermove', onMouseMove);
		document.removeEventListener('pointerup', onMouseUp);

		if (dragged) {
			let onClickPreventDefault = function (evt) {
				evt.preventDefault();
				initTimer.removeEventListener('click', onClickPreventDefault);
			};
			initTimer.addEventListener('click', onClickPreventDefault);
		}

	};

	document.addEventListener('pointermove', onMouseMove);
	document.addEventListener('pointerup', onMouseUp);
});

