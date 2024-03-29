const seyborStartTimer = () => {

	const style = document.createElement('style')
	style.innerHTML = `
	.init-timer {
	  position: fixed;
	  right: 0;
	  top: 0;
	  z-index: 10000;

	  padding: 24px 6px;
	  width: 300px;

	  display: flex;
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;

	  border: 1px solid gray;
	  background-color: gray;
	  text-align: center;
	  opacity: 1;
	}

	#init-drag {
	  position: absolute;
	  left: 5px;
	  top: 5px;

	  width: 50px;
	  height: 50px;
	  background-color: green;

	  cursor: pointer;
	  touch-action: none;
	}

	.init-timer__time {
		margin: 0px;
		padding: 12px 0;

	  font-size: 48px;
	}

	.init-timer__wrapper * {
	  font-size: 24px;
	}

	.init-timer__btn {
	  border: none;
	  padding: 6px 12px;
	}
`
	const start = document.createElement('div')
	start.innerHTML = `
	<div class="init-timer" id="init-timer">
		<span id="init-drag"></span>
		<h1 class="init-timer__time" id="timer">00:00:00</h1>
		<div class="init-timer__wrapper">
			<button class="init-timer__btn" id="startBtn">Старт</button>
			<button class="init-timer__btn" id="pauseBtn" disabled>Пауза</button>
			<button class="init-timer__btn" id="resetBtn" disabled>Сброс</button>
		</div>
	</div>
`
	document.head.append(style);
	document.body.append(start);

	const timer = document.getElementById('timer');
	const startBtn = document.getElementById('startBtn');
	const pauseBtn = document.getElementById('pauseBtn');
	const resetBtn = document.getElementById('resetBtn');
	const title = document.querySelector('title');
	const initTimer = document.getElementById('init-timer');
	const initDrag = document.getElementById('init-drag');

	let seconds = 0;
	let minutes = 0;
	let hours = 0;
	let interval;
	let passedTime;

	const startTimer = () => {
		if (localStorage.getItem('start')) {

			if (localStorage.getItem('pause') === 'true') {
				passedTime = Math.round(+(localStorage.getItem('commonWorkTime')) / 1000)
				startBtn.disabled = false;
				pauseBtn.disabled = true;
				resetBtn.disabled = false;
			} else {
				passedTime = Math.round((+(Date.now()) - +(localStorage.getItem('start')) + +(localStorage.getItem('commonWorkTime'))) / 1000)
				startBtn.disabled = true;
				pauseBtn.disabled = false;
				resetBtn.disabled = false;

				interval = setInterval(updateTime, 1000);
			}

			seconds = passedTime % 60
			minutes = Math.floor(passedTime / 60) % 60
			hours = Math.floor(passedTime / 60 / 60)

			timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

		} else {
			localStorage.setItem('commonWorkTime', 0)
			localStorage.setItem('currentWorkTime', 0)
			localStorage.setItem('pause', 'true')

			startBtn.disabled = false;
			pauseBtn.disabled = true;
			resetBtn.disabled = true;

			timer.textContent = `00:00:00`
		}


	}
	startTimer()

	function updateTime() {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		if (minutes === 60) {
			hours++;
			minutes = 0;
		}
		let currentWorkTime = Math.round((+(Date.now()) - +(localStorage.getItem('start'))))

		localStorage.setItem('currentWorkTime', currentWorkTime)

		timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

		title.textContent = timer.textContent
	}

	startBtn.addEventListener('click', () => {

		if (!localStorage.getItem('startTimer')) {
			localStorage.setItem('startTimer', `${Date.now()}`)
		}

		localStorage.setItem('pause', 'false')
		localStorage.setItem('start', `${Date.now()}`)
		localStorage.setItem('currentWorkTime', 0)

		startBtn.disabled = true;
		pauseBtn.disabled = false;
		resetBtn.disabled = false;

		interval = setInterval(updateTime, 1000);

	});

	pauseBtn.addEventListener('click', () => {
		clearInterval(interval);

		startBtn.disabled = false;
		pauseBtn.disabled = true;
		resetBtn.disabled = false;

		localStorage.setItem('pause', 'true')

		let commonWorkTime = Math.round(+localStorage.getItem('commonWorkTime') + +localStorage.getItem('currentWorkTime'))
		localStorage.setItem('commonWorkTime', commonWorkTime)
		localStorage.setItem('currentWorkTime', 0)
	});

	resetBtn.addEventListener('click', () => {
		clearInterval(interval);

		seconds = 0
		minutes = 0
		hours = 0

		timer.textContent = '00:00:00';
		title.textContent = timer.textContent

		startBtn.disabled = false;
		pauseBtn.disabled = true;
		resetBtn.disabled = true;

		console.log(Date.now() - +localStorage.getItem('startTimer'))
		localStorage.setItem('startTimer', `${Date.now()}`)

		localStorage.clear()
	});


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
}


export default seyborStartTimer