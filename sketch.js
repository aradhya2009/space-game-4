var h1,hi_img;
var a1,a1_img,alien_group;
var background, background_img;
var comets, comets_img;
var life=3;
var b1, blackhole, blackhole_img;

function preload() {
h1_img=loadImage("h1 in space.png");
a1_img=loadImage("alien1.gif");
background_img=loadImage("space background.jpg")
blackhole_img=loadImage("blackhole.jpg")


}

function setup() {
  createCanvas(1200,800);

  background=createSprite(0,0,1200,400);
  background.addImage(background_img);
  background.scale=3.5;
  background.velocityY=4

  h1=createSprite(400, 200, 50, 50);
  h1.addImage(h1_img);
  h1.scale=0.7
  h1.setCollider("circle",0,0,20);

  alien_group=new Group();
  blackhole_group=new Group();


}

function draw() {
  //background(255,255,255);  

   if(background.y>600){
     background.y=400
   }

if(keyDown(LEFT_ARROW)){
  h1.x=h1.x-2;
}
  if(keyDown(RIGHT_ARROW)){
    h1.x=h1.x+2;
}

if(keyDown(DOWN_ARROW)){
  h1.y=h1.y+2;
}

spawnALien();

spawnBlackhole();

if(h1.isTouching(alien_group)){
  alien_group.destroyEach();
}

if(h1.isTouching(blackhole_group)){
  h1.destroy();
}

  fill("yellow")
text("lives:"+life,600,200);

drawSprites();
}

function spawnALien(){
  if(frameCount%300===0){
    a1=createSprite(200,-50);
    a1.addImage(a1_img);
    a1.velocityY=4;
    a1.x=Math.round(random(300,700));

   alien_group.add(a1);



  }
}

function spawnBlackhole(){
  if(frameCount%300===0){
    b1=createSprite(200,500);
    b1.addImage(blackhole_img);
    b1.scale=0.3
   // b1.x=Math.round(random(300,700));

   blackhole_group.add(b1);


  }
}
