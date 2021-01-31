var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("startgameorresetgame").onclick = function(){
    if(playing == true){
        location.reload();
    } 
    
    else{
       playing = true;
         score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        show("timing");
        
        timeremaining = 60;
        
        hide("gameover");
        document.getElementById("timingvalue").innerHTML = timeremaining;
       document.getElementById("startgameorresetgame").innerHTML = "Reset Game";
         
        startCountdown();
        
        generateQA();
    }
}



for(i=1; i<5; i++){
   
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                           score++;
    document.getElementById("scorevalue").innerHTML = score;
            show("correct");
                hide("wrong");
    setTimeout(function(){
                  hide("correct");
                },1000);
            generateQA();
        }
        
            else{
               show("wrong");
                hide("correct");
                   
    setTimeout(function(){ 
        hide("wrong");
                },1000) 
            }
        }
    }    
}






// funcions 
// Start Countdown
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timingvalue").innerHTML = timeremaining;
            if(timeremaining == 0){
// After Stoping Countdown
                stopCountdown();
        show("gameover");
                document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
               hide("timing");
               hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("startgameorresetgame").innerHTML = "Start Game";
    }
    },1000);
    
    // Stop Countdown.
    function stopCountdown(){
       
        clearInterval(action);
        
    }
}
// Generating Question And Answers
// Generate Correct Answer
function generateQA(){
    var x = 1+Math.round(9*Math.random());
    var y = 1+Math.round(9*Math.random());
     correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctPosition =1+Math.round(3*Math.random());    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//Positioning Correct Answer
//Generating Wrong Answers  
    var answers = [correctAnswer];
    for( i=1; i<=4; i++){
        if( i !== correctPosition){
            var wrongAnswer 
            do{wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
       }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
                 }
            }
    
                                                        
}
// To Show 
function show(ID){
    document.getElementById(ID).style.display = "block";
}
// To Hide
function hide(ID){
    document.getElementById(ID).style.display = "none";
}