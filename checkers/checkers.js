import {GameEngine} from '../GameEngine.js';
export class Checkers extends GameEngine{
    // 🔴->2
    // 🔵->1
constructor(){
    super();
}
    
initialize(){
        const turn = 1;
        const jumps = [];
        const valid = true;
        const board=Array(8).fill().map(() => Array(8).fill(0));
        board [0] = [0,2,0,2,0,2,0,2];
        board [1] = [2,0,2,0,2,0,2,0];
        board [2] = [0,2,0,2,0,2,0,2];
        board [5] = [1,0,1,0,1,0,1,0];
        board [6] = [0,1,0,1,0,1,0,1];
        board [7] = [1,0,1,0,1,0,1,0];
        return [board,jumps,valid,turn]
} 
drawer(state)
    {
        for(let i=0;i<8;i++)
        {
            for(let j=0;j<8;j++)
            {
                if(state[0][i][j]!=0)
                {
                    const elem=document.getElementById(i.toString()+j.toString());
                    if (state[0][i][j] == 1) {
                        elem.textContent = '🔵';
                    }
                    else if (state[0][i][j] == 2){
                        elem.textContent = '🔴'
                    }
                    else if (state[0][i][j] == 3){
                        elem.textContent = '🔷'
                    }
                    else if (state[0][i][j] == 4){
                        elem.textContent = '🔶'
                    }
                    else if (state[0][i][j] == 6){
                        elem.textContent = '🟨'
                    }
                }
                else{
                    const elem=document.getElementById(i.toString()+j.toString());
                    elem.textContent = '';
                }
            }
        }
}
controller(input,state){  
    const inputArray=input.split("-");
    if(inputArray.length!=2 || inputArray[0]=="" || inputArray[1]=="" || inputArray[0].length!=2 || inputArray[1].length!=2){
        state[2]=false;
        return state;
    }

    let [x1,y1]= [parseInt(inputArray[0][0]),parseInt(inputArray[0][1])];
    let [x2,y2]= [parseInt(inputArray[1][0]),parseInt(inputArray[1][1])];

    if(x1<0 || x1>7 ||x2<0 || x2>7){
    state[2]=false;
    return state;
    }           
      
    console.log([x1,y1,x2,y2]);

        let board = state[0];
        let jumps = state[1];
        let t = state[3];
        let isvalid = true;
        if(x1 < 0 || x1 > 7 || x2 < 0 || x2 > 7 || y1 < 0 || y1 > 7 || y2 < 0 || y2 > 7){
            isvalid = false;
        }
        if(jumps.length > 0 && isvalid){
            isvalid = false;
            for (var i = 0; i < jumps.length; i++){
                if(JSON.stringify(jumps[i]) === JSON.stringify([x1,y1,x2,y2])){
                    isvalid = true;
                    board[x2][y2] = board[x1][y1];
                    board[x1][y1] = 0;
                    board[(x1+x2)/2][((y1+y2)/2)] = 0;
                    if (board[x2][y2] === 1 && x2 === 0) {
                        board[x2][y2] = 3;
                    }
                    else if (board[x2][y2] === 2 && x2 === 7) {
                        board[x2][y2] = 4;
                    }
                    jumps = [];
                    for (let i = 0; i < board.length; i++) {
                        for (let j = 0; j < board.length; j++) {
                            if (board[i][j] === 6) {
                                board[i][j] = 0;
                            }
                            
                        }
                        
                    }
                    break;
                }
            }
            if (isvalid){
                if (x2 > 1 && board[x2][y2] === 1) {
                    if (y2 > 1 && board[x2 - 1][y2 - 1] % 2 === 0 && board[x2 - 2][y2 - 2] === 0 && board[x2 - 1][y2 - 1] !== 0) {
                        jumps.push([x2,y2,x2-2,y2-2]);
                        board[x2-2][y2-2] = 6;
                    }
                    else if (y2 < 6 && board[x2 - 1][y2 + 1] % 2 === 0 && board[x2 - 2][y2 + 2] === 0 && board[x2 - 1][y2 + 1] !== 0) {
                        jumps.push([x2,y2,x2-2,y2+2]);
                        board[x2-2][y2+2] = 6;
                    }
                }
                else if (x2 < 6 && board[x2][y2] === 2) {
                    if (y2 > 1 && board[x2 + 1][y2 - 1] % 2 === 1 && board[x2 + 2][y2 - 2] === 0 && board[x2 + 1][y2 - 1] !== 0) {
                        jumps.push([x2,y2,x2+2,y2-2]);
                        board[x2+2][y2-2] = 6;
                    }
                    else if (y2 < 6 && board[x2 + 1][y2 + 1] % 2 === 1 && board[x2 + 2][y2 + 2] === 0 && board[x2 + 1][y2 + 1] !== 0) {
                        jumps.push([x2,y2,x2+2,y2+2]);
                        board[x2+2][y2+2] = 6;
                    }
                }
                else if (board[x2][y2] === 3 || board[x2][y2] === 4) {
                    if (x2 > 1 && y2 > 1 && board[x2 - 1][y2 - 1] % 2 !== board[x2][y2] % 2 && board[x2 - 2][y2 - 2] === 0 && board[x2 - 1][y2 - 1] !== 0) {
                        jumps.push([x2,y2,x2-2,y2-2]);
                        board[x2-2][y2-2] = 6;
                    }
                    else if (x2 > 1 && y2 < 6 && board[x2 - 1][y2 + 1] % 2 !== board[x2][y2] % 2 && board[x2 - 2][y2 + 2] === 0 && board[x2 - 1][y2 + 1] !== 0) {
                        jumps.push([x2,y2,x2-2,y2+2]);
                        board[x2-2][y2+2] = 6;
                    }
                    else if (x2 < 6 && y2 > 1 && board[x2 + 1][y2 - 1] % 2 !== board[x2][y2] % 2 && board[x2 + 2][y2 - 2] === 0 && board[x2 + 1][y2 - 1] !== 0) {
                        jumps.push([x2,y2,x2+2,y2-2]);
                        board[x2+2][y2-2] = 6;
                    }
                    else if (x2 < 6 && y2 < 6 && board[x2 + 1][y2 + 1] % 2 !== board[x2][y2] % 2 && board[x2 + 2][y2 + 2] === 0 && board[x2 + 1][y2 + 1] !== 0) {
                        jumps.push([x2,y2,x2+2,y2+2]);
                        board[x2+2][y2+2] = 6;
                    }
                }
                if(jumps.length > 0){
                }
                else {
                    t = (t + 1) % 2;
                }
            }
        }
        else if (x1 === x2 + 1 && (y1 === y2 + 1 || y1 === y2 - 1) && (board[x1][y1] !== 2 && board[x1][y1] !== 0) && board[x2][y2] === 0) {
            if (board[x1][y1] % 2 === t) {
                board[x2][y2] = board[x1][y1];
                board[x1][y1] = 0;
                t = (t + 1) % 2;
                if (board[x2][y2] === 1 && x2 === 0) {
                    board[x2][y2] = 3;
                }
            } 
            else {
                isvalid = false;
            }
        } 
        else if (x1 === x2 - 1 && (y1 === y2 + 1 || y1 === y2 - 1) && (board[x1][y1] !== 1 && board[x1][y1] !== 0) && board[x2][y2] === 0) {
            if (board[x1][y1] % 2 === t) {
                board[x2][y2] = board[x1][y1];
                board[x1][y1] = 0;
                t = (t + 1) % 2;
                if (board[x2][y2] === 2 && x2 === 7) {
                    board[x2][y2] = 4;
                }
            } 
            else {
                isvalid = false;
            }
        } 
        else {
            isvalid = false;
        }
        if (isvalid && jumps.length === 0) {
            for (let i = 1; i < 7; i++) {
                for (let j = 1; j < 7; j++) {
                    if (board[i][j] % 2 === (t + 1) % 2 && board[i][j] !== 0) {
                        if (board[i + 1][j + 1] === 0 && board[i - 1][j - 1] !== 0 && (board[i][j]) % 2 !== (board[i - 1][j - 1]) % 2) {
                            if (board[i - 1][j - 1] !== 1) {
                                jumps.push([i - 1, j - 1, i + 1, j + 1]);
                            }
                        }
                        if (board[i + 1][j - 1] === 0 && board[i - 1][j + 1] !== 0 && (board[i][j]) % 2 !== (board[i - 1][j + 1]) % 2) {
                            if (board[i - 1][j + 1] !== 1) {
                                jumps.push([i - 1, j + 1, i + 1, j - 1]);
                            }
                        }
                        if (board[i + 1][j + 1] !== 0 && board[i - 1][j - 1] === 0 && (board[i][j]) % 2 !== (board[i + 1][j + 1]) % 2) {
                            if (board[i + 1][j + 1] !== 2) {
                                jumps.push([i + 1, j + 1, i - 1, j - 1]);
                            }
                        }
                        if (board[i + 1][j - 1] !== 0 && board[i - 1][j + 1] === 0 && (board[i][j]) % 2 !== (board[i + 1][j - 1]) % 2) {
                            if (board[i + 1][j - 1] !== 2) {
                                jumps.push([i + 1, j - 1, i - 1, j + 1]);
                            }
                        }
                    }
                }
            }
            for (let i=0;i<jumps.length;i++){
                board[jumps[i][2]][jumps[i][3]] = 6
            }
        }
        state[0] = board;
        state[1] = jumps;
        state[2] = isvalid;
        state[3] = t;
        return state;

}

}