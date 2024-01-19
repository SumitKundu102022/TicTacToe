let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-gm");
let newGameBtn = document.querySelector(".new-btn");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg-p");


let turnO = true; //playerX,playerY
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    
    turnO = true;
    enableBoxes();
    msgCont.classList.add("hide");
    
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("button was clicked");
    if (turnO) {
        box.innerText = "O";
        box.classList.remove("X-color");
        turnO = false;
        
    } else {
        box.innerText = "X";
        box.classList.add("X-color");
        turnO = true;
        
      }
      
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
  for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
  }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is Player ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if (pos1val != "" && pos2val != "" && pos3val != "") {
          if (pos1val === pos2val && pos2val === pos3val) {
              //   console.log("winner", pos1val);
              let val = 'O';

              if (val === pos1val) {
                  pos1val = 1;
                  
              }
              

              else {
                  pos1val = 2;
                  
              }
              
              
              showWinner(pos1val);
          }
          
      }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);




