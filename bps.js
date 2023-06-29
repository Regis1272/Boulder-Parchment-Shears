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

const rock = "boulder";
const paper = "parchment";
const scissors = "shears";

const player1 = "The Human";
const player2 = "The Computer";
const tieBreaker = "TIE!!!";

function getPlayerChoice() {
	return prompt("Boulder... Parchment... or Shears???...").toLowerCase();
}

function getComputerChoice() {
	const rng = Math.floor(Math.random() * 3);
	if (rng === 1) return rock;
	if (rng === 2) return paper;
	else return scissors;
}

function playRound(p1, p2) {
	console.log(`${player1} plays... ${p1.toUpperCase()}`);
	console.log(`${player2} plays... ${p2.toUpperCase()}`);

	if (
	(p1 === rock && p2 === scissors) ||
	(p1 === paper && p2 === rock) ||
	(p1 === scissors && p2 === paper)) {
		console.log(`${player1} wins this round! ${p1} beats ${p2}!`);
		return player1;
	} else if (p1 === p2) {
		return tieBreaker;
	} else {
		console.log(`${player2} wins this round! ${p2} beats ${p1}!`);
		return player2;
	}
}

function game() {
	let p1_Score = 0;
	let p2_Score = 0;
	let winner = '';

	while (p1_Score !== 5 && p2_Score !== 5) {
		let p1 = getPlayerChoice();
		let p2 = getComputerChoice();

		let winner = playRound(p1, p2);

		if (winner === player1) {
			p1_Score += 1;
		} else if (winner === tieBreaker) {
			console.log(tieBreaker);
		} else {
			p2_Score += 1;
		}
	}
	
	console.log("player 1 score: " + p1_Score + "\nplayer 2 score: " + p2_Score);
		
	if (p1_Score > p2_Score) {
		winner = player1;
	} else {
		winner = player2;
	}
	
	console.log(`${winner} wins the game!`);
	return winner;
}

game();
// console.log(playRound(getPlayerChoice(), getComputerChoice()));


