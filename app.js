let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-button");
let msgContainer = document.querySelector(".top-container");
let msg = document.querySelector(".win-msg");


let turnX = true;//player


//all the possible winning patterns
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

//code for the clicking of player
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if(turnX) {
            //playerO
            box.innerText = "X";
            turnX = false;
        }
        else {
            //playerX
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});

//logic to check who is winner
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != "") {
            if(pos1value === pos2value && pos2value === pos3value) {
                console.log("winner",pos1value);

                showWinner(pos1value);
            }
        }
    }
}

//function to show display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


//for to enableboxes for starting a new game
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

//function to reset the game and is calles in resetbtn
const resetgame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//resetbtn
resetbtn.addEventListener("click", resetgame);


//disabling all boxes
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
