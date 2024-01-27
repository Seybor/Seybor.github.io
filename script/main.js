'use strict';

// import { seyborStartTimer } from '../Seybor-Plugins/seybor-timer/timer.js';

// seyborStartTimer()


const style = document.createElement('style')
style.innerHTML = `
	.init-timer {
	  position: fixed;
	  right: 0;
	  top: 0;

	  padding: 6px;
	  height: 150px;
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

// localStorage.clear()

// !!!!!!!
var startDate;
var clocktimer;
var pausedTime = 0;

function startTimer() {
	startDate = new Date();
	clocktimer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
	clearInterval(clocktimer);
	pausedTime = new Date() - startDate;
	localStorage.setItem('pausedTime', pausedTime);
}

function resumeTimer() {
	startDate = new Date(new Date() - pausedTime);
	clocktimer = setInterval(updateTimer, 1000);
	localStorage.removeItem('pausedTime');
}

function updateTimer() {
	var currentDate = new Date();
	var timeElapsed = new Date(currentDate - startDate);
	var hours = timeElapsed.getUTCHours().toString().padStart(2, '0');
	var minutes = timeElapsed.getUTCMinutes().toString().padStart(2, '0');
	var seconds = timeElapsed.getUTCSeconds().toString().padStart(2, '0');
	var timerDisplay = hours + ':' + minutes + ':' + seconds;
	document.getElementById('timer').textContent = timerDisplay;
}

startBtn.addEventListener('click', (evt) => {
	if (localStorage.getItem('pausedTime')) {
		resumeTimer();
	} else {
		startTimer();
	}
})

