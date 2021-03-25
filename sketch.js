var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY = 1;
var END = 0;
var gameState = 1;
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);

  path=createSprite(width/2,200);
    path.addImage(pathImg);
    path.velocityY = 4;

//creating boy running
boy = createSprite(width/2,height-50,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG = createGroup();
diamondsG = createGroup();
jwelleryG = createGroup();
swordG = createGroup();
  
  boy.setCollider("circle",0,0,0)
  boy.debug = true;
}

function draw() {

  background(0);
  
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(gameState === PLAY)  
  
  {
      boy.x = World.mouseX;
    
        path.velocityY = 4;

  if   (path.y > height )
  {
       path.y = height/2;
  }
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection = treasureCollection + 200;
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection = treasureCollection + 100;
    }else if(swordG.isTouching(boy)) {
      gameState = END;
    }
     
  }
     
    
  
  
 else  if(gameState === END) { 
     path.velocityY = 0;
   
    cashG.setVelocityYEach(0);
    jwelleryG.setVelocityYEach(0);
    diamondsG.setVelocityYEach(0);
    swordG.setVelocityYEach(0);
   
    
  boycollide = swordG;
   boy.addAnimation("SahilRunning",boyImg);
    
   if(keyDown("space")){
     gamestate = PLAY;
   }
  
  }
    

 
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width-600,height-500);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(width-50,100),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(width-50,100),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(width-50,100),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(width-50,100),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 200;
  swordG.add(sword);
  }
}