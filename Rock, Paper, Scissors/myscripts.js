// global variables 
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundNumber = 0;
let scoreText = document.querySelector(".choice-text");
let rockCat = document.querySelector("#rock-cat");
let paperCat = document.querySelector("#paper-cat");
let scissorCat = document.querySelector("#scissor-cat");
let resultText = document.querySelector(".result-text");
let questionMark = document.querySelector('#question-mark')
let button = document.querySelector('button');

// player selection pieces
rockCat.addEventListener('click', function(){
    let playerSelection = 'rock'
    playRound(playerSelection, computerPlay());
    vanishRock();
    roundNumber++;
    gameEnd();
    
});

paperCat.addEventListener('click', function(){
    let playerSelection = 'paper'
    console.log(this);
    playRound(playerSelection, computerPlay());
    roundNumber++;
    vanishPaper();
    gameEnd();
});

scissorCat.addEventListener('click', function(){
    let playerSelection = 'scissors'
    console.log(this);
    playRound(playerSelection, computerPlay());
    vanishScissor();
    roundNumber++;
    gameEnd();
});


// functions to make other non selected cats disappear
function vanishPaper(){
      rockCat.classList.add('game'); 
      setTimeout(function(){ 
      rockCat.classList.toggle('game'); 
    }
    ,500); 
    scissorCat.classList.add('game'); 
      setTimeout(function(){ 
      scissorCat.classList.toggle('game'); 
    }
    ,500); 
    }

function vanishRock(){
      paperCat.classList.add('game'); 
      setTimeout(function(){ 
      paperCat.classList.toggle('game');
    }
    ,500); 
      scissorCat.classList.add('game'); 
      setTimeout(function(){ 
      scissorCat.classList.toggle('game'); 
    }
    ,500); 
    }
function vanishScissor(){
      paperCat.classList.add('game'); 
      setTimeout(function(){ 
      paperCat.classList.toggle('game'); 
    }
    ,500); 
      rockCat.classList.add('game'); 
      setTimeout(function(){ 
      rockCat.classList.toggle('game'); 
    }
    ,500); 
    }


// commputer random move
function computerPlay() {
    const moves = ['rock', 'paper', 'scissors'];
    let computerSelection = moves[Math.floor(Math.random() * 3)];

    questionMark.src = `assets/${computerSelection}.png`
    return computerSelection;
}
// checking to see if 5 rounds have happened
function gameEnd() {
    if (roundNumber === 5){
        document.querySelector('.result-text').textContent = 'Game Over'
        if (playerScore > computerScore){
            document.querySelector('.result-text').textContent = 'You won the match!'
        } else if (computerScore > playerScore) {
            document.querySelector('.result-text').textContent = 'You lost the match!'
        } else if (playerScore === computerScore) {
            document.querySelector('.result-text').textContent = "Looks like a tie!"
        }
        gameReset();
    }
    
}
// removing content and adding play again button
function gameReset(){
    
    document.querySelector('.container').classList.add('game')
    document.querySelector('.game').classList.remove('game')
}

// play again button
button.addEventListener('click', function(){
    playerScore = 0;
    document.querySelector('#player-score').textContent = playerScore
    computerScore = 0;
    document.querySelector('#computer-score').textContent = computerScore
    tieScore = 0;
    document.querySelector('#tie-score').textContent = tieScore
    roundNumber = 0;
    resultText.textContent = 'Make a move by clicking a cat! Best out of 5 wins!'
    document.querySelector('.game').classList.remove('game')
    document.querySelector('.box').classList.add('game')
    questionMark.src = 'assets/question_mark.png'
});


// game logic for who wins/loses
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        document.querySelector('.result-text').textContent = `You Won! You chose ${playerSelection}
        which beats ${computerSelection}`
        document.querySelector('#player-score').textContent = playerScore
        
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        document.querySelector('.result-text').textContent = `You Won! You chose ${playerSelection}
        which beats ${computerSelection}`
        document.querySelector('#player-score').textContent = playerScore
        
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        document.querySelector('.result-text').textContent = `You Won! You chose ${playerSelection}
        which beats ${computerSelection}`
        document.querySelector('#player-score').textContent = playerScore
        
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        document.querySelector('.result-text').textContent = `You Lost! You chose ${playerSelection}
        which loses to ${computerSelection}`
        document.querySelector('#computer-score').textContent = computerScore
        
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        document.querySelector('.result-text').textContent = `You Lost! You chose ${playerSelection}
        which loses to ${computerSelection}`
        document.querySelector('#computer-score').textContent = computerScore
        
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        document.querySelector('.result-text').textContent = `You Lost! You chose ${playerSelection}
        which loses to ${computerSelection}`
        document.querySelector('#computer-score').textContent = computerScore
        
        
    } else {
        tieScore++
        document.querySelector('.result-text').textContent = `You Tied! You chose ${playerSelection}
        which ties with ${computerSelection} there have been ${tieScore} ties.`
        document.querySelector('#tie-score').textContent = tieScore
    }
    
}

if (playerScore == 5){
    document.querySelector('.result-text').textContent = 'You won the match!'
} else if (computerScore == 5) {
    document.querySelector('.result-text').textContent = 'You lost the match!'
}

let game = function(){
    playRound(playerSelection, computerPlay());

    if (playerScore == 5){
        document.querySelector('.result-text').textContent = 'You won the match!'
    } else if (computerScore == 5) {
        document.querySelector('.result-text').textContent = 'You lost the match!'
    };
}