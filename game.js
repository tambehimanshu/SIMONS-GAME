/*
let gameseq=[];
let userseq=[];

let btns=["red", "blue", "green", "yellow"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game is started");
        started=true;

        levelUp();
    }
});


function levelUp() {
    userseq=[];
    level++;
    h2.innerText=`Level ${level} `; 

    let randidx=Math.floor(Math.random() * 3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);

    console.log(randidx);
    console.log(randcolor);
    console.log(randbtn);

    btnFlash(randbtn);  
}


function checkAns(idx){
   // console.log("curr level:",level);
   

   if(userseq[idx] === gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelUp, 1000);
    }
    
   }else{
    h2.innerHTML=`game over Your score was <b>${level}</b> <br>press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   }
}

function btnPress(){
    console.log(this);
    let btn =this;
    btnFlash(btn);

    userColor= btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250 );

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
} 
*/
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}