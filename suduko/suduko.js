import {GameEngine} from '../GameEngine.js';
export class Suduko extends GameEngine{
constructor() {
    super()
}

controller(input,state){
  console.log(input);
  
  const inputArray=input.split("-");
  if(inputArray.length!=3){
      state[2]=false;
      return state;
  }
  let row=parseInt(inputArray[0]);
  let col=parseInt(inputArray[1]);
  let inputed=parseInt(inputArray[2]);

  if(row<0 ||row>8 || col<0 || col>8 ||inputed<0 || inputed>9){
    state[2]=false;
    return state;
  }

  if(inputed==0 && state[1][row][col]=="-"){
    state[0][row][col]="-";
    state[2]=true;
    return state;
  }
  
  if(state[1][row][col]!="-"){
    state[2]=false;
    return state;
  }
  
  let boxRow = Math.floor(row / 3);
  let boxCol = Math.floor(col / 3);
  for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
    for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
      if (inputed == state[0][i][j]) {
        state[2]=false;
        return state;
      }
    }
  }
  
  for(let i=0;i<9;i++){
    if(state[0][row][i]==inputed||state[0][i][col]==inputed){
      state[2]=false;
      return state; 
    }
  }

  state[0][row][col]=inputed;
  state[2]=true;
  return state;

}
drawer(state) {
    let id=0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const elem = document.getElementById(id);
        if (state[0][i][j] != "-") {
          elem.textContent = state[0][i][j];
        } else {
          elem.textContent = " ";
          elem.style.backgroundColor = "yellow";
        }
        id++;
      }
    }
}
initialize(){
  const grid = Array.from(Array(9), () => new Array(9).fill("-"));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (Math.random() < 0.5) {
        var randomNumber = Math.floor(Math.random() * 9) + 1;
        if (this.validate_input(grid, i, j, randomNumber)) {
          grid[i][j] = randomNumber.toString();
        }
      }
    }
  }
  const initialgrid=JSON.parse(JSON.stringify(grid));
  const checkmove=true;
return [grid,initialgrid,checkmove];

}
validate_input(grid, row, col, value) {
  for (let j = 0; j < 9; j++) {
    if (grid[row][j] == value) {
      return false;
    }
  }
  // Check column
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] == value) {
      return false;
    }
  }
  // Check box
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i <= boxRow + 2; i++) {
    for (let j = boxCol; j <= boxCol + 2; j++) {
      if (grid[i][j] == value) {
        return false;
      }
    }
  }
  return true;
}

}
