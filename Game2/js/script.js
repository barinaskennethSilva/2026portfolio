const player = document.getElementById("player");
const door = document.getElementById("door");

let x = 60;
let y = 300;
let doorOpen = false;

// ROOM 1 boundaries
const room1 = {
  x: 20,
  y: 20,
  w: 140,
  h: 200
};

// DOOR area
const doorArea = {
  x: 145,
  y: 95,
  w: 30,
  h: 20
};

function move(dx, dy) {
  let newX = x + dx;
  let newY = y + dy;

  // GAME BORDER
  if (newX < 6 || newX > 296 || newY < 6 || newY > 476) return;

  // CHECK ROOM WALL COLLISION
  if (isInsideRoom(newX, newY, room1)) {
    // allow only if passing through door AND door is open
    if (!doorOpen || !isInsideDoor(newX, newY)) {
      return;
    }
  }

  // MOVE PLAYER
  x = newX;
  y = newY;
  player.style.left = x + "px";
  player.style.top = y + "px";
}

// ROOM CHECK
function isInsideRoom(px, py, room) {
  return (
    px > room.x &&
    px < room.x + room.w &&
    py > room.y &&
    py < room.y + room.h
  );
}

// DOOR CHECK
function isInsideDoor(px, py) {
  return (
    px > doorArea.x &&
    px < doorArea.x + doorArea.w &&
    py > doorArea.y &&
    py < doorArea.y + doorArea.h
  );
}

// TOGGLE DOOR
function toggleDoor() {
  doorOpen = !doorOpen;
  door.style.background = doorOpen ? "green" : "brown";
}
