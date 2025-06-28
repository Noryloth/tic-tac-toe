// Gameboard
const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const showBoard = () => {
        let cellDiv = '';
        gameboard.forEach((cell, i) => {
            cellDiv = document.createElement('button');
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

    // Start game
    const startGame = () => {
        gameOver = false;
        Gameboard.showBoard();

        // Place X on button press
        const cells = document.querySelectorAll('.cell');

        cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                cell.textContent = "X";
                cell.disabled = true;
            })
        })
    }

    // Place mark
    const placeMark = (event) => {
        alert("Hello World")
    }

    return { startGame, placeMark }
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
