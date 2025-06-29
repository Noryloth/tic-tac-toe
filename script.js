// Gameboard
const Gameboard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""]

    const showBoard = () => {
        let boardHTML = '';
        gameboard.forEach((cell, i) => {
            boardHTML += `<div class="cell" id="cell-${i}">${cell}</div>` 
        });
        document.querySelector('.gameboard').innerHTML = boardHTML;
        
        const cells = document.querySelectorAll('.cell');

        cells.forEach((cell) => {
            cell.addEventListener("click", Game.handleClick);
        })
    }

    const update = (index, value) => {
        gameboard[index] = value;
        showBoard();
    };

    const getGameboard = () => gameboard;

    return { showBoard, update, getGameboard };
})();


const createPlayer = (name, mark) => {
    return { name, mark }
}


// Game logic
const Game = (() => {
    let gameOver;
    let currentPlayerIndex;
    let players = [];

    // Start game
    const startGame = () => {
        players = [
            createPlayer(document.getElementById('player1').value, "X"),
            createPlayer(document.getElementById('player2').value, "O")
        ]

        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.showBoard();
    }

    // Handle click
    const handleClick = (event) => {
        if (gameOver) {
            return;
        }

        let index = parseInt(event.target.id.split("-")[1]);
    
        if (Gameboard.getGameboard()[index] !== '')
            return;

        Gameboard.update(index, players[currentPlayerIndex].mark);

        // Check for win
        if (checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)) {
            gameOver = true;
            if (players[currentPlayerIndex].name === '') {
            document.querySelector('.results').innerHTML = `<p>Player ${currentPlayerIndex+1} won!</p>`;
            } else {
                document.querySelector('.results').innerHTML = `<p>${players[currentPlayerIndex].name} won!</p>`;
            }
            
        } else if (checkForTie(Gameboard.getGameboard())) {
            gameOver = true;
            document.querySelector('.results').innerHTML = `<p>It's a tie!</p>`;
        }

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        
    }

    return { startGame, handleClick }
})();


// Win condition
function checkForWin(board) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}


// Tie condition
function checkForTie(board) {
    return board.every(cell => cell !== '');
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
