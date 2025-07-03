// 바둑판 설정
const SIZE = 19;
const CELL = 30; // 한 칸 크기(px)
const BOARD_SIZE = CELL * (SIZE - 1);
const RADIUS = 12; // 돌 반지름

const canvas = document.getElementById('goBoard');
const ctx = canvas.getContext('2d');
const turnInfo = document.getElementById('turnInfo');
const resultInfo = document.getElementById('resultInfo');
const restartBtn = document.getElementById('restartBtn');
const modeRadios = document.querySelectorAll('input[name="mode"]');

let board, turn, gameOver, mode;

function initGame() {
  board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  turn = 1; // 1: 흑, 2: 백
  gameOver = false;
  mode = document.querySelector('input[name="mode"]:checked').value;
  resultInfo.textContent = '';
  updateTurnInfo();
  drawBoard();
}

function updateTurnInfo() {
  if (gameOver) return;
  turnInfo.textContent = (turn === 1 ? '흑돌' : '백돌') + ' 차례' + (mode === 'ai' && turn === 2 ? ' (AI)' : '');
}

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 바둑판 그리기
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < SIZE; i++) {
    ctx.beginPath();
    ctx.moveTo(CELL * i, 0);
    ctx.lineTo(CELL * i, BOARD_SIZE);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, CELL * i);
    ctx.lineTo(BOARD_SIZE, CELL * i);
    ctx.stroke();
  }
  // 호선(별점)
  const hos = [3, 9, 15];
  hos.forEach(x => hos.forEach(y => {
    ctx.beginPath();
    ctx.arc(CELL * x, CELL * y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = '#222';
    ctx.fill();
  }));
  // 돌 그리기
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (board[y][x] !== 0) drawStone(x, y, board[y][x]);
    }
  }
}

function drawStone(x, y, color) {
  ctx.beginPath();
  ctx.arc(CELL * x, CELL * y, RADIUS, 0, 2 * Math.PI);
  ctx.fillStyle = color === 1 ? '#222' : '#fff';
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 2;
  ctx.shadowColor = color === 1 ? '#000' : '#aaa';
  ctx.shadowBlur = 6;
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function getCell(e) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.round((e.clientX - rect.left) / CELL);
  const y = Math.round((e.clientY - rect.top) / CELL);
  if (x < 0 || x >= SIZE || y < 0 || y >= SIZE) return null;
  return { x, y };
}

canvas.addEventListener('click', async (e) => {
  if (gameOver) return;
  if (mode === 'ai' && turn === 2) return; // AI 차례엔 클릭 무시
  const cell = getCell(e);
  if (!cell) return;
  if (board[cell.y][cell.x] !== 0) return;
  placeStone(cell.x, cell.y, turn);
  if (checkWin(cell.x, cell.y, turn)) {
    endGame(turn === 1 ? '흑돌 승리!' : '백돌 승리!');
    return;
  }
  turn = 3 - turn;
  updateTurnInfo();
  if (mode === 'ai' && turn === 2 && !gameOver) {
    await sleep(400);
    aiMove();
  }
});

function placeStone(x, y, color) {
  board[y][x] = color;
  drawBoard();
}

function aiMove() {
  // 아주 단순한 랜덤 AI (빈 칸 중 랜덤)
  const empty = [];
  for (let y = 0; y < SIZE; y++) for (let x = 0; x < SIZE; x++) if (board[y][x] === 0) empty.push({x, y});
  if (empty.length === 0) return;
  const move = empty[Math.floor(Math.random() * empty.length)];
  placeStone(move.x, move.y, 2);
  if (checkWin(move.x, move.y, 2)) {
    endGame('백돌(AI) 승리!');
    return;
  }
  turn = 1;
  updateTurnInfo();
}

function checkWin(x, y, color) {
  // 5목(연속 5개) 체크
  const dirs = [
    {dx:1,dy:0}, {dx:0,dy:1}, {dx:1,dy:1}, {dx:1,dy:-1}
  ];
  for (const {dx,dy} of dirs) {
    let count = 1;
    for (let d = 1; d < 5; d++) {
      const nx = x + dx*d, ny = y + dy*d;
      if (nx<0||nx>=SIZE||ny<0||ny>=SIZE||board[ny][nx]!==color) break;
      count++;
    }
    for (let d = 1; d < 5; d++) {
      const nx = x - dx*d, ny = y - dy*d;
      if (nx<0||nx>=SIZE||ny<0||ny>=SIZE||board[ny][nx]!==color) break;
      count++;
    }
    if (count >= 5) return true;
  }
  return false;
}

function endGame(msg) {
  gameOver = true;
  resultInfo.textContent = msg;
  turnInfo.textContent = '게임 종료';
}

restartBtn.addEventListener('click', initGame);
modeRadios.forEach(radio => radio.addEventListener('change', initGame));

function sleep(ms) { return new Promise(res => setTimeout(res, ms)); }

// 초기화
initGame(); 