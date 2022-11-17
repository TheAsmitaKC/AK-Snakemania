let inputDir ={x:0, y:0};
const foodsound = new Audio('food.mp3');
const gameoversound = new Audio('gameover.mp3');
const movesound = new Audio('move.mp3');
const musicsound=new Audio('music.mp3');
let speed=6;
let lastPaintTime=0;
let score =0;
let snakeArr=[
    {x:13,y:10}
]
food={
    x:10, y:12
};
function main(ctime){
    window.requestAnimationFrame(main);
   // console.log(ctime)
    if((ctime -lastPaintTime)/1000<1/speed){
        return;
    }
    lastPaintTime= ctime;
    gameEngine();
   
}
function isCollide(snake){
    for(let i=1;i <snakeArr.length;i++){
        if(snake[i].x===snake[0].x  && snake[i].y===snake[0].y){
            return true;
        }
    }
        if(snake[0].x>=15 || snake[0].x <=0 || snake[0].y>=15 || snake[0].y <=0){
            return true;
        
    }
}


function gameEngine(){
    if(isCollide(snakeArr)){
        gameoversound.play();
        musicsound.pause();
        inputDir={x:0, y:0};
        alert("Game Over.Press any key to start again.");
        snakeArr=[{x:13, y:10}];
        musicsound.play();
        score= 0;

    }

if(snakeArr[0].y==food.y && snakeArr[0].x==food.x){
    foodsound.play();
    score +=1;
    scoreBoard.innerHTML="Score:"+score;
    snakeArr.unshift({x:snakeArr[0].x + inputDir.x ,y:snakeArr[0].y + inputDir.y});
    let a= 2;
    let b= 13;
    food={ x:Math.round(a+(b-a)* Math.random()),y:Math.round(a+(b-a)* Math.random())}
    }
    for(let i=snakeArr.length-2; i>=0;i--) {
       
        snakeArr[i+1]={...snakeArr[i]};

     }
     snakeArr[0].x +=inputDir.x;
     snakeArr[0].y +=inputDir.y;
    box.innerHTML="";
snakeArr.forEach((e, index )=>{
         snakeElement= document.createElement('div');
         snakeElement.style.gridRowStart=e.y;
         snakeElement.style.gridColumnStart=e.x;
        
         if(index==0){
            snakeElement.classList.add('head');
         }   else{
         snakeElement.classList.add('snake');
        }
         box.appendChild(snakeElement);
});
foodElement= document.createElement('div');
foodElement.style.gridRowStart=food.y;
foodElement.style.gridColumnStart=food.x;
foodElement.classList.add('food')
box.appendChild(foodElement);
}


window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
  inputDirection ={
    x:0, y:1
  }
  movesound.play();
  switch(e.key){
    case "ArrowUp":
    console.log("ArrowUp");
    inputDir.x= 0;
    inputDir.y= -1;
    break;

    case"ArrowDown":
    console.log("ArrowDown");
    inputDir.x= 0;
    inputDir.y= 1;

    break;
    case"ArrowRight":
    console.log("ArrowRight");
    inputDir.x= 1;
    inputDir.y= 0;

    break;
    case"ArrowLeft":
    console.log("ArrowLeft");
    inputDir.x= -1;
    inputDir.y= 0;

    break;
   
    default:
        break;
  }
});