/*jslint browser: true*/
'use strict';

var game = {
  play: false,
  strictMode: false,
  moveIndex: 0,
  moves: [],
  generateNextMove: function() {
    return Math.floor(Math.random() * Math.floor(4));
  }
};

var gameBoard = document.querySelectorAll('.game-board div');
var colors = ['#d61400', '#bc00b9', '#00afaf', '#00b500'];
var colorsDim = ['#ff1900', '#ff00fa', '#00ffff', '#00ff00'];

function generateColors() {
  gameBoard.forEach(function(square, i) {
      square.style.backgroundColor = colors[i];
  });
}

function computerPlays() { 
  if (game.play === true) {
    var nextMove = game.generateNextMove();
    game.moves.push(nextMove);
    game.moveIndex++;
    displayMoveCount();
    console.log(game.moves, game.moveIndex);
  }
}

function startGame() {
  var playBtn = document.querySelector('#play');
  
  playBtn.addEventListener('click', function() {
    game.play = true;
    computerPlays();
  });
}

function displayMove() {
  
}

function displayMoveCount() {
  var count = document.querySelector('#count');
  count.innerHTML = game.moveIndex;
}


generateColors();
startGame();