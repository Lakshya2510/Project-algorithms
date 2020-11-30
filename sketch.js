var fixed, moving;

function setup() {
  createCanvas(1000, 600);
  fixed = createSprite(700, 300, 100, 150);
  fixed.shapeColor = "green";
  moving = createSprite(100, 300, 100, 150);
  moving.shapeColor = "green";
}

function draw() {
  background(255, 255, 255);
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if (moving.x - fixed.x < moving.width / 2 + fixed.width / 2 && fixed.x - moving.x < moving.width / 2 + fixed.width / 2
    && moving.y - fixed.y < moving.height / 2 + fixed.height / 2 && fixed.y - moving.y < moving.height / 2 + fixed.height / 2) {
    fixed.shapeColor = "red";
    moving.shapeColor = "red";
  }
  else {
    fixed.shapeColor = "green";
    moving.shapeColor = "green";
  }


  drawSprites();
}