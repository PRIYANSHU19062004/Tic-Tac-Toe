let boxes=document.querySelectorAll(".box"); //Array Of boxes
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector('#msg');
let turnO=true; //if turnO=true ,it means it is the turn of PlayerO and if it is false ,then it means that it is the turn of PlayerX.
//We will store the winning opurutnities in the 2D Array.
const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
 const resetGame=()=>{
    turnO=true;
    //All the buttons should be renabled.
    enableBoxes();
    msgContainer.classList.add("hide");
 }
//We will add event Listener on all boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked.")
        if(turnO){ //PlayerO
        box.innerText="O";
        turnO=false;
        }
        else{ //playerX 
            box.innerText="X";
            turnO=true;
        }
        //We now need to disable the button as we have pressed it.
        box.disabled=true;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congraturlations,Winner is Player${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner=()=>{  //We need to check each winning pattern.We will check wether there are same elements on all boxes in a pattern.If not then check next pattern.
 for(let pattern of winPatterns){
   let pos1Val=boxes[pattern[0]].innerText;
   let pos2Val=boxes[pattern[1]].innerText;
   let pos3Val=boxes[pattern[2]].innerText;
    
  //Before checking whether the elements at each position is equal or not we need to check whether any position contains empty value.
  if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
    if(pos1Val===pos2Val&&pos2Val===pos3Val){
        console.log("winner",pos1Val);
        //Before announcing the winner,We will immidiately disabled all the boxes.
        disableBoxes();
        showWinner(pos1Val);
    }
  }
 }
 }
 newGameBtn.addEventListener('click',resetGame);
 resetBtn.addEventListener("click",resetGame)
