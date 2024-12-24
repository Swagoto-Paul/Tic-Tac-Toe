let boxes=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let home=document.querySelector("#home");
let mode=document.querySelector("#mode");
let body=document.querySelector("body");
let container=document.querySelector(".winner1");
let winner=document.querySelector("#msg");
let flag=true;
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


// ligh-dark mode:
current="dark";
document.querySelector("body").style.backgroundColor="black";

mode.addEventListener("click",()=>{
    if(current=="dark")
    {
        document.querySelector("body").style.backgroundColor="black";
        current="light";
    }
    else
    {
        document.querySelector("body").style.backgroundColor="rgb(115, 115, 115)";
        current="dark";
    }
});


// winner calculation:
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(flag)
        {
            box.innerHTML="X";
            box.classList.add("X");
            flag=false;
        }   
        else
        {
            box.innerText="O";
            box.classList.add("O");
            flag=true;
        }
        box.disabled=true; 
        check();
    });
});

function check()
{
    for(let pattern of win)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {   
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);                
                disable();
            }
        }
    }
}


// disable:
const disable=()=>
{
    for(box of boxes)
        box.disabled=true;
};


// shows winner:
const showWinner=(player)=>
{
    winner.innerText=`PLAYER '${player}' IS WINNER`;
    if(player==="X")
    {
        container.classList.remove("hide");
        container.classList.remove("winner2");
    }
    else
    {
        container.classList.remove("hide");
        container.classList.remove("winner1");
    }
}


// enable:
const enable= ()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        box.classList.remove("X");
        box.classList.remove("O");
        container.classList.add("hide");
        container.classList.add("winner1");
        container.classList.add("winner2");
        flag=true;
    }
};

reset.addEventListener("click",enable);
home.addEventListener("click",enable);

