function compTurn(){
    const compChoice=Math.floor(Math.random()*3);
    if(compChoice==0){
        return "rock";
    }
    else if(compChoice==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

const score={
    Win:0,
    Lose:0,
    Tie:0
}

function getResult(player2){
    const player1=compTurn();
    if(player2===player1){
        result= "SHHH, It's a Tie!"
    }
    else if(
    (player2 === "rock" && player1 === "scissor") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissor" && player1 === "paper")
    ) {
        result="YEAH! You Won HURREY!";
    }
    else{
    result= "AHH! You Lost, I Win :)";
    }
    if(result=="SHHH, It's a Tie!"){
        score.Tie++;
    }
    else if(result=="YEAH! You Won HURREY!"){
        score.Win++;
    }
    else{
        score.Lose++;
    }

    document.getElementById("result").innerHTML=`
    <h2>🎯 <strong>${result}</strong></h2>
    <h2>🧑‍💻 You choose: <strong>${player2}</strong></h2>
    <h2>🤖 Computer choose: <strong>${player1}</strong></h2>`;
    document.getElementById("score").innerHTML=`
    <p>Win: ${score.Win} ${"|"} Lose: ${score.Lose} ${"|"} Tie: ${score.Tie}</p>`;
}





