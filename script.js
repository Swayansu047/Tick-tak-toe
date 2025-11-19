let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let turn=true;//player X

let wpattern=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
    ];

    boxes.forEach(box=>{
        box.addEventListener("click",()=>{
            if(turn===true){
                box.innerHTML="X";
                turn=false;
            }
            else{
                box.innerHTML="O";
                turn=true;
            }
            box.disabled=true;
            drawn();
            checkWinner();
            

            
        });

            
    });
    
     const checkWinner=()=>{
        for(let pattern of wpattern){
            let pos1=boxes[pattern[0]].innerHTML;
            let pos2=boxes[pattern[1]].innerHTML;
            let pos3=boxes[pattern[2]].innerHTML;
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                    alert(`${pos3} is the winner`);
                    location.reload();
                }
            }
        }
    }

    resetBtn.addEventListener("click",()=>{
        location.reload();
    });

    const drawn=()=>{
        let fill=true;
        boxes.forEach(box=>{
            if(box.innerHTML===""){
                fill=false;
                 }
                });
            if(fill){
                alert("Match Drawn");
                location.reload();
            }
 };
    
            
            








