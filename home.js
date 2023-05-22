function initializeGame(name){
    localStorage.setItem("Game",name);

    switch (name) {
    case "tic-tac-toe":
        window.location.href= "./tic-tac-toe/tic-tac-toe.html";
        break;
    case "suduko":
        window.location.href= "./suduko/suduko.html";
        break;
    case "8queens":
        window.location.href= "./8queens/8queens.html";
        break;
    case "connect4":
        window.location.href= "./connect4/connect4.html";
        break;
    case "chess":
        window.location.href= "./Chess/chess.html";
        break;
    case "checkers":
        window.location.href= "./checkers/checkers.html";
        break;
}   

}

function RestartGame(name){
    localStorage.setItem("Game",name);

    switch (name) {
    case "tic-tac-toe":
        window.location.href= "./tic-tac-toe.html";
        break;
    case "suduko":
        window.location.href= "./suduko.html";
        break;
    case "8queens":
        window.location.href= "./8queens.html";
        break;
    case "connect4":
        window.location.href= "./connect4.html";
        break;
    case "chess":
        window.location.href= "./chess.html";
        break;
    case "checkers":
        window.location.href= "./checkers.html";
        break;
}   

}
