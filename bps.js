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
	const rng = Math.floor(Math.random() * 3);
	if (rng === 1) return rock;
	if (rng === 2) return paper;
	else return scissors;
}


function playRound(p1, p1_score, p2, p2_score) {
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

	let winner = checkLogic(p1, p2);
	
	if (winner === player1) {
		p1_Score += 1;
		if (p1_Score === 5) {
			winScreen.textContent = 'P1 Wins!';
			output.appendChild(winScreen);
			output.appendChild(btnPlayAgain);
		}
	} else {	
		p2_Score += 1;
		if (p2_Score === 5) {
			winScreen.textContent = 'P2 Wins!';
			output.appendChild(winScreen);
			output.appendChild(btnPlayAgain);
		}
	}
	
}

function resetGame() {
	p1_Score = 0;
	p2_Score = 0;
	while (output.firstChild) {
		output.firstChild.remove();
	}
}


const rock = "boulder";
const paper = "parchment";
const scissors = "shears";

const player1 = "The Human";
const player2 = "The Computer";
const tieBreaker = "TIE!!!";

// Buttons + Screen
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

const output = document.querySelector(".output");

const btnPlayAgain = document.createElement('button');
btnPlayAgain.textContent = 'Play Again?'

// Win "Screens"
let winScreen = document.createElement('div');

// Score Counters
let p1_Score = 0;
let p2_Score = 0;

// Button Event Listeners
btnRock.addEventListener("click", () => {
	playRound(rock, p1_Score, getComputerChoice(), p2_Score)
});

btnPaper.addEventListener("click", () => {
	playRound(paper, p1_Score, getComputerChoice(), p2_Score)
});

btnScissors.addEventListener("click", () => {
	playRound(scissors, p1_Score, getComputerChoice(), p2_Score)
});

btnPlayAgain.addEventListener("click", () => {
	resetGame();
});

