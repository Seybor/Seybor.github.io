// ! Перетаскивание элемента
const drag = (dragElement) => {
  dragElement.style.setProperty('touch-action', 'none');
  dragElement.style.setProperty('z-index', '10000');
  dragElement.style.setProperty('min-height', 'auto');

  dragElement.addEventListener('pointerdown', function (evt) {
    evt.preventDefault();

    dragElement.style.position = 'fixed';

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const dragElementWidth = dragElement.offsetWidth;
    const dragElementHeight = dragElement.offsetHeight;

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
        shift.y;
      }

      if (dragElement.offsetLeft < 0) {
        dragElement.style.left = '0px';
      } else {
        dragElement.style.left = dragElement.offsetLeft - shift.x + 'px';
      }

      if (dragElement.offsetTop < 0) {
        dragElement.style.top = '0px';
      } else {
        dragElement.style.top = dragElement.offsetTop - shift.y + 'px';
      }

      if (windowWidth - dragElementWidth <= dragElement.offsetLeft) {
        dragElement.style.left = windowWidth - dragElementWidth + 'px';
      }

      if (windowHeight - dragElementHeight <= dragElement.offsetTop) {
        dragElement.style.top = windowHeight - dragElementHeight + 'px';
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
};

export { drag };
