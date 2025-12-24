window.addEventListener('load', () => {
  const player = document.getElementById('player');
  const joystick = document.getElementById('joystick');
  const stick = document.getElementById('stick');

  let playerPos = 45;
  let dragging = false;

  const center = 60; // joystick center
  const maxDistance = 40;
  const maxSpeed = 1.2;
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
