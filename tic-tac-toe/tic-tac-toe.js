import {GameEngine} from '../GameEngine.js';
export class TicTacToe extends GameEngine{
constructor() {
    super();
}

drawer(state) {    
    const cells = Array.from(document.querySelectorAll('.cell'));
    let i=0;
    cells.forEach(function(cell){
      cell.textContent = state[0][i];
      i++;      
    });
    document.getElementById("status-text").textContent = `${state[1]}'s Turn`;
}  
controller(input,state) {
  const inputArray=input.split("-");
  if(inputArray.length!=2){
      state[2]=false;
      return state;
  }
  let row=parseInt(inputArray[0]);
  let col=parseInt(inputArray[1]);
  if(row<0 ||row>2 || col<0 || col>2){
    state[2]=false;
    return state;
  }
  
  const inputed= 3*row+col;  

    if (state[0][inputed] == "") {
      state[0][inputed]=state[1];
      state[1] = state[1] == "X" ? "O" : "X";
      state[2]=true;
    }else{
      state[2]=false;
    }
    return state;
}
initialize(){
    const grid=["", "", "", "", "", "", "", "", ""];
    const currentPlayer = "X";
    const currentmove=true;
    return [grid,currentPlayer,currentmove];
}



}
