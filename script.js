const playerOneSign = prompt("Is player 1 player X?(true/false)");
const isPlayerOneX = (playerOneSign === 'true');

// player object FF 
const Player = (sign, bot) => {
    getSign = () => sign;
    isBot = () => bot;
    return {getSign, isBot};
}

// function to create player object
const createPlayer = (isX ,bot) => {
    const sign = isX ? 'X' : 'O';
    return newPlayer = Player(sign, bot);
}

const playerOne = createPlayer(isPlayerOneX, false);
const playerTwoBot = prompt("Is player 2 a bot?(true/false)");
const playerTwo = createPlayer(!isPlayerOneX, playerTwoBot);
// create players out of user responses






// const newPlayers = () => {

// }
// const createPlayers = () => {

// const inputPlayerSign = prompt("Is player 1 player X?(true/false)");
//     (inputPlayerSign === 'true') ? createPlayer(true, false) : createPlayer( false, false);
// const inputPlayerBot = prompt("Is player 2 a bot?(true/false)");
//     (inputPlayerBot === 'true') ? createPlayer(, true) : createPlayer(, false);
// }

// module for the gameboard
// const gameBoard = (() => {

// })();
let gameArray = new Array();
for(let i = 0; i < 9; i++)
{gameArray.push(' ');}

let twoScore = 0;
let oneScore = 0;

const displayArray = () => {
    let charString = '------';
    for(let i = 0; i < 9; i += 3)
    {
        console.log(charString);
        let tttString = '';
        for(let j = 0; j < 3; j++)
        {
            tttString += ' | ' + gameArray[i+j] + ' | ';
        }
        console.log(tttString);
    }
}

// const displayController = (() => {

// })();


const displayBoard = () => {

    displayScore();
    displayArray();
}
const displayScore = () => {
    console.log("Player 1: " + playerOne.getSign + "  Score: " + oneScore);
    console.log("Player 2:" + playerTwo.getSign + "  Score: " + twoScore);
}

displayBoard();

const gameBoard = () => {

}

const clickLogic = (player, pos) => {
    gameArray[pos] = player.getSign;
}

const gameLogic = () => {
    // check for game over?
    // win, loss or tie
    //check if 
}

