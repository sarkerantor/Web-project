let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx];
}
const drawgame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw. Play again!";
    msg.style.backgroundColor="blue";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("User choice = ",userchoice);
    const compchoice=gencompchoice();
    console.log("Comp choice = ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
