
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world , ground , paper, dustbin_1, dustbin_2, dustbin_3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground = new Ground(400,540,800,10);
	paper = new Paper(100,200,40);
	dustbin_1 = new Dustbin(500,530,150,10);
	dustbin_2 = new Dustbin(430,500,10,60);
	dustbin_3 = new Dustbin(570,500,10,60);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.displayground();
  paper.displaypapers();
  dustbin_1.displaydustbin();
  dustbin_2.displaydustbin();
  dustbin_3.displaydustbin();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:115,y:-115});
	}
}

