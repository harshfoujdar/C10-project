var ship,ship_running;
var seaImage;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(1360,620);
  sea=createSprite(0,0,100,600);
  sea.addImage(seaImage);
  sea.scale=1
  sea.x=sea.width/2;
  sea.velocityX=-4;

  //creating ship
  ship=createSprite(50,160,20,50);
  ship.addAnimation("running",ship_running);

  //adding scale and position to ship
  ship.scale = 0.10;
  ship.x = 100
 
  
}

function draw() {
  background("white");

  //logging the x position of the ship
  console.log(ship.x)
  if (sea.x<0){
   sea.x=sea.width/2;
  } 
  drawSprites();
}