
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

var pin1,pin2,pin3;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new Ball (150,200,15);
	ground = new Ground (640,350,1280,10);

	pin1 = new Dustbin (750,307,10,70);
	pin2 = new Dustbin (810,337,125,10);
	pin3 = new Dustbin (870,307,10,70);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();

  pin1.display();
  pin2.display();
  pin3.display();

 

}


function keyPressed (){
	if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce (ball.body,ball.body.position, {x:35, y:-40})
	
	}
	}


