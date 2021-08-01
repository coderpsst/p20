var fixedRect,movingRect;
var car, wall
var speed, weight 
function setup() {
  createCanvas(1600,400);
  car = createsprite(50,200,50,50)
  wall = createsprite(1500,200,60,height/2)
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  speed = random(55,90)
  weight = random(400,1500)
  car.velocityX = speed

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 )
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
  drawSprites();
}
