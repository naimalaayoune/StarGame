let score = 0;
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    const maxTop = gameArea.clientHeight - 40;
    const maxLeft = gameArea.clientWidth - 40;

    star.style.top = Math.random() * maxTop + "px";
    star.style.left = Math.random() * maxLeft + "px";

    gameArea.appendChild(star);

    star.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        star.remove();
    });

    setTimeout(() => {
        if (gameArea.contains(star)) {
            star.remove();
        }
    }, 4000);
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameArea.innerHTML = "";
}

setInterval(createStar, 1500);