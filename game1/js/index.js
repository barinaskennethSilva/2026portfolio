const player = document.getElementById('player');
const btnleft = document.getElementById('btnleft');

btnleft.addEventListener('click', ()=>{
  alert('hello world');
});

/*btnleft.addEventListener('touchstart', ()=>movePlayer(-5));

function movePlayer(amount){
  if (gameOver) return;
  playerPos = Math.min(90, Math.max(0,playerPos + amount));
  playerStyle.left = playerPos  + "%"
}*/