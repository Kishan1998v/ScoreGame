//player 1 Score, plyer2 Score, MaxScore
var p1Score=0 , p2Score =0 , maxScore=5;
var game = true;

//Button 1 and 2 / button reset
var b1 = document.querySelector("#button1");
var b2 = document.querySelector("#button2");
var reset = document.querySelector("#reset");

//Player 1 and 2 Score board In h1
var p1Sc = document.querySelector("#p1sc");
var p2Sc = document.querySelector("#p2sc");
//Max Score Board In h6
var maxSc = document.querySelector("#maxSc");
//H1
var h1v = document.querySelector(".h1v");

//Input bar
var inpBar = document.querySelector("input");

//Reset Function
function resett(){
    p1Score = p2Score = 0;
    game = true;
    p1Sc.textContent = p1Score;
    p2Sc.textContent = p2Score;
    p1Sc.classList.remove("winner1");
    p2Sc.classList.remove("winner2");
    document.body.classList.remove("winner1b");
    document.body.classList.remove("winner2b");
}

//button One Function
b1.addEventListener("click", function(){
    if(game){
        p1Score++;
        if(p1Score === maxScore){
            p1Sc.classList.add("winner1");
            document.body.classList.add("winner1b");
            h1v.textContent = "Congratulation P1 You Won";
            game = false;
        }
        p1Sc.textContent = p1Score;
        
    }
    
});

//Button 2 Function
b2.addEventListener("click", function(){
    if(game){
        p2Score++;
        if(p2Score === maxScore){

            p2Sc.classList.add("winner2");
            document.body.classList.add("winner2b");
            h1v.textContent = "Congratulation P2 You Won";
            game = false;
        }
        p2Sc.textContent = p2Score; 
    }
    
   
});

//Input BAR
inpBar.addEventListener("change",function(){
    maxScore = Number(this.value);
    maxSc.textContent = maxScore;
    resett();
    h1v.textContent = "Score Keeper";
});

//Reset Button Function 
reset.addEventListener("click",function(){
    h1v.textContent = "New Game";
    resett();
});


