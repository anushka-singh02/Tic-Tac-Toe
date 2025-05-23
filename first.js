let boxes= document.querySelectorAll(".box");
let win= document.querySelector(".winner");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#newgame");
let reset= document.querySelector(".reset");


let winnerlist=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let playerO=true;
let count=0;

for(let box of boxes){
    box.addEventListener("click",()=>{
        if(playerO){
            box.innerText="O";
            playerO=false;
            count++;
        }
        else{
            box.innerText="X";
            playerO=true;
            count++;
        }
        box.disabled=true;
        checkwinner();
    });
    
    
}

const disableboxes=()=>{
    for ( let box of boxes){
        box.disabled=true;
    }   
}
const enableboxes=()=>{
   for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
   }
}

const resetbutton = ()=>{
    playerO= true;
    enableboxes();
    count=0;
    win.classList.add("hide");
}

const showWinner= (winner)=>{
    msg.innerText= `Congratulations , winner is ${winner}`;
    win.classList.remove("hide");
    disableboxes();
}

const checkwinner= ()=>{
    for(let list of winnerlist){
        let pos1= boxes[list[0]].innerText;
        let pos2= boxes[list[1]].innerText;
        let pos3= boxes[list[2]].innerText;
        if (pos1!="" && pos2!="" &&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
            else if( count===9){
                msg.innerText= "Draw";
                win.classList.remove("hide");
            }
        
        }
    }
}

newgame.addEventListener("click", resetbutton);
reset.addEventListener("click",resetbutton);


    
    

