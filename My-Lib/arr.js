{

	initTimer.addEventListener('mousedown', function (evt) {
		evt.preventDefault();

		let startCoords = {
			x: evt.clientX,
			y: evt.clientY,
		};

		let dragged = false;
		let i = 0;
		let onMouseMove = function (moveEvt) {
			moveEvt.preventDefault();
			console.log(i);
			i++;
			dragged = true;

			let shift = {
				x: startCoords.x - moveEvt.clientX,
				y: startCoords.y - moveEvt.clientY,
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY,
			};

			initTimer.style.top = initTimer.offsetTop - shift.y + 'px';
			initTimer.style.left = initTimer.offsetLeft - shift.x + 'px';
		};

		let onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);

			if (dragged) {
				let onClickPreventDefault = function (evt) {
					evt.preventDefault();
					initTimer.removeEventListener('click', onClickPreventDefault);
				};
				initTimer.addEventListener('click', onClickPreventDefault);
			}
		};

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
	});
}
