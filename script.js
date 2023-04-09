// const playerOneSign = prompt("Is player 1 player X?(true/false)");
// const isPlayerOneX = (playerOneSign === 'true');

// // player object FF 
// const Player = (sign, bot) => {
//     getSign = () => sign;
//     isBot = () => bot;
//     return {getSign, isBot};
// }

// // function to create player object
// const createPlayer = (isX ,bot) => {
//     const sign = isX ? 'X' : 'O';
//     return newPlayer = Player(sign, bot);
// }

// const playerOne = createPlayer(isPlayerOneX, false);
// const playerTwoBot = prompt("Is player 2 a bot?(true/false)");
// const playerTwo = createPlayer(!isPlayerOneX, playerTwoBot);
// // create players out of user responses






// // const newPlayers = () => {

// // }
// // const createPlayers = () => {

// // const inputPlayerSign = prompt("Is player 1 player X?(true/false)");
// //     (inputPlayerSign === 'true') ? createPlayer(true, false) : createPlayer( false, false);
// // const inputPlayerBot = prompt("Is player 2 a bot?(true/false)");
// //     (inputPlayerBot === 'true') ? createPlayer(, true) : createPlayer(, false);
// // }

// // module for the gameboard
// // const gameBoard = (() => {

// // })();
// let gameArray = new Array();
// for(let i = 0; i < 9; i++)
// {gameArray.push(' ');}

// let twoScore = 0;
// let oneScore = 0;

// const displayArray = () => {
//     let charString = '------';
//     for(let i = 0; i < 9; i += 3)
//     {
//         console.log(charString);
//         let tttString = '';
//         for(let j = 0; j < 3; j++)
//         {
//             tttString += ' | ' + gameArray[i+j] + ' | ';
//         }
//         console.log(tttString);
//     }
// }

// // const displayController = (() => {

// // })();


// const displayBoard = () => {

//     displayScore();
//     displayArray();
// }
// const displayScore = () => {
//     console.log("Player 1: " + playerOne.getSign + "  Score: " + oneScore);
//     console.log("Player 2:" + playerTwo.getSign + "  Score: " + twoScore);
// }

// displayBoard();

// const gameBoard = () => {

// }

// const clickLogic = (player, pos) => {
//     gameArray[pos] = player.getSign;
// }

// const gameLogic = () => {
//     // check for game over?
//     // win, loss or tie
//     //check if 
// }


const playerOne = {
    sign: "x",
    bot: false,
    score: 0
};
//lower case sign since easier to type
const playerTwo = {
    sign: "o",
    bot: false,
    score: 0
}
let gameArray = new Array();
for(let i = 0; i < 9; i++)
{gameArray.push(' ');}

let playerOnesTurn = true;

const gridSquares = document.querySelectorAll('.grid_squares');

const executeListeners = () => {
    gridSquares.forEach((square) => {

            square.addEventListener('click', () => {

                if(square.textContent === ' ')
                    {
                        if(playerOnesTurn === true)
                        {
                            square.textContent = playerOne.sign;
                            let squareId = square.getAttribute('id');
                            updateArray(squareId,gameArray,playerOne.sign);
                            square.removeEventListener;
                            playerOnesTurn = false;
                            nextTurn(playerTwo);
                        } 
                        else
                        {
                            square.textContent = playerTwo.sign;
                            let squareId = square.getAttribute('id');
                            updateArray(squareId, gameArray, playerTwo.sign); 
                            square.removeEventListener;
                            playerOnesTurn = true;
                            nextTurn(playerOne);
                        }
                    }

                gameState();
            });
    });
};
executeListeners();

// updates text to note whose turn is it
const nextTurn = (player) => {
    const turnSign = document.querySelector('#turn_sign');
    turnSign.textContent = player.sign;

}

// updates the array given a sign
const updateArray = (idName, array, sign) => {
    gameArray[Number(idName.charAt(5))-1] = sign;
}

//checks possibility of tie or winner
const gameState = () => {
    if(gameTie() === true)
    {
        gameOver(true, false);
    }
    if(gameWinner() === true)
    {
        gameOver(false, true);
    }
}
//checks if tie game: if all squares filled
const gameTie = () => {

    let tie = true;
    for(let i = 0; i < gameArray.length; i++){
        if(gameArray[i] === ' ') 
        {
            tie = false;
            break;
        }
    }
    return tie;
}
let signPosition = 0;

// algorithm to check possible consecutive signs
const gameWinner = () => {

    let winner = false;
   
    // if 012   345     678 have matching signs = winner
    if(fullSeq(0,1,2) === true)
    {   if(matchSigns(0,1,2) === true)
        {winner = true; signPosition = 0;}
    }
    else if(fullSeq(3,4,5) === true){       
        if(matchSigns(3,4,5) === true)
        {winner = true; signPosition = 3;}
    }
    else if(fullSeq(6,7,8) === true)
    {   if(matchSigns(6,7,8) === true)
        {winner = true; signPosition = 6;}
    }


    // if 036   147     258 have matching signs = winner
    if(fullSeq(0,3,6) === true)
    {   if(matchSigns(0,3,6) === true)
        {winner = true; signPosition = 0}
    }
    else if(fullSeq(1,4,7) === true){       
        if(matchSigns(1,4,7) === true)
        {winner = true; signPosition = 1;}
    }
    else if(fullSeq(2,5,8) === true)
    {   if(matchSigns(2,5,8) === true)
        {winner = true; signPosition = 2;}
    }

    // if 048   or  246 have matching signs = winner
    if(fullSeq(0,4,8) === true)
    {   if(matchSigns(0,4,8) === true)
        {winner = true; signPosition = 0;}
    }
    else if(fullSeq(2,4,6) === true){       
        if(matchSigns(2,4,6) === true)
        {winner = true; signPosition = 2;}
    }
    return winner;
}

// checks if the game over is for a tie or winner
const gameOver = (tie, winner) => {

    const gameResult = document.querySelector('#game_result');
    if(tie === true)
    {
        gameResult.textContent = 'Game Over! Tie Game.';
    }
    if(winner === true)
    {
        gameResult.textContent = 'Game Over! Winner is: ' + gameArray[signPosition] + '.';
    }
} 

//checks if there is a 3 consecutive signs
const fullSeq = (pos0, pos1, pos2) => {
    let seqFull = false;
    if(gameArray[pos0] !== ' ' && gameArray[pos1] !== ' ' && gameArray[pos2]!==  ' ')
    {
        seqFull = true;
    }
    return seqFull;
}

//checks if the cons. signs are the same
const matchSigns = (pos0, pos1, pos2) => {
    let matching = false;
    if(gameArray[pos0] === gameArray[pos1] && gameArray[pos0] === gameArray[pos2])
    {
        matching = true;
    }
    return matching;
}

// restart button
const btnRestart = document.querySelector('#button_restart');


const restartGame = () => {
    resetArray();
    resetBoard();
    signPosition = 0;
    playerOnesTurn = true; 
}

const resetArray = () => {
    for(let i = 0; i< gameArray.length; i++)
    {
        gameArray[i] = ' ';
    }
}

const resetBoard = () => {
    gridSquares.forEach((square) => {
        square.textContent = ' '
    })
    const turnSign = document.querySelector('#turn_sign');
    turnSign.textContent = 'x';
    const gameResult = document.querySelector('#game_result');
    gameResult.textContent = 'Game not over.';
}

btnRestart.addEventListener('click', () => { restartGame()});