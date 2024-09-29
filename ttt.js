let but=document.querySelectorAll("#box");
let rebut = document.querySelector("#reset");
let newbut = document.querySelector("#new");
let msg = document.querySelector(".msg");
let p = document.querySelector("#msg");
let abc = document.querySelector("main");
let turnO = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset = () =>
{
    abc.classList.remove("msg");
    turnO = true;
    enable();
    msg.classList.add("msg");
}

but.forEach((box) => {
box.addEventListener("click", ()=>{
    // console.log("box was clicked");
    if(turnO)
    {
        box.classList.remove("meow");
        box.innerText = "O";
        turnO=false;
    }
    else
    {
        box.classList.add("meow");
        box.innerText = "X";
        turnO=true;
    }
    box.disabled = true;

    checkwin();

    });
});

const showwin = (winner) => {
    abc.classList.add("msg");
    p.innerText = `Congratulations! Winner is ${winner}.`;
    
    msg.classList.remove("msg");
    disable();
}

const disable = () =>
{
    for(let box of but)
    {
        box.disabled=true;
    }
}

const enable = () =>
{
    for(let box of but)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const checkwin = () =>
{
    for(let pat of win)
    {
        let p1 = but[pat[0]].innerText;
        let p2 = but[pat[1]].innerText;
        let p3 = but[pat[2]].innerText;

        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                // console.log("Winner", p1);
                showwin(p1);
            }
        }
    }
}

newbut.addEventListener("click",reset);
rebut.addEventListener("click",reset);