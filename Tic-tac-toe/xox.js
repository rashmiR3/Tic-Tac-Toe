let board = Array(9).fill(null);
let currentplayer = 'X';
let gameactive = true;

const winningcombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleClick(cell, index) {
    if (gameactive && !board[index]) {
        board[index] = currentplayer;
        cell.innerText = currentplayer;
        if (checkwinner()) {
          var wins=  document.getElementById('status')
          wins.innerText = `***${currentplayer} wins***`;
          wins.style.fontSize="50px";
          wins.style.fontWeight="1000"
          gameactive = false;
        } 
        else if (!board.includes(null)) {
           var draws= document.getElementById('status')
           draws.innerText = "Match draw!";
            gameactive = false;
        } 
        else {
            currentplayer = currentplayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkwinner() {
    return winningcombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetgame() {
    board.fill(null);
    gameactive = true;
    currentplayer = 'X';
  var status=  document.getElementById('status')
  status.innerText = '';
   var empty= document.querySelectorAll('.cell')
   empty.forEach(cell => cell.innerText = '');
// }
}

