/*jslint browser: true*/
'use strict';

var game = {
  play: false,
  strictMode: false,
  moveIndex: 0,
  moves: [],
  generateNextMove: function() {
    return Math.floor(Math.random() * Math.floor(3));
  },
  dimColors: ['#ad1000', '#bc00b9', '#00afaf', '#00b500'],
  colors: ['#ff1900', '#ff00fa', '#00ffff', '#00ff00']
};

var gameBoard = document.querySelectorAll('.game-board div');

function generateColors() {
  gameBoard.forEach(function(square, i) {
      square.style.backgroundColor = game.dimColors[i];
  });
}

function startGame() {
  var playBtn = document.querySelector('#play');
  
  playBtn.addEventListener('click', function() {
    game.play = true;
    gamePlay();
  });
}

function gamePlay() { 
/*  
Game Steps:
- Generate next move and save to moves array
- Increment and displaythe number of moves
- Show the move on the game board
- Wait for the player to make the right move
- Wait and check the players moves
*/
  if (game.play === true) {
    var nextMove = game.generateNextMove();
    game.moves.push(nextMove);
    game.moveIndex++;
    displayMoveCount();
    displayMove();
    validateMove();
    console.log(game.moves, game.moveIndex);
  }
}

function displayMove() {
  var i = game.moveIndex;
  gameBoard[i].style.backgroundColor = game.colors[i];
}

function displayMoveCount() {
  var count = document.querySelector('#count');
  count.innerHTML = game.moveIndex;
}

function validateMove() {
/*  
Validation Steps:
- Make a copy of the moves array
- Loop through the moves arrays:
  - each time a player clicks, increament move index
*/ 
  
  gameBoard.forEach(function(square, i) {
    square.addEventListener('click', function() {
      if (this.square !== game.moves[i]) {
        console.log('Wrong Square!');
      } else {
        console.log('Correct!');
      }
    });
  });
  
}

generateColors();
startGame();