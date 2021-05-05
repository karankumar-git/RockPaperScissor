let pscore = 0;
let cscore = 0;

let letsgo = document.getElementById("play");
let letgo = document.querySelector("#play");

let pscoreEle = document.getElementById("pscore");
let cscoreEle = document.getElementById("cscore");

let rockele =document.getElementsByClassName("rock");
let paperele =document.getElementsByClassName("paper");
let scissorele =document.getElementsByClassName("scissor");

let rockBut = document.getElementById("rock");
let paperBut = document.getElementById("paper");
let scissorBut = document.getElementById("scissor");

document.getElementsByClassName("choice")[0].style.visibility = "hidden";

paperele[0].style.visibility = "hidden";
scissorele[0].style.visibility = "hidden";
paperele[1].style.visibility = "hidden";
scissorele[1].style.visibility = "hidden";

letsgo.addEventListener("click",function(){
    document.getElementsByClassName("choice")[0].style.visibility = "visible";
    document.getElementsByClassName("stickers")[0].style.visibility = "visible";
    letsgo.classList.add('animate__animated', 'animate__bounceOutLeft');

})

rockBut.addEventListener("click",function(){
    let random1 = (randomint(3));
    console.log(random1);
    scissorele[0].classList.remove('animate__animated', 'animate__bounce');
    rockele[0].classList.remove('animate__animated', 'animate__bounce');
    paperele[0].classList.remove('animate__animated', 'animate__bounce');

    scissorele[0].classList.add('animate__animated', 'animate__bounce');
    rockele[0].classList.add('animate__animated', 'animate__bounce');
    paperele[0].classList.add('animate__animated', 'animate__bounce');

    scissorele[0].style.visibility = "hidden";
    paperele[0].style.visibility = "hidden";
    rockele[0].style.visibility = "visible";
    compChoice(random1);
    scoreboardOFrock(random1);
    check();

})
paperBut.addEventListener("click",function(){
    let random1 = (randomint(3));
    console.log(random1);
    scissorele[0].classList.remove('animate__animated', 'animate__bounce');
    rockele[0].classList.remove('animate__animated', 'animate__bounce');
    paperele[0].classList.remove('animate__animated', 'animate__bounce');
    
    scissorele[0].classList.add('animate__animated', 'animate__bounce');
    rockele[0].classList.add('animate__animated', 'animate__bounce');
    paperele[0].classList.add('animate__animated', 'animate__bounce');

    rockele[0].style.visibility = "hidden";
    scissorele[0].style.visibility = "hidden";
    paperele[0].style.visibility = "visible";
    compChoice(random1);
    scoreboardOFpaper(random1);
    check();
})
scissorBut.addEventListener("click",function(){
    let random1 = (randomint(3));
    console.log(random1);
    scissorele[0].classList.remove('animate__animated', 'animate__bounce');
    rockele[0].classList.remove('animate__animated', 'animate__bounce');
    paperele[0].classList.remove('animate__animated', 'animate__bounce');

    scissorele[0].classList.add('animate__animated', 'animate__bounce');
    rockele[0].classList.add('animate__animated', 'animate__bounce');
    paperele[0].classList.add('animate__animated', 'animate__bounce');

    rockele[0].style.visibility = "hidden";
    paperele[0].style.visibility = "hidden";
    scissorele[0].style.visibility = "visible";
    compChoice(random1);
    scoreboardOFscissor(random1);
    check();
})


function randomint(maximum){
    return Math.floor(Math.random()*maximum);
}


function compChoice(number){
    if (number == 0){
        paperele[1].style.visibility = "hidden";
        scissorele[1].style.visibility = "hidden";
        rockele[1].style.visibility = "visible";

    }
    else if(number == 1){
        rockele[1].style.visibility = "hidden";
        scissorele[1].style.visibility = "hidden";
        paperele[1].style.visibility = "visible"
    }
    else{
        rockele[1].style.visibility = "hidden";
        paperele[1].style.visibility = "hidden";
        scissorele[1].style.visibility = "visible"
    }
}
function scoreboardOFrock(num){
    if(num==1){
        cscore=cscore+1;
        cscoreEle.innerHTML = "Computer's score : " + cscore;
    }
    if(num==2){
        pscore=pscore+1;
        pscoreEle.innerHTML = "Player's Score : " + pscore ;
    }
}
function scoreboardOFpaper(num){
    if(num==2){
        cscore=cscore+1;
        cscoreEle.innerHTML = "Computer's score : " + cscore;
    }
    if(num==0){
        pscore=pscore+1;
        pscoreEle.innerHTML = "Player's Score : " + pscore ;
    }
}
function scoreboardOFscissor(num){
    if(num==0){
        cscore=cscore+1;
        cscoreEle.innerHTML = "Computer's score : " + cscore;
    }
    if(num==1){
        pscore=pscore+1;
        pscoreEle.innerHTML = "Player's Score : " + pscore ;
    }
}
function check(){
    if(pscore==10){
        alert("Player wins!! 🥳🥳🥳")
        alert("Press OK if you want to play again")
        pscore = 0;
        cscore =0;
        document.getElementsByClassName("choice")[0].style.visibility = "hidden";
        letsgo.classList.remove('animate__animated', 'animate__bounceOutLeft');
        letsgo.classList.add('animate__animated', 'animate__bounceInLeft');
        cscoreEle.innerHTML = "Computer's score : " + cscore;
        pscoreEle.innerHTML = "Player's Score : " + pscore ;
    }
    if(cscore==10){
        alert("Computer Wins!!  🙄")
        alert("Press OK if you want to play again")
        cscore = 0;
        pscore=0;
        document.getElementsByClassName("choice")[0].style.visibility = "hidden";

        letsgo.classList.remove('animate__animated', 'animate__bounceOutLeft');
        letsgo.classList.add('animate__animated', 'animate__bounceInLeft');
        cscoreEle.innerHTML = "Computer's score : " + cscore;
        pscoreEle.innerHTML = "Player's Score : " + pscore ;
    }
}
