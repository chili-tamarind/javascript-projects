// There is one mistake in whoWon. You might spot it on your own, but try to use automated testing to identify and fix it.

function whoWon(player1,player2){

  let hand = ['rock', 'scissors', 'paper'];

  if (!hand.includes(player1) || !hand.includes(player2)){         // Incorrect entry
    return 'ERROR: Incorrect hand played!';
  }
  else {                                                          // Play regular game
    if (player1 === player2){
      return 'TIE!';
    }
    
    if (player1 === 'rock' && player2 === 'paper'){
      return 'Player 2 wins!';
    }
    
    if (player1 === 'paper' && player2 === 'scissors'){
      return 'Player 2 wins!';
    }
    
    if (player1 === 'scissors' && player2 === 'rock '){
      return 'Player 2 wins!';
    }
}

  return 'Player 1 wins!'; // ERROR?
}

module.exports = {
  whoWon: whoWon
};