const BOX_QUANTITY = 9;

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

const HTMLtemplates = {
    emptyCell: `<div class="cell"></div>`,
    playerSymbol: (isPlayerOne) => `<p class="box__player-option">${isPlayerOne ? 'X' : 'O'}</p>`
};

const board = ['', '', '', '', '', '', '', '', ''];
const boardElement = document.querySelector('.board');
let isPlayerOneTurn = true;

for (let i = 0; i < BOX_QUANTITY; i++) {
    boardElement.innerHTML += HTMLtemplates.emptyCell;
}

let cells = document.querySelectorAll('.cell');

cells.forEach((cell, index) => {
    cell.addEventListener('click', (e) => {
        e.preventDefault();

        cell.innerHTML = HTMLtemplates.playerSymbol(isPlayerOneTurn);
        cell.classList.add('cell--active');
        board[index] = isPlayerOneTurn ? 'X' : 'O';
        isPlayerOneTurn = !isPlayerOneTurn;

        document.querySelector('.text-label').innerText = isPlayerOneTurn ? "Player 1 nick" : "Player 2 nick";

    }, { once: true })
})

/**
 * Client code
 */
function main() {



    /**
     * Events
     */
    return;
}

main();