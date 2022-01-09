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
        winner: (winnerNumber) => `Jogador ${winnerNumber} vence!`,
        playerName: (playerNumber) => `Jogador ${playerNumber}`
    },
    "us-en": {
        gameStart: "Game Start. Player 1 make your movement!",
        winner: (winnerNumber) => `Player ${winnerNumber} wins!`,
        playerName: (playerNumber) => `Player ${playerNumber}`
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
        console.log(this.currentPlayerLabel);
    }

    reset() {
        this.currentPlayerLabel.innerText = UILocaleStrings[this.language].gameStart;
        this.boardClear();
    }

    boardClear() {
        for(const cell of this.boardCells) {
            console.log(cell);
        }
    }
}

// state handling
class GameState {
    
    constructor() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.isPlayerOneTurn = true;
    }

    reset() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.isPlayerOneTurn = true;
    }

    log() {
        console.log(this.board);
        console.log(this.isPlayerOneTurn);
    }
};

const gameState = new GameState();
const gameUI = new UI();

setup();