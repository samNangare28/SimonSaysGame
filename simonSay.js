let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let btns = ["red", "orange", "blue", "green"];

let start = false;
let level = 0;

//for to start the game for the first time by pressing eny key
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game Started");
        start = true;
        levelUp();
    }
});


//to level up the game this func is used
//in this we take a random btn and flash it for the 1sec and start our game with level 1for the first time
function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 4); 
    let randomColor = btns[randomidx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    //console.log(randomBtn.innerText);        //for our information which random btn get choose by the random method
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

//this is for our flash btn function in which we create a class flas
//and chage its background color to white for a mili sec
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

//to check the seq of game and user
function chackAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over... Your Score was <b>${level}</b> <br>Press any key tp start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    chackAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}