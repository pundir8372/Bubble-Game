var hit;
function makeBubble(){
  var clutter="";
  for(var i=0; i<=70; i++){
    var random=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">
            ${random}
          </div>`
  }
  document.querySelector("#panel-bottom").innerHTML=clutter;
}


function getNewHit(){
   hit=Math.floor(m=Math.random()*10);
  document.querySelector("#hit").innerHTML=hit;
}
var score=0;
function increaseScore(){
document.querySelector("#score").textContent=score+=10;
}

var timer=15;
function Timer(){
var timerValue=setInterval(()=>{
if(timer>=0){
  document.querySelector("#timer").innerHTML=timer--;
}
else{
  clearInterval(timerValue);
  document.querySelector("#panel-bottom").innerHTML=`<h1 style="color: red; text-align: center;">Game Over</h1>`
}
},1000)
}
document.querySelector("#panel-bottom").addEventListener("click",function(dets){
  var clickedNum=(Number(dets.target.textContent));
  if(clickedNum===hit){
    increaseScore();
    makeBubble();
    getNewHit();

  }
})

makeBubble();
Timer();
getNewHit();
increaseScore();