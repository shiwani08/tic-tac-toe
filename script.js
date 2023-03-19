console.log("welcome birroooo")
let turn = "X"
let isgameover = false; 

//function to change turn
const changeTurn = ()=>{
    return turn ==="X"?"0":"X"
}

//function to check for a win
const check = () => {
    let boxtext = document.getElementsByClassName('boxtext'); 
    let wins = [
        [0, 1, 2, 22.5, -9.5, 90],
        [3, 4, 5, 22.5, 5, 90],
        [6, 7, 8, 22.5, 20.5, 90],
        [0, 3, 6, 7, 5, 0],
        [1, 4, 7, 22.5, 5, 0],
        [2, 5, 8, 37.5, 5, 5],
        [0, 4, 8],
        [2, 4, 6],
    ]
    
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover = true
            document.querySelector(".line").style.transform = "translate(20vw, 39vw) rotate(90deg)"
        }
    })
}
//main kaam
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            check();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }   
    })
})

//to reset
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
})