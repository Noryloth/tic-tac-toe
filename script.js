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
                
                let randNum = generateRandomNumber();
                let randCell = cells[randNum];

                console.log(randNum);


                // These lines don't work and produce infinite loop
                if (randCell.textContent !== '') {
                    while (randCell.textContent !== '') {
                        generateRandomNumber();
                        if (randCell.textContent === '') {
                        randCell.textContent = "O";
                        randCell.disabled = true;
                    }
                    }
                } else {
                    randCell.textContent = "O";
                    randCell.disabled = true;
                }
                
            })
        })
    }

    return { startGame }
})();


function generateRandomNumber() {
    return Math.floor(Math.random() * 9);
}


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
