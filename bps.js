/****
 * getComputerChoice
 * 	generate random number seed, round it to 1-3
 * 	if 1 -> rock
 * 	if 2 -> paper
 * 	if 3 -> scissors
 *
 * getPlayerChoice
 * 	prompt user for input (promise?)
 * 	return choice
 *
 * playRound
 * 	rock and scissors = rock wins
 * 	rock and paper = paper wins
 * 	scissors and paper = scissors wins
 *
 * game
 * 	while no win counter == 5, continue
 * 		if playround() == playerwin
 * 			player++
 * 		else
 * 			computer++
 * 		if player == 5 return playerwins
 * 		if computer == 5 return compywins
 *
 ****/



function getPlayerChoice() {
	return prompt("Boulder... Parchment... or Shears???...").toLowerCase();
}

function getComputerChoice() {
	let rng = Math.floor(Math.random() * 3);
	if (rng === 1) return rock;
	if (rng === 2) return paper;
	else return scissors;
}


function playRound(p1, p2) {
	// console.log(`${player1} plays... ${p1.toUpperCase()}`);
	// console.log(`${player2} plays... ${p2.toUpperCase()}`);
	function checkLogic(p1, p2) {
		if (
		(p1 === rock && p2 === scissors) ||
		(p1 === paper && p2 === rock) ||
		(p1 === scissors && p2 === paper)) {
			return player1;
		} else if (p1 === p2) {
			return tieBreaker;
		} else {
			return player2;
		}
	}

	function updateScreen(p, pScore, sboard) {
		if (pScore === 5) {
			players.remove();
			winScreen.textContent = `${p} Wins!`;
			output.appendChild(winScreen);
			output.appendChild(btnPlayAgain);
		} else {
			sboard.textContent = `${pScore}`;
		}
	}

	let winner = checkLogic(p1, p2);
	
	if (winner === player1) {
		p1_Score += 1;
		updateScreen(winner, p1_Score, scoreBoard1);
	} else if (winner === player2) {	
		p2_Score += 1;
		updateScreen(winner, p2_Score, scoreBoard2);
	}
	
}

function resetGame() {
	p1_Score = 0;
	p2_Score = 0;
	while (output.firstChild) {
		output.firstChild.remove();
	}
	scoreBoard1.textContent = p1_Score;
	scoreBoard2.textContent = p2_Score;
	output.appendChild(players);
}


const rock = "boulder";
const paper = "parchment";
const scissors = "shears";

const player1 = "The Human";
const player2 = "The Computer";
const tieBreaker = "TIE!!!";

// Score Counters
let p1_Score = 0;
let p2_Score = 0;

/* ------------ Buttons + Screen ------------ */
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

// "Play again" Button
const btnPlayAgain = document.createElement('button');
btnPlayAgain.textContent = 'Play Again?';

// The "Screen"
const output = document.querySelector(".output");

// Player Containers
const players = document.querySelector(".players");

// Score Containers
const scoreBoard1 = document.querySelector(".score1");
const scoreBoard2 = document.querySelector(".score2");

// Win 
let winScreen = document.createElement('div');
/* winScreen.style.flex */

// Set names on screen = to names of players
document.querySelector('.player1').firstElementChild.textContent = player1;
document.querySelector('.player2').firstElementChild.textContent = player2;
/* ------------------------------------------ */


// Button Event Listeners
btnRock.addEventListener("click", () => {
	playRound(rock, getComputerChoice());
});

btnPaper.addEventListener("click", () => {
	playRound(paper, getComputerChoice());
});

btnScissors.addEventListener("click", () => {
	playRound(scissors, getComputerChoice());
});

btnPlayAgain.addEventListener("click", () => {
	resetGame();
});

