const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const lineWidth = document.getElementById('lineWidth');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');

let drawing = false;
let erasing = false;
let lastX = 0;
let lastY = 0;
let currentColor = colorPicker.value;
let currentLineWidth = lineWidth.value;

// 그리기 시작
canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  [lastX, lastY] = getCanvasCoords(e);
});

canvas.addEventListener('touchstart', (e) => {
  drawing = true;
  [lastX, lastY] = getCanvasCoords(e.touches[0]);
});

// 그리기 중
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchmove', (e) => {
  draw(e.touches[0]);
  e.preventDefault();
}, { passive: false });

// 그리기 끝
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mouseleave', () => drawing = false);
canvas.addEventListener('touchend', () => drawing = false);
canvas.addEventListener('touchcancel', () => drawing = false);

function getCanvasCoords(e) {
  const rect = canvas.getBoundingClientRect();
  return [
    (e.clientX - rect.left) * (canvas.width / rect.width),
    (e.clientY - rect.top) * (canvas.height / rect.height)
  ];
}

function draw(e) {
  if (!drawing) return;
  const [x, y] = getCanvasCoords(e);
  ctx.strokeStyle = erasing ? '#fff' : currentColor;
  ctx.lineWidth = currentLineWidth;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];
}

// 색상 변경
colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value;
  erasing = false;
  eraserBtn.classList.remove('active');
});

// 굵기 변경
lineWidth.addEventListener('input', (e) => {
  currentLineWidth = e.target.value;
});

// 지우개
eraserBtn.addEventListener('click', () => {
  erasing = !erasing;
  eraserBtn.classList.toggle('active', erasing);
});

// 전체 지우기
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// 저장
saveBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'my_drawing.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});

// 반응형 리사이즈 (선택적, 기존 그림 유지 X)
// window.addEventListener('resize', resizeCanvas);
// function resizeCanvas() {
//   // 캔버스 크기 조정 및 그림 복원 로직 필요 (고급)
// } 