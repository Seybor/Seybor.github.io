// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Общий фон на канвасе
function drawBackground() {
  ctx.fillStyle = '#eee';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000';
  ctx.font = '14px sans-serif';
  ctx.textAlign = 'center';
  // ctx.fillText(`Золото: ${Math.floor(game.gold)}`, canvas.width / 2, 20);
}

// Анимация вспышки при клике
function animateClickEffect() {
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  let radius = 5;
  const maxRadius = 80;
  const grow = 2;

  function frame() {
    drawBackground(); // сначала фон, чтобы старый кружок стёрся

    // кружок‑вспышка
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    const alpha = 1 - radius / maxRadius;
    ctx.fillStyle = `rgba(255, 215, 0, ${alpha})`;
    ctx.fill();
    ctx.strokeStyle = `rgba(184, 134, 11, ${alpha})`;
    ctx.lineWidth = 3;
    ctx.stroke();

    radius += grow;
    if (radius < maxRadius) {
      requestAnimationFrame(frame);
    }
  }
  frame();
}
