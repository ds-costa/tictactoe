const winSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const UILocaleStrings = {
    "pt-br": {
        gameStart: "Inicio de jogo. Jogador 1 faça sua jogada!",
        winner: (playerNumber) => `Jogador ${playerNumber} vence!`,
        playerName: (playerNumber) => `Turno do Jogador ${playerNumber}!`,
        draw: 'É um empate!'
    },
    "us-en": {
        gameStart: "Game Start. Player 1 make your movement!",
        winner: (playerNumber) => `Player ${playerNumber} wins!`,
        playerName: (playerNumber) => `Player ${playerNumber} Turn!`,
        draw: 'Its a DRAW!!!'
    }
}

// ui handling
class UI {

    constructor() {
        this.boardCells = document.querySelectorAll('.cell');
        this.currentPlayerLabel = document.querySelector('.text-label'); 
        this.btnNewGame = document.querySelector('#btn-new-game');
        this.language = "us-en";
        this.currentPlayerLabel.innerText = UILocaleStrings[this.language].gameStart;
    }

    reset() {
        this.currentPlayerLabel.innerText = UILocaleStrings[this.language].gameStart;
        this.boardClear();
    }

    boardClear() {
        for(const cell of this.boardCells) {
            if(cell.hasChildNodes()) {
                cell.removeChild(cell.childNodes[0]);
            }
        }
    }
}

// state handling
class GameState {
    
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.isPlayerOneTurn = true;
        this.hasAWinner = false;
    }

    reset() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.isPlayerOneTurn = true;
        this.hasAWinner = false;
    }

    hasPlayerMovementDataAt(position) {
        return this.board[position] !== '';
    }

    isAWinnerSequence(seq) {
        return this.board[seq[0]] === this.board[seq[1]] && this.board[seq[1]] === this.board[seq[2]];
    }

    log() {
        console.log(this.board);
        console.log(this.isPlayerOneTurn);
    }
};

function setup(gameState, gameUI) {
    gameUI.btnNewGame.addEventListener('click', () => reset(gameState, gameUI));
    gameUI.boardCells.forEach((element, index) => {
        element.addEventListener('click', () => handlePlayerMovement(gameState, gameUI, element, index));   
    });
}

function reset(gameState, gameUI) {
    gameState.reset();
    gameUI.reset();
}

function hasCellData(cell) {
    return cell.childElementCount > 0;
}

function handlePlayerMovement(gameState, gameUI, cell, index) {

    console.log(`Handling ${gameState.isPlayerOneTurn ? '1' : '2'} Player  Movement at position ${index}`);

    //check if the cell has some data
    if(gameState.hasAWinner || hasCellData(cell)) {
        return;
    }

    // state update
    const currentPlayerSymbol = gameState.isPlayerOneTurn ? 'X' : 'O'; // x:p1 o:p2
    let currentPlayerTurn = gameState.isPlayerOneTurn ? '1' : '2';
    gameState.board[index] = currentPlayerSymbol;

    // ui update
    cell.innerHTML = `<p class="box__player-option">${currentPlayerSymbol}</p>`;


    if(checkForWinners(gameState)) {
        gameState.hasAWinner = true;
        gameUI.currentPlayerLabel.innerText = UILocaleStrings[gameUI.language].winner(currentPlayerTurn);
        console.log(`${currentPlayerTurn} wins`);
        return;
    }

    if(isADraw(gameState)) {
        gameState.hasAWinner = true;
        gameUI.currentPlayerLabel.innerText = UILocaleStrings[gameUI.language].draw;
        console.log(`Draw!`);
        return;   
    }

    gameState.isPlayerOneTurn = !gameState.isPlayerOneTurn;
    currentPlayerTurn = gameState.isPlayerOneTurn ? '1' : '2';
    gameUI.currentPlayerLabel.innerText = UILocaleStrings[gameUI.language].playerName(currentPlayerTurn);

}

function isADraw(gameState) {
    return !gameState.board.includes('');
}

function checkForWinners(gameState) {

    for(seq of winSequences) {
        if(gameState.hasPlayerMovementDataAt(seq[0])) {
            if(gameState.isAWinnerSequence(seq)) {
                return true;
            }
        }
    }

    return false;
}

const gameState = new GameState();
const gameUI = new UI();

setup(gameState, gameUI);