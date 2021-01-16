const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const scoreboard = {
    player: 0,
    computer: 0
}

choices.forEach(choice => choice.addEventListener('click', play));

function disableButtons() {
    choices.forEach(elem => {
        elem.disabled = true;
    })
}

function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if(rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "The result is a tie!";
    } else if(playerChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if(playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if(playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        scoreboard.player++;
        result.innerHTML = 
        `<h1 class="text-win">You Win!
        <br>Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</br></h1>`
        
    } else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = 
        `<h1 class="text-lose">You Lose!
        <br>Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</br></h1>`
    } else {
        result.innerHTML = 
        `<h1>It's A Draw
        <br>Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</br></h1>`
    }
    score.innerHTML = 
        `<p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>`;
    if (scoreboard.player === 5 && scoreboard.computer === 5) {
        result.innerHTML =
        `<h1 class=game-over>Tie! Game Over</h1>`;
        disableButtons();
    } else if (scoreboard.player === 5) {
        result.innerHTML =
        `<h1 class=text-gamewon>You Won The Game!</h1>`;
        disableButtons();
    } else if (scoreboard.computer === 5) {
        result.innerHTML =
        `<h1 class=text-gamelost>You Lost The Game!</h1>`;
        disableButtons();
    }

}


