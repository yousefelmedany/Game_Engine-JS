import {GameEngine} from '../GameEngine.js';
export class EightQueens extends GameEngine{
constructor(){  
    super();
}

initialize(){
    const grid=Array(9).fill().map(() => Array(9).fill(0));
    const currentmove=true;
    return [grid,true,currentmove]
}
drawer(state){
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
         if(state[0][i][j]!=0)
         {  const elem=document.getElementById(i*8+j);
            elem.textContent='♛';
         }else{
            const elem=document.getElementById(i*8+j);
            elem.textContent='';
         }
     }
    }
}
controller(input,state){
const inputArray=input.split("-");
if(inputArray.length!=2 && inputArray.length!=3){
    state[2]=false;
    return state;
}
if(inputArray[0]==""||inputArray[1]==""){
    state[2]=false;
    return state;
}
let row=parseInt(inputArray[0]);
let col=parseInt(inputArray[1]);

if(inputArray.length==3){
    if(inputArray[2]=="0"){
        state[0][row][col]=0;
        state[2]=true;
        return state;
    }else if(inputArray[2]==""){
        state[2]=false;
        return state;
    }
}

let row_bool=false;
let col_bool=false;
let diagonal_bool=false;
for(let i=0;i<8;i++)
{
    if(state[0][row][i]==1)
    {
        row_bool=true;
        break;
    }
}
for(let i=0;i<8;i++)
{
    if(state[0][i][col]==1)
    {
        col_bool=true;
        break;
    }
}
for(let i=0;i<8;i++)
{
    if(state[0][row][i]==1)
    {
        row_bool=true;
        break;
    }
}
for(let i=1;i<8 && i>=0;i++)
{
    for(let j=1;j<8 && j>=0;j++)
    {
        if(row+i<8 && row+i>=0 && col+i<8 && col+i>=0 && state[0][row+i][col+i]==1)
        {
       diagonal_bool=true;
       break;
        }
        else if(row+i<8 && row+i>=0 && col-i<8 && col-i>=0 && state[0][row+i][col-i]==1)
        {
            diagonal_bool=true;
            break;
        }
        else if(row-i<8 && row-i>=0 && col+i<8 && col+i>=0 && state[0][row-i][col+i]==1)
        {
            diagonal_bool=true;
            break;
        }
        else if(row-i<8 && row-i>=0 && col-i<8 && col-i>=0 && state[0][row-i][col-i]==1)
        {
            diagonal_bool=true;
            break;
        }
    }
    if(diagonal_bool)break;
}


if(row_bool || col_bool || diagonal_bool)
{
    state[2]=false;
    return state;
}
else{
    state[0][row][col]=1;
    state[2]=true;
}

return state;



}


}


