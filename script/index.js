let inputDir={
    x:0,
    y:0
}
let speed=2;
let lastpainttime=0;
let snakearr=[
    {
        x:3,
        y:18
    }
]

let score=0;

let food={x:15,y:15}
function main(currtime){
    
    

    return ;


//  console.log(currtime);
gamestart();
}

function isCollide(snakearr){
    for(let i=1;i<snakearr.length;i++){
        if(snakearr[i].x===snakearr[0].x&&snakearr[i].y===snakearr[0].y){
            var audio = new Audio('./audio/end.mp3');
        audio.play();
                  return true;
        }
    }
    if(snakearr[0].x==21||snakearr[0].y==21||snakearr[0].x==-1||snakearr[0].y==-1){
        var audio = new Audio('./audio/end.mp3');
        audio.play();
        return true;
    }
}
function gamestart(){
console.log(score)
    if(isCollide(snakearr)){
        
        let highscore =JSON.parse(localStorage.getItem("highscore"))||[];
        inputDir={x:0,y:0};
        snakearr=[{x:0,y:0}]
        console.log(highscore)
        highscore.push(score)
        localStorage.setItem("highscore",JSON.stringify(highscore));
        score=0;
        
    }
if(snakearr[0].y===food.y&&snakearr[0].x===food.x){
    var audio = new Audio('./audio/food_G1U6tlb.mp3');
audio.play();
    snakearr.unshift({x: snakearr[0].x+ inputDir.x,y: snakearr[0].y+ inputDir.y});
    let a=2;
    let b=18;
    score++;
    document.getElementById("score").innerText="";
    document.getElementById("score").innerText="score:-"+score;

    food={x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
}
  for(let i=snakearr.length-2;i>=0;i--){
    snakearr[i+1] = {...snakearr[i]};

  }
  snakearr[0].x +=inputDir.x;
  snakearr[0].y +=inputDir.y;
 document.getElementById("display").innerHTML="";
 snakearr.map(function (el,index) {
    let div=document.createElement('div');
    div.style.gridRowStart=el.y;
    div.style.gridColumnStart=el.x;
    div.classList="snake"
    if(index==0){
        div.style.backgroundColor="red"
    }
    document.getElementById("display").append(div)
    
 });
 let div1=document.createElement('div');
    div1.style.gridRowStart=food.y;
    div1.style.gridColumnStart=food.x;
    div1.classList="food1"
    div1.setAttribute('class','food1');
    document.getElementById("display").append(div1)
 
}
 

 let normal=setInterval(gamestart, 200); 
window.addEventListener('keydown', e=>{
    
    switch(e.key){
        case "ArrowUp":
            if(inputDir.y!=1){
            inputDir.x=0;
            inputDir.y=-1;
            }
             break;
        case "ArrowDown":
            if(inputDir.y!=-1){
            inputDir.x=0
            inputDir.y=1
            }
            
            break;
        case "ArrowLeft":
            if(inputDir.x!=1){
            inputDir.x=-1
            inputDir.y=0
            }
            
            break;
        case "ArrowRight":
            if(inputDir.x!=-1){

                inputDir.x=1
                inputDir.y=0

            }


            break;
    }
})