// Gameboard
const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const showBoard = () => {
        let cellDiv = '';
        gameboard.forEach((cell, i) => {
            cellDiv = document.createElement('div');
            cellDiv.className = "cell";
            cellDiv.id = `cell-${i}`;
            cellDiv.textContent = `${cell}`;

            document.querySelector('.gameboard').appendChild(cellDiv);
        });
        
    }

    return { showBoard };
})();


// Game logic
const Game = (() => {
    let gameOver;

    const startGame = () => {
        gameOver = false;
        Gameboard.showBoard();
    }
    
    return { startGame }
})();


// Start game button
const startButton = document.querySelector('.start-button');
startButton.addEventListener("click", () => {
        Game.startGame(); 
        startButton.disabled = true;
});


// Restart game button
const restartButton = document.querySelector('.restart-button');
restartButton.addEventListener("click", () => {
    location.reload();
}); 
