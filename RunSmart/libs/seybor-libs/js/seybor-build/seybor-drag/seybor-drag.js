const dragOne = (dragElement) => {
	dragElement.style.setProperty('touch-action', 'none')
	dragElement.style.setProperty('z-index', '10000')
	dragElement.style.setProperty('min-height', 'auto')

	dragElement.addEventListener('pointerdown', function (evt) {
		evt.preventDefault();

		dragElement.style.position = 'fixed';

		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight
		const dragElementWidth = dragElement.offsetWidth
		const dragElementHeight = dragElement.offsetHeight

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

			if (dragElement.offsetLeft < 0) {
				dragElement.style.left = '0px'
			} else {
				dragElement.style.left = dragElement.offsetLeft - shift.x + 'px';
			}

			if (dragElement.offsetTop < 0) {
				dragElement.style.top = '0px'
			} else {
				dragElement.style.top = dragElement.offsetTop - shift.y + 'px';
			}

			if (windowWidth - dragElementWidth <= dragElement.offsetLeft) {
				dragElement.style.left = windowWidth - dragElementWidth + 'px'
			}

			if (windowHeight - dragElementHeight <= dragElement.offsetTop) {
				dragElement.style.top = windowHeight - dragElementHeight + 'px'
			}
		};

		let onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('pointermove', onMouseMove);
			document.removeEventListener('pointerup', onMouseUp);

			if (dragged) {
				let onClickPreventDefault = function (evt) {
					evt.preventDefault();
					dragElement.removeEventListener('click', onClickPreventDefault);
				};
				dragElement.addEventListener('click', onClickPreventDefault);
			}

		};

		document.addEventListener('pointermove', onMouseMove);
		document.addEventListener('pointerup', onMouseUp);
	});
}

const dragTwo = (dragElement, parentElemenet) => {
	dragElement.style.setProperty('touch-action', 'none')
	dragElement.style.setProperty('z-index', '1000')
	dragElement.style.setProperty('min-height', 'auto')

	dragElement.addEventListener('pointerdown', function (evt) {
		evt.preventDefault();

		parentElemenet.style.setProperty('position', 'fixed')
		parentElemenet.style.setProperty('z-index', '10000')

		const windowWidth = window.innerWidth
		const windowHeight = window.innerHeight
		const parentElementWidth = parentElemenet.offsetWidth
		const parentElementHeight = parentElemenet.offsetHeight

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

			if (parentElemenet.offsetLeft < 0) {
				parentElemenet.style.left = '0px'
			} else {
				parentElemenet.style.left = parentElemenet.offsetLeft - shift.x + 'px';
			}

			if (parentElemenet.offsetTop < 0) {
				parentElemenet.style.top = '0px'
			} else {
				parentElemenet.style.top = parentElemenet.offsetTop - shift.y + 'px';
			}

			if (windowWidth - parentElementWidth <= parentElemenet.offsetLeft) {
				parentElemenet.style.left = windowWidth - parentElementWidth + 'px'
			}

			if (windowHeight - parentElementHeight <= parentElemenet.offsetTop) {
				parentElemenet.style.top = windowHeight - parentElementHeight + 'px'
			}
		};

		let onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener('pointermove', onMouseMove);
			document.removeEventListener('pointerup', onMouseUp);

			if (dragged) {
				let onClickPreventDefault = function (evt) {
					evt.preventDefault();
					parentElemenet.removeEventListener('click', onClickPreventDefault);
				};
				parentElemenet.addEventListener('click', onClickPreventDefault);
			}

		};

		document.addEventListener('pointermove', onMouseMove);
		document.addEventListener('pointerup', onMouseUp);
	});
}

const dragAll = (elements) => {
	elements.forEach((el, id) => {
		el.style.setProperty('touch-action', 'none')
		el.style.setProperty('z-index', '10000')

		el.addEventListener('pointerdown', function (evt) {
			evt.preventDefault();

			el.style.position = 'fixed';

			const windowWidth = window.innerWidth
			const windowHeight = window.innerHeight
			const timerWidth = el.offsetWidth
			const timerHeight = el.offsetHeight

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

				if (el.offsetLeft < 0) {
					el.style.left = '0px'
				} else {
					el.style.left = el.offsetLeft - shift.x + 'px';
				}

				if (el.offsetTop < 0) {
					el.style.top = '0px'
				} else {
					el.style.top = el.offsetTop - shift.y + 'px';
				}

				if (windowWidth - timerWidth <= el.offsetLeft) {
					el.style.left = windowWidth - timerWidth + 'px'
				}

				if (windowHeight - timerHeight <= el.offsetTop) {
					el.style.top = windowHeight - timerHeight + 'px'
				}
			};

			let onMouseUp = function (upEvt) {
				upEvt.preventDefault();

				document.removeEventListener('pointermove', onMouseMove);
				document.removeEventListener('pointerup', onMouseUp);

				if (dragged) {
					let onClickPreventDefault = function (evt) {
						evt.preventDefault();
						el.removeEventListener('click', onClickPreventDefault);
					};
					el.addEventListener('click', onClickPreventDefault);
				}

			};

			document.addEventListener('pointermove', onMouseMove);
			document.addEventListener('pointerup', onMouseUp);
		});
	})
}