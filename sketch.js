var ball, playerPaddle, wall1, wall2, wall3, wall4, score, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, b0x11, box12, box13, box14

function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200, 30, 30);
  ball.shapeColor = "white";
  playerPaddle = createSprite(200, 300, 100, 5);
  playerPaddle.shapeColor = "yellow";
  wall1 = createSprite(390, 0, 800, 10);
  wall1.shapeColor = "blue";
  wall2 = createSprite(0, 390, 10, 800);
  wall2.shapeColor = "blue";
  wall3 = createSprite(400, 0, 10, 800);
  wall3.shapeColor = "blue";
  wall4 = createSprite(0, 400, 800, 10);
  wall4.shapeColor = "red"
}

function draw() {
  background(30);
  createEdgeSprites()
  ball.bounceOff(playerPaddle);
  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  playerPaddle.bounceOff(wall1)
  playerPaddle.bounceOff(wall2)
  playerPaddle.bounceOff(wall3);
  if (keyIsDown(ENTER)) {
    ball.velocityX = ball.velocityX + 3;
    ball.velocityY = ball.velocityY - 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerPaddle.position.x = playerPaddle.position.x + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerPaddle.position.x = playerPaddle.position.x - 5;
  }
  if (ball.isTouching(wall4)) {
    ball.shapeColor = "orange"
    ball.velocityX = ball.velocityX = 0
    ball.velocityY = ball.velocityY = 0
  }
  if (ball.isTouching(wall4)) {
    stroke(200);
    fill("red");
    textSize(24);
    text("GameOver", 150, 200);

    ball.setVelocity = (0, 0);

  }
  stroke(0)
  fill(0)
  textSize(24)
  text("score", 370, 10);
  drawSprites();
}




