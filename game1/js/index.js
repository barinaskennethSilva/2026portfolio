window.addEventListener('load', () => {
  

const player = document.getElementById('player');
const btnleft = document.getElementById('btnleft');

let playerPos = 45;

btnleft.addEventListener('touchstart', ()=>movePlayer(-5));

function movePlayer(amount){
 /* if (gameOver) return;*/
  playerPos = Math.min(90, Math.max(0,playerPos + amount));
  player.style.left = playerPos  + "%"
}
});