window.addEventListener('load', () => {
  const player = document.getElementById('player');
  const joystick = document.getElementById('joystick');
  const stick = document.getElementById('stick');

  let playerPos = 45;
  let dragging = false;

  const center = 60; // joystick center
  const maxDistance = 40;
  const maxSpeed = 1.2;
  //jump function
  let Jump = -10;
  let gravity = 0.5;
  let velocity = 0;
  let y = 0;
  
 document.getElementById('jump').addEventListener("click",function(){
velocity = Jump;
  });
  function gameloop(){
   velocity += gravity;
   y+= velocity;
   //ground collision
   if(y > 0){
     y = 0;
     velocity = 0;
   }
  player.style.bottom =  -y + "px";
  requestAnimationFrame(gameloop);
  }
  gameloop(); 
/////////////////////////////////////  
  
  
  joystick.addEventListener('touchstart', () => {
    dragging = true;
  });

  joystick.addEventListener('touchmove', (e) => {
    if (!dragging) return;

    const touch = e.touches[0];
    const rect = joystick.getBoundingClientRect();

    let x = touch.clientX - rect.left - center;
    x = Math.max(-maxDistance, Math.min(maxDistance, x));

    // move stick
    stick.style.transform = `translateX(${x}px)`;
//speed calculation
const distance = Math.abs(x);
const speed = (distance / maxDistance) * maxSpeed;
const direction = Math.sign(x);
playerPos += direction * speed;

    // move player
    playerPos += x * 0.02;
    playerPos = Math.min(90, Math.max(0, playerPos));
    player.style.left = playerPos + "%";
  });

  joystick.addEventListener('touchend', () => {
    dragging = false;
    stick.style.transform = "translateX(0)";
  });
});
