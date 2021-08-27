
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

var boxes=[];
var boxes1=[];
var boxes3=[];
var boxes2=[];
var ball;
var rope;
var score=0;

function setup() {
  createCanvas(1400,650);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(700,630,2000,40);

  for(i=50;i<500;i+=50){
    boxes.push(new Box(700,i,70,50));
  }

  for(i=50;i<500;i+=50){
    boxes1.push(new Box(770,i,70,50));
  }

  for(i=50;i<500;i+=50){
    boxes2.push(new Box(840,i,70,50));
  }

  for(i=50;i<500;i+=50){
    boxes3.push(new Box(910,i,70,50));
  }
  
  ball=new Ball(400,350,70);

  rope=new Rope(ball.body,{x:400,y:0});


}


function draw() 
{
  background("skyBlue");
  Engine.update(engine);

  for(i=0;i<boxes.length;i++){
    boxes[i].display();
  }

  for(i=0;i<boxes1.length;i++){
    boxes1[i].display();
  }

  for(i=0;i<boxes2.length;i++){
    boxes2[i].display();
  }

  for(i=0;i<boxes3.length;i++){
    boxes3[i].display();
  }

  

  ball.display();
  rope.display();

  ground.display();

  fill("red");
  textSize(30);
  text('Score: '+score,1200,50);
  fill("purple");
  textSize(50);
  text("WREAK IT!!",50,50)
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
