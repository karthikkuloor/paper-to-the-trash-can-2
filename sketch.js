
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,ground1,box2,box3,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



box3=new Box(1520,580,200,150);
ball1=new Ball(100,580,30,30);
ground1=new Ground(800,600,1600,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
 
 ground1.display();

 box3.display();
 ball1.display();
 ifpressed();
}
function ifpressed(){
	if(keyCode===UP_ARROW){
		console.log("boy");
		Body.applyForce(ball1.body,ball1.body.position,{x:5,y:-10});
	}
}


