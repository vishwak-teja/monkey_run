
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, ground;
var score, survivalTime=0, wall;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 300);

  
monkey=createSprite(100, 260, 20, 20);
monkey.addAnimation("monkey", monkey_running);
monkey.scale=0.1
monkey.debug=false;


wall=createSprite(498, 150, 35, 300)
wall.shapeColor=color(220)

  

 ground=createSprite(250, 297, 500, 10);

FoodGroup=new Group();
obstacleGroup=new Group();

}


function draw() {
background(220);
  

monkey.collide(ground);




if (keyDown("space")&& monkey.y >= 260)  {
    monkey.velocityY=-11
    
    }

monkey.velocityY = monkey.velocityY+0.5  
  

  spawnFood(); 
  spawnobstacle();
 
if (monkey.isTouching(FoodGroup))  {
      FoodGroup.destroyEach();
}
  
 stroke("white") 
  textSize(16)
  fill("white")
  text("survival Time :- " +survivalTime, 320, 50)
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  
  
 if (monkey.isTouching(obstacleGroup)) {
     survivalTime=0
    obstacleGroup.setVelocityXEach(0)
     FoodGroup.setVelocityXEach(0)
 } 
  
  
  drawSprites();  
}

function spawnFood() {
  if (frameCount % 90 === 0) {
    banana=createSprite(510, 150, 20, 20);
    banana.velocityX=-5
  banana.addImage("banana", bananaImage)
banana.scale=0.1;
    banana.lifetime=-1
    
    banana.y=Math.round(random(120, 200))
   FoodGroup.add(banana);
  
   banana.depth=wall.depth
  wall.depth=wall.depth+1
  }  
  
}  







function spawnobstacle() {
  if (frameCount % 160.5 === 0) {
    obstacle=createSprite(510, 270, 20, 20);
    obstacle.velocityX=-5
    obstacle.addImage("obstacle", obstacleImage)
   obstacle.scale=0.1234
    obstacle.lifetime=-1
   obstacleGroup.add(obstacle);
  
  
  obstacle.depth=wall.depth
  wall.depth=wall.depth+1
  
  
  
  }  
  
}  