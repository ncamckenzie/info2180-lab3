window.onload = function() {
    var i;
    var squares = document.querySelectorAll("#board div");
    for (i=0;i<=9;i++){
    squares[i].classList.add("square",i);
    squares[i].addEventListener("click",fillSqaure);
    
}
}
let gameprogress = [];

function fillSqaure(x){
    const clickedSquare = x.target.classList[1];
    if (gameprogress.length < 9 && gameprogress.length % 2 == 0){
    document.querySelectorAll("#board div")[clickedSquare].innerHTML = "X";
    document.querySelectorAll("#board div")[clickedSquare].classList.add("square", "X", clickedSquare);
    gameprogress.push("X");

    }
   else if (gameprogress.length < 9 && gameprogress.length % 2 != 0){
    document.querySelectorAll("#board div")[clickedSquare].innerHTML = "O";
    document.querySelectorAll("#board div")[clickedSquare].classList.add("square","O", clickedSquare);
    gameprogress.push("O");
    
   }}