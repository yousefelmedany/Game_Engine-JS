import {TicTacToe} from './tic-tac-toe/tic-tac-toe.js';
import {EightQueens} from './8queens/8queens.js';
import {Suduko} from './suduko/suduko.js';
import {Connect4} from './connect4/connect4.js';
import {Chess} from './Chess/chess.js';
import {Checkers} from './checkers/checkers.js';

const gameName=localStorage.getItem("Game");
localStorage.removeItem("Game")

switch (gameName) {
    case "tic-tac-toe":
      new TicTacToe();
      break;
    case "suduko":
      new Suduko();
      break;
    case "8queens":
      new EightQueens();
      break;
    case "connect4":
      new Connect4();
      break;
    case "chess":
      new Chess();
      break;
    case "checkers":
      new Checkers();
      break;
    

}   

  