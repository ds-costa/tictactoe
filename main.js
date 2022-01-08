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

class UI {

    constructor() {
        this.boardCells = document.getElementsByClassName('cell');
        this.currentPlayerLabel = document.getElementsByName('text-label'); 
        this.btnNewGame = document.getElementById('btn-new-game');
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

    // getPlayerSymbol() {
    //     return `<p class="box__player-option">${this.isPlayerOneTurn ? 'X' : 'O'}</p>`;
    // }
};

const gameState = new GameState();
const gameUI = new UI();

function setup() {
    gameUI.btnNewGame.addEventListener('click', () => gameUI.reset());
}

setup();