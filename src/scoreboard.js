export const initialState = {
  gamePoints: {
    player1: 0,
    player2: 0,
  },
};

export function setScore(playerNumber, previousState) {
  return {
    gamePoints: Object.assign({}, previousState.gamePoints, {
      [`player${playerNumber}`]: previousState.gamePoints[`player${playerNumber}`] + 1
    })
  };
}

export function getGameScore(gamePoints) {

  // ... do something with gamePoints ...
  // 0 === 'love-all'

  let currentScore = '';
  let winner = '';

  if (gamePoints.player1 === 0 && gamePoints.player2 === 0){
    currentScore = 'love-all'
  } else if (gamePoints.player1 === 1 && gamePoints.player2 === 0) {
    currentScore = '15-love'
  } else if (gamePoints.player1 === 4 && gamePoints.player2 === 0) {
    currentScore = 'Game, player1';
    winner = 'player1';
  } 

  return {
    scoreCall: currentScore,
    winningPlayer: winner,
  }
}
