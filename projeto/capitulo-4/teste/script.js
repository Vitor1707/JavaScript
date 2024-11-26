// Selecionar o canvas e configurar o contexto 2D
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Definir o tamanho do canvas
canvas.width = 400;
canvas.height = 400;

// Configurar o tamanho de cada célula no grid
const cellSize = 20;

// Variáveis do jogo
let snake = [
  { x: 100, y: 100 },
  { x: 80, y: 100 },
  { x: 60, y: 100 }
];
let food = {
  x: Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
  y: Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize
};
let direction = 'RIGHT';
let score = 0;
let lives = 3; // Quantidade inicial de vidas

// Função para desenhar o fundo
function drawBackground() {
  context.fillStyle = '#f0f0f0';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

// Função para desenhar a cobra
function drawSnake() {
  context.fillStyle = 'green';
  for (let segment of snake) {
    context.fillRect(segment.x, segment.y, cellSize, cellSize);
  }
}

// Função para desenhar a comida
function drawFood() {
  context.fillStyle = 'red';
  context.fillRect(food.x, food.y, cellSize, cellSize);
}

// Função para exibir a pontuação e as vidas
function displayScoreAndLives() {
  context.fillStyle = 'black';
  context.font = '20px Arial';
  context.fillText('Score: ' + score, 10, 20);
  context.fillText('Lives: ' + lives, canvas.width - 100, 20); // Exibir vidas
}

// Função para atualizar a direção com base nas teclas pressionadas
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
  const key = event.key;
  if (key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
  else if (key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
  else if (key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
  else if (key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
}

// Função para mover a cobra
function moveSnake() {
  const head = snake[0];
  let newHead;

  if (direction === 'RIGHT') newHead = { x: head.x + cellSize, y: head.y };
  else if (direction === 'LEFT') newHead = { x: head.x - cellSize, y: head.y };
  else if (direction === 'UP') newHead = { x: head.x, y: head.y - cellSize };
  else if (direction === 'DOWN') newHead = { x: head.x, y: head.y + cellSize };

  // Verificar os limites
  if (newHead.x >= canvas.width) newHead.x = 0;
  if (newHead.x < 0) newHead.x = canvas.width - cellSize;
  if (newHead.y >= canvas.height) newHead.y = 0;
  if (newHead.y < 0) newHead.y = canvas.height - cellSize;

  snake.unshift(newHead);
  snake.pop();
}

// Função para verificar colisão com a comida
function checkFoodCollision() {
  const head = snake[0];
  if (head.x === food.x && head.y === food.y) {
    snake.push({ x: food.x, y: food.y });
    generateFood();
    score += 10;
  }
}

// Função para gerar comida aleatoriamente
function generateFood() {
  food.x = Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize;
  food.y = Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize;
}

// Função para verificar colisão com o corpo
function checkBodyCollision() {
  const head = snake[0];
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      lives--; // Perde uma vida
      if (lives > 0) {
        showLifeLostMessage(); // Exibe balão de perda de vida
        resetSnake(); // Reseta a cobra
      } else {
        showGameOverMessage(); // Exibe "Game Over"
      }
      break;
    }
  }
}

// Função para resetar a cobra
function resetSnake() {
  snake = [
    { x: 100, y: 100 },
    { x: 80, y: 100 },
    { x: 60, y: 100 }
  ];
  direction = 'RIGHT';
}

// Função para exibir mensagem de vida perdida
function showLifeLostMessage() {
  const lifeMessage = document.createElement('div');
  lifeMessage.textContent = `Você perdeu uma vida! Vidas restantes: ${lives}`;
  lifeMessage.style.position = 'absolute';
  lifeMessage.style.top = '50%';
  lifeMessage.style.left = '50%';
  lifeMessage.style.transform = 'translate(-50%, -50%)';
  lifeMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  lifeMessage.style.color = 'white';
  lifeMessage.style.padding = '20px';
  lifeMessage.style.borderRadius = '10px';
  lifeMessage.style.textAlign = 'center';
  document.body.appendChild(lifeMessage);

  setTimeout(() => document.body.removeChild(lifeMessage), 2000); // Remove após 2 segundos
}

// Função para exibir "Game Over"
function showGameOverMessage() {
  const gameOverMessage = document.createElement('div');
  gameOverMessage.textContent = 'Game Over! Clique em "Reiniciar" para tentar novamente.';
  gameOverMessage.style.position = 'absolute';
  gameOverMessage.style.top = '50%';
  gameOverMessage.style.left = '50%';
  gameOverMessage.style.transform = 'translate(-50%, -50%)';
  gameOverMessage.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
  gameOverMessage.style.color = 'white';
  gameOverMessage.style.padding = '20px';
  gameOverMessage.style.borderRadius = '10px';
  gameOverMessage.style.textAlign = 'center';

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Reiniciar';
  restartButton.style.marginTop = '10px';
  restartButton.style.padding = '10px';
  restartButton.style.cursor = 'pointer';
  restartButton.addEventListener('click', () => {
    document.body.removeChild(gameOverMessage);
    resetGame();
  });

  gameOverMessage.appendChild(restartButton);
  document.body.appendChild(gameOverMessage);
}

// Função para resetar todo o jogo
function resetGame() {
  snake = [
    { x: 100, y: 100 },
    { x: 80, y: 100 },
    { x: 60, y: 100 }
  ];
  direction = 'RIGHT';
  score = 0;
  lives = 3;
  generateFood();
}

// Função principal
function updateGame() {
  drawBackground();
  drawSnake();
  drawFood();
  moveSnake();
  checkFoodCollision();
  checkBodyCollision();
  displayScoreAndLives();
}

// Intervalo para atualizar o jogo
setInterval(updateGame, 150);
