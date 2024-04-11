let boxes=document.querySelectorAll(".box");
let div=document.querySelector(".division");
let head=document.querySelector(".heading");
let newgame=document.querySelector(".new-game");
let reset=document.querySelector(".reset-btn");
let turnO=true;
let count=0;
let winningpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[6,7,8],
[3,4,5]
];
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

const showWinner = (winner) => {
    div.innerText = `Congratulations, Winner is ${winner}`;
    div.style.textAlign="center";
    
   div.setAttribute("class","division1");
    disableBoxes();
  };
  const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
  }
  const resetgame=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        div.setAttribute("class","division");
    }
  }
  const gamedraw=()=>{
div.innerText="Game is Draw";
div.style.textAlign="center";
div.setAttribute("class","division1");
    

  }
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(turnO){
    box.innerText="O";
    turnO=false;
    count++;
}
else{
    box.innerText="X";
    turnO=true; 
    count++;
}
box.disabled=true;
let iswinner= checkWinner();
if(count==9 && !iswinner){
    gamedraw();
 }

});


});


const checkWinner = () => {
    for (let pattern of winningpattern) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  newgame.addEventListener("click",resetgame);
  reset.addEventListener("click",resetgame);