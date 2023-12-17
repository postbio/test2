const bird = document.getElementById('bird');
let birdY = 200;
let gravity = 2;
let jump = -30;
let gameRunning = true;

function gameLoop() {
    if (gameRunning) {
        birdY += gravity;
        bird.style.top = birdY + 'px';

        if (birdY >= window.innerHeight || birdY <= 0) {
            gameOver();
        }

        requestAnimationFrame(gameLoop);
    }
}

function jumpBird() {
    birdY += jump;
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        jumpBird();
    }
});

function gameOver() {
    gameRunning = false;
    alert('Game Over!');
}

gameLoop();