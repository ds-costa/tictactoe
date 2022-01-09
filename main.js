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

// ui handling
class UI {

    constructor() {
        this.boardCells = document.querySelectorAll('.cell');
        this.currentPlayerLabel = document.querySelector('.text-label'); 
        this.btnNewGame = document.querySelector('#btn-new-game');
    }

    reset() {
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

// setup();
// update();