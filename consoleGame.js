// This code became deprecated after implementing a UI. Keeping it for posterity.

// This function when called runs a game of bps.js in the console.
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
			// console.log(tieBreaker);
		} else {
			p2_Score += 1;
		}
	}
	
	// console.log("player 1 score: " + p1_Score + "\nplayer 2 score: " + p2_Score);
		
	if (p1_Score > p2_Score) {
		winner = player1;
	} else {
		winner = player2;
	}
	
	//console.log(`${winner} wins the game!`);
	return winner;
}

