import {GameEngine} from '../GameEngine.js';
export class Chess extends GameEngine{
constructor() {
    super();
}

initialize(){
  const grid=[
    ["Brook", "Bknight", "Bbishop", "Bqueen", "Bking", "Bbishop", "Bknight","Brook"],
    ["Bpawn","Bpawn","Bpawn","Bpawn","Bpawn","Bpawn","Bpawn","Bpawn"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["Wpawn","Wpawn","Wpawn","Wpawn","Wpawn","Wpawn","Wpawn","Wpawn"],
    ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wking", "Wbishop", "Wknight","Wrook"],
  ];
const currentPlayer=true; //true means white's turn, false means Black's turn
const currentmove=true;
return [grid,currentPlayer,currentmove];
}
controller(input,state){
  const inputArray=input.split("-");
  if(inputArray.length!=2 || inputArray[0]=="" || inputArray[1]=="" || inputArray[0].length!=2 || inputArray[1].length!=2){
      state[2]=false;
      return state;
  }

let [r1,c1]= [inputArray[0][0],inputArray[0][1]]
let [r2,c2]= [inputArray[1][0],inputArray[1][1]]

if(r1<1 || r1>8 ||r2<0 || r2>8){
  state[2]=false;
  return state;
}
r1=8-parseInt(inputArray[0][0]);
r2=8-parseInt(inputArray[1][0]);


if(c1!="a" && c1!="b" && c1!="c" && c1!="d" && c1!="e" && c1!="f" && c1!="g" && c1!="h"){
  state[2]=false;
  return state;
}

if(c2!="a" && c2!="b" && c2!="c" && c2!="d" && c2!="e" && c2!="f" && c1!="g" && c1!="h"){
  state[2]=false;
  return state;
}

switch (c1) {
  case "a":
    c1=0;
    break;
  case "b":
    c1=1;
    break;
  case "c":
    c1=2;
    break;
  case "d":
    c1=3;
    break;
  case "e":
    c1=4;
    break;
  case "f":
    c1=5;
    break;
  case "g":
    c1=6;
    break;
  case "h":
    c1=7
    break;
}  

switch (c2) {
  case "a":
    c2=0;
    break;
  case "b":
    c2=1;
    break;
  case "c":
    c2=2;
    break;
  case "d":
    c2=3;
    break;
  case "e":
    c2=4;
    break;
  case "f":
    c2=5;
    break;
  case "g":
    c2=6;
    break;
  case "h":
    c2=7
    break;
}  

if(state[0][r1][c1]==""){
  state[2]=false;
  return state;
}else if(state[0][r1][c1][0]=="W" &&!state[1]){ //black player turn and white piece selected
  state[2]=false;
  return state;  
}else if(state[0][r1][c1][0]=="B" &&state[1]){ //white player turn and black piece selected
  state[2]=false;
  return state;
}

if(state[1]){ //turn on white player

if(state[0][r1][c1]=="Wpawn"){
  
  if(r1==6 && r2==5 && c1==c2 && state[0][r2][c2]==""){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wpawn";
    state[2]=true;
    state[1]=false;
  }else if(r1==6 && r2==4 && c1==c2 && state[0][r2][c2]=="" && state[0][r2+1][c2]==""){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wpawn";
    state[2]=true;
    state[1]=false;
  }else if(c1==c2 && (r1-r2)==1 && state[0][r2][c2]==""){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wpawn";
    state[2]=true;
    state[1]=false; 
  }else if((r1-r2)==1 && (c2==(c1-1) || c2==(c1+1)) && state[0][r2][c2]!="" && state[0][r2][c2][0]=="B"){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wpawn";
    state[2]=true;
    state[1]=false; 
  }else{
    state[2]=false;
    return state;
  }


}
else if(state[0][r1][c1]=="Wknight"){
  if(r2==r1-1 && (c2==c1-2 || c2==c1+2) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wknight";
    state[2]=true;
    state[1]=false;
  }else if(r2==r1+1 && (c2==c1-2 || c2==c1+2) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wknight";
    state[2]=true;
    state[1]=false;
  }else if(r2==r1+2 && (c2==c1-1 || c2==c1+1) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wknight";
    state[2]=true;
    state[1]=false;
  }else if(r2==r1-2 && (c2==c1-1 || c2==c1+1) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Wknight";
    state[2]=true;
    state[1]=false;
  }else{
    state[2]=false;
    return state;
  }

}
else if(state[0][r1][c1]=="Wbishop"){
  if(c1-c2==r1-r2 && r1-r2>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wbishop";
    state[2]=true;
    state[1]=false;
  }else if(c1-c2==r1-r2 && r1-r2<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wbishop";
    state[2]=true;
    state[1]=false;
  }else if(c1-c2==r2-r1 && r2-r1>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wbishop";
    state[2]=true;
    state[1]=false;
  }else if(c1-c2==r2-r1 && r2-r1<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wbishop";
    state[2]=true;
    state[1]=false;
  }else{
    state[2]=false;
    return state;
  }


}
else if(state[0][r1][c1]=="Wrook"){
if(r1==r2 && c2>c1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
  for(let i=1;i<c2-c1;i++){
    if(state[0][r2][c1+i]!=""){
      state[2]=false;
      return state;
    }
  }
  state[0][r1][c1]="";
  state[0][r2][c2]="Wrook";
  state[2]=true;
  state[1]=false;
}else if(r1==r2 && c1>c2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
  for(let i=1;i<c1-c2;i++){
    if(state[0][r2][c1-i]!=""){
      state[2]=false;
      return state;
    }
  }
  state[0][r1][c1]="";
  state[0][r2][c2]="Wrook";
  state[2]=true;
  state[1]=false;
}else if(c1==c2 && r1<r2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
  for(let i=1;i<r2-r1;i++){
    if(state[0][r1+i][c2]!=""){
      state[2]=false;
      return state;
    }
  }
  state[0][r1][c1]="";
  state[0][r2][c2]="Wrook";
  state[2]=true;
  state[1]=false;
}else if(c1==c2 && r2<r1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
  for(let i=1;i<r1-r2;i++){
    if(state[0][r1-i][c2]!=""){
      state[2]=false;
      return state;
    }
  }
  state[0][r1][c1]="";
  state[0][r2][c2]="Wrook";
  state[2]=true;
  state[1]=false;
}else{
  state[2]=false;
  return state;
}

}
else if(state[0][r1][c1]=="Wqueen"){
  if(r1==r2 && c2>c1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<c2-c1;i++){
      if(state[0][r2][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else if(r1==r2 && c1>c2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<c1-c2;i++){
      if(state[0][r2][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else if(c1==c2 && r1<r2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c2]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else if(c1==c2 && r2<r1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c2]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else if(c1-c2==r1-r2 && r1-r2>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else if(c1-c2==r1-r2 && r1-r2<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else if(c1-c2==r2-r1 && r2-r1>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else if(c1-c2==r2-r1 && r2-r1<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="B")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Wqueen";
    state[2]=true;
    state[1]=false;
  }else{
    state[2]=false;
    return state;
  } 

}
else if(state[0][r1][c1]=="Wking"){

if((state[0][r2][c2]=="" || state[0][r2][c2][0]=="B") && ( (r1==r2 && Math.abs(c1-c2)==1) ||
(c1==c2 && Math.abs(r1-r2)==1) || (Math.abs(c1-c2)==1 && Math.abs(r1-r2)==1))){
  state[0][r1][c1]="";
  state[0][r2][c2]="Wking";
  state[2]=true;
  state[1]=false;
}else{
  state[2]=false;
  return state;
}


}
}

else{ // turn on black player

if(state[0][r1][c1]=="Bpawn"){
  
    if(r1==1 && r2==2 && c1==c2 && state[0][r2][c2]==""){
      state[0][r1][c1]="";
      state[0][r2][c2]="Bpawn";
      state[2]=true;
      state[1]=true;
    }else if(r1==1 && r2==3 && c1==c2 && state[0][r2][c2]=="" && state[0][r2-1][c2]==""){
      state[0][r1][c1]="";
      state[0][r2][c2]="Bpawn";
      state[2]=true;
      state[1]=true;
    }else if(c1==c2 && (r2-r1)==1 && state[0][r2][c2]==""){
      state[0][r1][c1]="";
      state[0][r2][c2]="Bpawn";
      state[2]=true;
      state[1]=true; 
    }else if((r2-r1)==1 && (c2==(c1-1) || c2==(c1+1)) && state[0][r2][c2]!="" && state[0][r2][c2][0]=="W"){
      state[0][r1][c1]="";
      state[0][r2][c2]="Bpawn";
      state[2]=true;
      state[1]=true; 
    }else{
      state[2]=false;
      return state;
    }
  
  
}
else if(state[0][r1][c1]=="Bknight"){
  if(r2==r1-1 && (c2==c1-2 || c2==c1+2) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Bknight";
    state[2]=true;
    state[1]=true;
  }else if(r2==r1+1 && (c2==c1-2 || c2==c1+2) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Bknight";
    state[2]=true;
    state[1]=true;
  }else if(r2==r1+2 && (c2==c1-1 || c2==c1+1) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Bknight";
    state[2]=true;
    state[1]=true;
  }else if(r2==r1-2 && (c2==c1-1 || c2==c1+1) && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    state[0][r1][c1]="";
    state[0][r2][c2]="Bknight";
    state[2]=true;
    state[1]=true;
  }else{
    state[2]=false;
    return state;
  }
}
else if(state[0][r1][c1]=="Bbishop"){
  if(c1-c2==r1-r2 && r1-r2>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bbishop";
    state[2]=true;
    state[1]=true;
  }else if(c1-c2==r1-r2 && r1-r2<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bbishop";
    state[2]=true;
    state[1]=true;
  }else if(c1-c2==r2-r1 && r2-r1>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bbishop";
    state[2]=true;
    state[1]=true;
  }else if(c1-c2==r2-r1 && r2-r1<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bbishop";
    state[2]=true;
    state[1]=true;
  }else{
    state[2]=false;
    return state;
  }  
}
else if(state[0][r1][c1]=="Brook"){
  if(r1==r2 && c2>c1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<c2-c1;i++){
      if(state[0][r2][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Brook";
    state[2]=true;
    state[1]=true;
  }else if(r1==r2 && c1>c2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<c1-c2;i++){
      if(state[0][r2][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Brook";
    state[2]=true;
    state[1]=true;
  }else if(c1==c2 && r1<r2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c2]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Brook";
    state[2]=true;
    state[1]=true;
  }else if(c1==c2 && r2<r1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c2]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Brook";
    state[2]=true;
    state[1]=true;
  }else{
    state[2]=false;
    return state;
  }
  
  
}
else if(state[0][r1][c1]=="Bqueen"){
  if(r1==r2 && c2>c1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<c2-c1;i++){
      if(state[0][r2][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else if(r1==r2 && c1>c2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<c1-c2;i++){
      if(state[0][r2][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else if(c1==c2 && r1<r2 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c2]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else if(c1==c2 && r2<r1 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c2]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else if(c1-c2==r1-r2 && r1-r2>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else if(c1-c2==r1-r2 && r1-r2<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else if(c1-c2==r2-r1 && r2-r1>0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r2-r1;i++){
      if(state[0][r1+i][c1-i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else if(c1-c2==r2-r1 && r2-r1<0 && (state[0][r2][c2]=="" || state[0][r2][c2][0]=="W")){
    for(let i=1;i<r1-r2;i++){
      if(state[0][r1-i][c1+i]!=""){
        state[2]=false;
        return state;
      }
    }
    state[0][r1][c1]="";
    state[0][r2][c2]="Bqueen";
    state[2]=true;
    state[1]=true;
  }else{
    state[2]=false;
    return state;
  } 
}
else if(state[0][r1][c1]=="Bking"){
  if((state[0][r2][c2]=="" || state[0][r2][c2][0]=="W") && ( (r1==r2 && Math.abs(c1-c2)==1) ||
  (c1==c2 && Math.abs(r1-r2)==1) || (Math.abs(c1-c2)==1 && Math.abs(r1-r2)==1))){
  state[0][r1][c1]="";
  state[0][r2][c2]="Bking";
  state[2]=true;
  state[1]=true;
}else{
  state[2]=false;
  return state;
}
}


}

return state;
}
drawer(state){
let id=0
for(let i=0;i<8;i++){
  for(let j=0;j<8;j++){
    id=i*8+j;
    if (state[0][i][j] == 'Wpawn' || state[0][i][j] == 'Bpawn') {
      document.getElementById(id).innerHTML = `${state[0][i][j]} <img class='allimg allpawn' src="${state[0][i][j]}.png" alt="">`
    }
    else {
      document.getElementById(id).innerHTML = `${state[0][i][j]} <img class='allimg' src="${state[0][i][j]}.png" alt="">`
    }
  }
}
if(state[1]){
  document.getElementById('tog').innerText = "White's Turn";
}else{
  document.getElementById('tog').innerText = "Black's Turn"

}


}

}

