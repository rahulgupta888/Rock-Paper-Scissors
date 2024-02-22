
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
/*
if (score === null)    <- || ->    if(!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
} 
*/
updateScoreElement();


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose!';
        } else if (computerMove === 'Paper') {
            result = 'You Win!';
        } else if (computerMove === 'Scissors') {
            result = 'Tie!';
        }

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win!';
        } else if (computerMove === 'Paper') {
            result = 'Tie!';
        } else if (computerMove === 'Scissors') {
            result = 'You lose!';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie!';
        } else if (computerMove === 'Paper') {
            result = 'You lose!';
        } else if (computerMove === 'Scissors') {
            result = 'You Win!';
        }
    }

    if (result === 'You Win!') {
        score.wins += 1;

    } else if (result === 'You lose!') {
        score.losses += 1;

    } else if (result === 'Tie!') {
        score.ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.result').
        innerHTML = result;

    document.querySelector('.moves').innerHTML
        = `You 
        <img class="Moves-icon" src="assessts/images/${playerMove}-emoji.png">
        <img class="Moves-icon" src="assessts/images/${computerMove}-emoji.png">
        Computer`;

}


function updateScoreElement() {
    document.querySelector('.js-score').
        innerHTML = `Wins: ${score.wins} &nbsp; Losses: ${score.losses} &nbsp Ties: ${score.ties}`;
}

function pickComputerMove() {

    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}