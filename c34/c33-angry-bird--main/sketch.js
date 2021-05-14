const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  t1=new Tram(50,170,50,50)
  t2=new Tram(150,170,50,50)
  t3=new Tram(250,170,50,50)
  t4=new Tram(350,170,50,50)
  t5=new Tram(450,170,50,50)
  t6=new Tram(550,170,50,50)
  r1=new Rock(1100,200,100,100)
  c1=new SlingShot(t1.body,t2.body)
  c2=new SlingShot(t2.body,t3.body)
  c3=new SlingShot(t3.body,t4.body)
  c4=new SlingShot(t4.body,t5.body)
  c5=new SlingShot(t5.body,t6.body)
  
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  text(mouseX+','+mouseY,mouseX,mouseY)
  var collision = Matter.SAT.collides(t6.body,r1.body);
  if(collision.collided) { flag=1; }
  if(flag ===1){ textSize(30); stroke(3); fill('blue'); text("CRASH",500,200); crashSound.play(); }
 ground.display();
 t1.display();
 t2.display();
 t3.display();
 t4.display();
 t5.display();
 t6.display();
 r1.display();
 c1.display();
 c2.display();
 c3.display();
 c4.display();
 c5.display();
}
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(t6.body,{x:t6.body.position.x,y:t6.body.position.y}, {x:0.5,y:0});
	}
}




  
