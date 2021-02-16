var deer, deerImg;
var jungle, jungleImg;
var bird, birdImg, birdGroup;
var rareFruit, rareFruitImg, rareFruitGroup;
var ground;
var hunter;
var dog, dogImg;
var hunter, hunterImg;
var log, logImg, logGroup;
var bullet, bulletImg, bulletGroup;
var score;


function preload() {
  deerImg = loadImage("deer.gif");
  jungleImg = loadImage("jungle.jpg");
  birdImg = loadImage("bird.gif");
  rareFruitImg = loadImage("nova.png");
  dogImg = loadImage("dogg.gif");
  hunterImg = loadImage("hunter.png");
  logImg = loadImage("log.png");
  bulletImg = loadImage("bullet.png");
}


function setup(){
  createCanvas(displayWidth, displayHeight);

  jungle = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  jungle.addImage(jungleImg);
  jungle.scale = 3.5;
  jungle.velocityX = -3;

  deer = createSprite(490, 516, 20, 20);
  deer.addImage(deerImg);
  deer.scale = 0.8;

  ground = createSprite(displayWidth/2, 700, displayWidth, 20);
  ground.visible = false;

  birdGroup = new Group();
  rareFruitGroup = new Group();
  logGroup = new Group();
  bulletGroup = new Group();

  hunter = createSprite(150, 510, 20, 20);
  hunter.addImage(hunterImg);
  hunter.scale = 0.2;

  dog = createSprite(0, 575, 29, 20);
  dog.addImage(dogImg);
  dog.scale = 0.7;

  score = 0;
  }
 

function draw() {
  background(255,255,255);  

  if(jungle.x < 600){
    jungle.x = displayWidth/2;
  }

  if(keyDown("enter") && deer.y > displayHeight - 600){
    deer.velocityY = -10;
  }

  deer.velocityY = deer.velocityY + 0.5;

  deer.collide(ground);

  if(rareFruitGroup.isTouching(deer)){
    rareFruitGroup.destroyEach();
    score = score + 3;
  }

  spawnBirds();
  spawnFruits();
  spawnLogs();
  spawnBullets();

  drawSprites();
  
  textSize(30);
  fill("black");
  text("Score : " + score, displayWidth - 160, displayHeight - 800);

}


function spawnBirds(){
  if(frameCount % 250 === 0){
    bird = createSprite(displayWidth + 30, Math.round(random(displayHeight - 850, displayHeight - 700)));
    bird.addImage(birdImg);
    bird.velocityX = -3;
    bird.lifetime = 300;
    birdGroup.add(bird);
  }
}


function spawnFruits(){
  if(frameCount % 500 === 0){
    rareFruit = createSprite(displayWidth + 30, Math.round(random(displayHeight - 600, displayHeight - 500)));
    rareFruit.addImage(rareFruitImg);
    rareFruit.scale = 0.1;
    rareFruit.velocityX = -5;
    rareFruit.lifetime = 300;
    rareFruitGroup.add(rareFruit);
  } 
}

function spawnLogs(){
  if(frameCount % 700 === 0){
    log = createSprite(displayWidth + 30, displayHeight - 250);
    log.addImage(logImg);
    log.scale = 0.3;
    log.velocityX = -3;
    log.lifetime = 700;
    logGroup.add(log);
  }
}

function spawnBullets(){
  if(frameCount % 1200 === 0){
    bullet = createSprite(displayWidth - 1200, displayHeight - 500);
    bullet.addImage(bulletImg);
    bullet.scale = 0.05;
    bullet.velocityX = 6;
    bullet.lifetime = 500;
    bulletGroup.add(bullet);
  }
}