const board = ['','','','','','','','',''];
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let currentPlayer = 'X';

console.log('Game started. Current Player:', currentPlayer);

function switchPlayer(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    console.log('Switched Player. Now playing:', currentPlayer);
}
    function checkWin() {
        for(const combination of winningCombinations) {
            const[ a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[b] === board[c]){
                console.log('Winning combination found:', combination)
                return currentPlayer;
            }
        }
        return null;
    }
    function checkTie() {
        return !board.includes('');
    }
    
    document.querySelectorAll('.cell') .forEach((cell, index) => {
        cell.addEventListener('click',() => {
            console.log('Cell clicked:', index);

            if (board[index] === '') {
                board[index] = currentPlayer;
                cell.innerText = currentPlayer;
                const winner = checkWin();
                if (winner) {
                    console.log('Game won by:', winner)
                    alert(`${winner} wins!`);
                    resetBoard();
                } else if (checkTie()) {
                    console.log('Game ended in a tie');
                    alert("It's a tie!");
                    resetBoard();
                }else {
                    switchPlayer();
                } 
                } else {
                    console.log('Invalid move: cell already taken');
                    alert("Cell already taken! Choose another cell.");
            }
        });
    });

    function resetBoard() {
        board.fill('');
        document.querySelectorAll('.cell'). forEach((cell) => {
            cell.innerText = '';
        });
        currentPlayer = 'X';
        console.log('Game reset. Current player:', currentPlayer);
    }

