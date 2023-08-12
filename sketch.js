var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var score = 0;
var health = 100;
var dmg = 40;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png")
  bombImg = loadImage("bomb.png")
  canImg = loadImage("energyDrink.png")
}

function setup(){
    
  createCanvas(400,400);
    
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  coin=createSprite(Math.floor(Math.random() * 250) + 82, Math.floor(Math.random() * 20) + 0)
  coin.addImage(coinImg);
  coin.velocityY = 1.5;
  coin.scale=0.5;

  bomb=createSprite(Math.floor(Math.random() * 250) + 82, Math.floor(Math.random() * 35) + 0)
  bomb.addImage(bombImg);
  bomb.velocityY = 3;
  bomb.scale=0.1;

  energy_drink=createSprite(Math.floor(Math.random() * 250) + 82, Math.floor(Math.random() * 20) + 0)
  energy_drink.addImage(canImg);
  energy_drink.velocityY = 2.2;
  energy_drink.scale=0.125;

  hp_bar = createSprite(95, 47, 81, 15)
  hp_bar.shapeColor = "#00f730"

  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
    

  leftBoundary=createSprite(0,0,100,800);

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  }

  function draw() {
    background(0);
    path.velocityY = 4;
    
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
    
    //code to reset the background
  if(path.y > 400 ){
    path.y = height/1000;
  }

  if((boy.y == energy_drink.y && boy.x == energy_drink.y))
  {
  path.velocityY = path.velocityY + 1;
  energy_drink.x = Math.floor(Math.random() * 250) + 82;
  energy_drink.y = Math.floor(Math.random() * 20) + 0;
  }

  if((boy.y == coin.y && boy.x == coin.y))
  {
  score = score + 1;
  coin.x = Math.floor(Math.random() * 250) + 82;
  coin.y = Math.floor(Math.random() * 20) + 0;
  }

  if((boy.y == bomb.y && boy.x == bomb.y))
  {
  health = health - damage;
  hp_bar.width = 9 * health/10
  bomb.x = Math.floor(Math.random() * 250) + 82;
  bomb.y = Math.floor(Math.random() * 20) + 0;
  }



  drawSprites();
  textSize(20);
  fill("yellow")
  text("Score: "+score, 275, 27);
  fill("red")
  text("Hp: "+health, 62, 27);
 
}


