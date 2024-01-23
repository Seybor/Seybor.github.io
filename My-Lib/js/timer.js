let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let title = document.getElementById('title')

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

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
	localStorage.setItem('time', timer.textContent)
	localStorage.setItem('sec', seconds)
	localStorage.setItem('min', minutes)
	localStorage.setItem('hours', hours)
	title.textContent = timer.textContent
}

if (localStorage.getItem('time')) {
	title.textContent = localStorage.getItem('time')
	timer.textContent = localStorage.getItem('time')
	seconds = +(localStorage.getItem('sec'))
	minutes = +(localStorage.getItem('min'))
	hours = +(localStorage.getItem('hour'))
	startBtn.disabled = true;
	resetBtn.disabled = false;

	if (localStorage.getItem('pause')) {
		pauseBtn.disabled = true;
		startBtn.disabled = false;
	} else {
		pauseBtn.disabled = false;
		interval = setInterval(updateTime, 1000);
	}
} else {
	title.textContent = timer.textContent
	console.log('null')
}


startBtn.addEventListener('click', () => {
	localStorage.removeItem('pause')
	interval = setInterval(updateTime, 1000);
	startBtn.disabled = true;
	pauseBtn.disabled = false;
	resetBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
	clearInterval(interval);
	startBtn.disabled = false;
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
	localStorage.removeItem('time')
});

// setItem(key, value)
// getItem(key)
// removeItem(key)