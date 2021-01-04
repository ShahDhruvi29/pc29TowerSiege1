const Engine= Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint;
var ball;
var polygonImg,engine,world;
var groundy,stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
function preload(){
   polygonImg=loadImage("polygon.png")
   bgImg=loadImage("pc29.jpg")
}
function setup(){
 createCanvas(900,400)
engine= Engine.create();
world=engine.world;
Engine.run(engine)
groundy = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
//bottom-most
block1 = new Block(300,275,30,40);
console.log(block1);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
//semi-bottom
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
//semi=top
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
//top-most
block16 = new Block(390,155,30,40);

  //second 
  b1 = new Block(640,175,30,40);
  b2 = new Block(670,175,30,40);
  b3 = new Block(700,175,30,40);
  b4 = new Block(730,175,30,40);
  b5 = new Block(760,175,30,40);
  b6 = new Block(670,135,30,40);
  b7 = new Block(700,135,30,40);
  b8 = new Block(730,135,30,40);
  b9 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw(){
   background(bgImg)
   textSize(25);
   textFont("cursive")
   fill("white");
   text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",0,30);
   fill("lightgreen");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(247,154,13);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(121,323,454);
  block13.display();
  block14.display();
  block15.display();
  fill("pink");
  block16.display();
  fill("gold")
  stand1.display();
  stand2.display()
  fill(0)
  groundy.display();
  strokeWeight(2)
  stroke("gold")
  fill(246,108,191)
  b9.display()
  fill("turquoise")
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b1.display()
  fill(212,24,45)
  b6.display()
  b7.display()
  b8.display()
  fill("gold");
  imageMode(CENTER)
  image(polygonImg ,ball.position.x,ball.position.y,40,40);
  slingShot.display()
}
function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
   slingShot.fly();
 }