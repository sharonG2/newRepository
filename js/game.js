'use strict'

var gTotalSeconds = 0;
var gIsFirstClick = true

var gBoard;
const MINE = '💣'
const FLAG = '🎏'

function initGame(){
    gBoard = buildBoard()
    randomizeMinesLocation(gBoard)
    setMinesNegsCount(gBoard)
    renderBoard(gBoard)
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < 4; i++) {
        board[i] = []
        for (var j = 0; j < 4; j++) {
            board[i][j] = {
                isShown: false,
                isMine: false,
                isMarked: true 
                }
        }
    }

    return board;
}


function cellClicked(event, elCell, i, j)
{
    var elDiv = elCell.querySelector('.divCell') 
    elDiv.addEventListener("contextmenu", e =>  { 
        e.preventDefault()
        elDiv.innerHTML = FLAG
    });

    if(gIsFirstClick){
        startTimer()
        gIsFirstClick = false
    }
       
    
    // if(elDiv.isMine){
    //     randomizeMinesLocation(gBoard)
    // }
    elDiv.style.display = 'block'
    // expandCells(elCell, i, j, gBoard)
}



// function expandCells(elCell, i, j, gBoard) {
//     if (!onBoard(i, j, gBoard) || gBoard[i][j].minesAroundCount > 0) return;

//     var elDiv = elCell.querySelector(`.cell-${i}-${j}`)

//     elDiv.style.display = 'block'
//     expandCells(i + 1, j, gBoard)
//     expandCells(i - 1, j, gBoard)
//     expandCells(i, j + 1, gBoard)
//     expandCells(i, j - 1, gBoard)
// }

// function onBoard(i, j, gBoard) {
//     return i >= 0 && j >= 0 && i <= gBoard.length && j <= gBoard[0].length
// }

function randomizeMinesLocation(board){
    var randomNum = getRandomIntInclusive(0, gBoard.length - 1)
    board[randomNum][randomNum].isMine = true 
    randomNum = getRandomIntInclusive(0, gBoard.length - 1)
    board[randomNum][randomNum].isMine = true     
}


function cellMarked(elCell){

}

function checkGameOver(){

}

function expandShown(board, elCell, i, j){

}
