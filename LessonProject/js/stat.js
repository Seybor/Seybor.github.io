'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 120;
var CLOUD_Y = 150;

var FONT = '16px PT Mono';
var FONT_GAP = 15;

var HISTOGRAM_WIDTH = 40;
var HISTOGRAM_HEIGHT = 150;
var GAP = 50;
var USER_COLOR = 'rgba(255, 0, 0, 1)';

var getMaxElement = function (arr) {
	var maxElement = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}

	return maxElement;
};


window.renderStatistics = (ctx, names, times) => {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';

	ctx.beginPath();
	ctx.moveTo(110, 20);
	ctx.lineTo(530, 20);
	ctx.lineTo(480, 155);
	ctx.lineTo(530, 290);
	ctx.lineTo(110, 290);
	ctx.lineTo(160, 155);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = '#fff';
	ctx.strokeStyle = '#fff';

	ctx.beginPath();
	ctx.moveTo(100, 10);
	ctx.lineTo(520, 10);
	ctx.lineTo(470, 145);
	ctx.lineTo(520, 280);
	ctx.lineTo(100, 280);
	ctx.lineTo(150, 145);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.font = FONT;
	ctx.fillStyle = '#000';
	ctx.fillText('Ура вы победили!', 150, 40)
	ctx.fillText('Список результатов', 150, 60)

	var maxTime = getMaxElement(times);
	var proportion = Math.round(maxTime / HISTOGRAM_HEIGHT);

	var i = 0;
	var copyArrayTimes = [];
	times.forEach((el) => {
		copyArrayTimes[i] = el;
		i++;
	})
	copyArrayTimes.sort((a, b) => a - b)

	for (var i = 0; i < names.length; i++) {
		var finalTime = Math.round(copyArrayTimes[i])
		var newHeight = Math.round(finalTime / proportion)
		ctx.fillStyle = '#000';
		ctx.fillText(names[i], (CLOUD_X + GAP) + (i * (GAP + GAP / 2)), CLOUD_HEIGHT);

		if (names[i] === 'Вы') {
			ctx.fillStyle = USER_COLOR;
			if (copyArrayTimes[i] === maxTime) {
				ctx.fillRect((CLOUD_X + GAP) + (i * (GAP + GAP / 2)), CLOUD_HEIGHT - GAP - HISTOGRAM_HEIGHT, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
			}
			if (copyArrayTimes[i] != maxTime) {
				ctx.fillRect((CLOUD_X + GAP) + (i * (GAP + GAP / 2)), CLOUD_HEIGHT - GAP - newHeight, HISTOGRAM_WIDTH, newHeight);
			}
		}

		if (names[i] != 'Вы') {
			var randomOne = (min = 10, max = 255) => {
				return Math.floor(Math.random() * (max - min + 1) + min)
			}
			var randomTwo = (min = 10, max = 255) => {
				return Math.floor(Math.random() * (max - min + 1) + min)
			}
			ctx.fillStyle = `rgba(${randomOne()}, ${randomTwo()}, 255, 1)`

			if (copyArrayTimes[i] === maxTime) {
				ctx.fillRect((CLOUD_X + GAP) + (i * (GAP + GAP / 2)), CLOUD_HEIGHT - GAP - HISTOGRAM_HEIGHT, HISTOGRAM_WIDTH, HISTOGRAM_HEIGHT);
			}
			if (copyArrayTimes[i] != maxTime) {
				ctx.fillRect((CLOUD_X + GAP) + (i * (GAP + GAP / 2)), CLOUD_HEIGHT - GAP - newHeight, HISTOGRAM_WIDTH, newHeight);
			}
		}
		ctx.fillText(Math.round(copyArrayTimes[i]), (CLOUD_X + GAP) + (i * (GAP + GAP / 2)), CLOUD_HEIGHT - (GAP / 2));
	}

}