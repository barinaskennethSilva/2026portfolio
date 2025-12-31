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
  let moveDir = 0; // -1 = left, 1 = right, 0 = stop
let speed = 0;

 document.getElementById('jump').addEventListener("click",function(){
if (y === 0) { // prevent double jump
    velocity = Jump;
  }
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
 //walik physics (walk while jumping)
 playerPos += moveDir * speed;
 playerPos = Math.min(90, Math.max(0, playerPos));
 player.style.left = playerPos + "%";
  
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

  stick.style.transform = `translateX(${x}px)`;

  const distance = Math.abs(x);
  speed = (distance / maxDistance) * maxSpeed;
  moveDir = Math.sign(x); // -1, 0, 1
});

joystick.addEventListener('touchend', () => {
  dragging = false;
  moveDir = 0;
  speed = 0;
  stick.style.transform = "translateX(0)";
});


  joystick.addEventListener('touchend', () => {
    dragging = false;
    stick.style.transform = "translateX(0)";
  });
});
