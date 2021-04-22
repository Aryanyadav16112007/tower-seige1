const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;

var stand1,stand2;
var slingShot;
var ball;
var polygon_img;




function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;

 ground=new ground();
 stand1=new stand(380,300,270,10)
 stand2=new stand(700,200,200,10)

  block1=new Block(120,275,30,40)
  block2=new Block(150,275,30,40)
  block3=new Block(180,275,30,40)
  block4=new Block(210,275,30,40)
  block5=new Block(240,275,30,40)
  block6=new Block(270,275,30,40)
  block7=new Block(300,275,30,40)
  block8=new Block(330,235,30,40)
  block9=new Block(360,235,30,40)
  block10=new Block(390,235,30,40)
  block11=new Block(420,235,30,40)
  block12=new Block(450,235,30,40)
  block13=new Block(480,195,30,40)
  block14=new Block(510,195,30,40)
  block15=new Block(540,195,30,40)
  block16=new Block(570,155,30,40)

   ball=Bodies.circle(50,200,20);
  World.add(world,ball);

  var slingShot=new Slingshot(this.ball,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  drawSprites();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
}
function mouseDragged(){
Matter.Body.set
}
function mouseReleased(){
  slingShot.fly();
}