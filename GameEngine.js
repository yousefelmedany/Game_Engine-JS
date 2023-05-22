export class GameEngine {
    constructor() {    
        this.MyLoop();
    }    
    async MyLoop () {
        let state=this.initialize();
        this.drawer(state);
        while (true) {
          await new Promise(resolve => setTimeout(resolve, 500));
          let input = prompt(`Enter a Valid Input:`);
          if(input==null){
            break;
          }
          state = this.controller(input,state);
          if(state[2]==true){
            this.drawer(state);
            }else{
                alert("Incorrect Move!");
                continue;
            }
        }
      }

    drawer(state){}
    controller(input,state){}
    initialize(){}

}
  


