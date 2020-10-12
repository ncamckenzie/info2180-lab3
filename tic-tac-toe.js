window.onload = function() {
    var i;
    document.querySelector("button").addEventListener("click",resetGame);
    var squares = document.querySelectorAll("#board div");
    for (i=0;i<=9;i++){
    squares[i].classList.add("square",i);
    squares[i].addEventListener("click",fillSqaure);
    squares[i].addEventListener("mouseover",changeSquare);
    squares[i].addEventListener("mouseout",changeSquareBack);
    


}

}

let gameprogress = [];

function fillSqaure(x){
    const clickedSquare = x.target.classList[1];
    if (gameprogress.length < 9 && gameprogress.length % 2 == 0){
    document.querySelectorAll("#board div")[clickedSquare].innerHTML = "X";
    document.querySelectorAll("#board div")[clickedSquare].classList.add("square", "X", clickedSquare);
    document.querySelectorAll("#board div")[clickedSquare].removeEventListener("click",fillSqaure);
    gameprogress.push("X");

    }
   else if (gameprogress.length < 9 && gameprogress.length % 2 != 0){
    document.querySelectorAll("#board div")[clickedSquare].innerHTML = "O";
    document.querySelectorAll("#board div")[clickedSquare].classList.add("square","O", clickedSquare);
    document.querySelectorAll("#board div")[clickedSquare].removeEventListener("click",fillSqaure);
    gameprogress.push("O");
    
   }
   gameWinner();
}

   function changeSquare(x) {
       const hoveredSquare = x.target.classList[1];
       if (x[0]="square" && gameprogress.length < 9){
        document.querySelectorAll("#board div")[hoveredSquare].classList.add("hover");
       }
   }
   function changeSquareBack(x){
        const unhoveredSquare = x.target.classList[1];
        if (x[2]="hover"){
        document.querySelectorAll("#board div")[unhoveredSquare].classList.remove(x[2]);
        document.querySelectorAll("#board div")[unhoveredSquare].classList.add("hover O");
   }}




function gameWinner(){
    var sqaureList = document.querySelectorAll("#board div");
    if (sqaureList[0].className.includes("X") && sqaureList[1].className.includes("X") && sqaureList[2].className.includes("X")
    ||sqaureList[3].className.includes("X") && sqaureList[4].className.includes("X") && sqaureList[5].className.includes("X") 
    || sqaureList[6].className.includes("X") && sqaureList[7].className.includes("X") && sqaureList[8].className.includes("X") 
    || sqaureList[0].className.includes("X") && sqaureList[3].className.includes("X") && sqaureList[6].className.includes("X")
    ||sqaureList[1].className.includes("X") && sqaureList[4].className.includes("X") && sqaureList[7].className.includes("X") ||
    sqaureList[2].className.includes("X") && sqaureList[5].className.includes("X") && sqaureList[8].className.includes("X") ||
    sqaureList[0].className.includes("X") && sqaureList[4].className.includes("X") && sqaureList[8].className.includes("X") ||
    sqaureList[2].className.includes("X") && sqaureList[4].className.includes("X") && sqaureList[6].className.includes("X")){
     document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
     document.getElementById("status").classList.add("you-won");}
    else if(sqaureList[0].className.includes("O") && sqaureList[1].className.includes("O") && sqaureList[2].className.includes("O")
    ||sqaureList[3].className.includes("O") && sqaureList[4].className.includes("O") && sqaureList[5].className.includes("O") 
    || sqaureList[6].className.includes("O") && sqaureList[7].className.includes("O") && sqaureList[8].className.includes("O") 
    || sqaureList[0].className.includes("O") && sqaureList[3].className.includes("O") && sqaureList[6].className.includes("O")
    ||sqaureList[1].className.includes("O") && sqaureList[4].className.includes("O") && sqaureList[7].className.includes("O") ||
    sqaureList[2].className.includes("O") && sqaureList[5].className.includes("O") && sqaureList[8].className.includes("O") ||
    sqaureList[0].className.includes("O") && sqaureList[4].className.includes("O") && sqaureList[8].className.includes("O") ||
    sqaureList[2].className.includes("O") && sqaureList[4].className.includes("O") && sqaureList[6].className.includes("O")){
     document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
     document.getElementById("status").classList.add("you-won");
    }
    }

function resetGame(x){
    gameprogress = [];
    document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");
    var j;
    var removalList = document.querySelectorAll("#board div");
    for (j=0;j<=9;j++){
        removalList[j].innerHTML = "";
        removalList[j].classList.remove("X","O");
        removalList[j].addEventListener("click",fillSqaure);
    }
    
}
