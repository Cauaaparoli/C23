
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var engine;

var angle1 = 60;
var angle2 = 120;
var angle3 = 30;

var block;

var rotator1, rotator2, rotator3;

var particle1;
var particle2;
var particle3;
var particle4;
var particle5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var block = {
	  isStatic: true
	}

  	block1 = Bodies.rectangle(50, 40, 20, 20, block);

	block2 = Bodies.rectangle(800, 30, 20, 20, block);
	Matter.World.add(world, [block1, block2]);
	//-------------------------------------------------------------\\

	var rotator_options = {
		isStatic: true
	}

	rotator1 = Bodies.rectangle(380, 200, 500, 20, rotator_options);

	rotator2 = Bodies.rectangle(380, 200, 500, 20, rotator_options);

	rotator3 = Bodies.rectangle(380, 200, 500, 20, rotator_options);

	Matter.World.add(world, [rotator1, rotator2, rotator3]);
	//-------------------------------------------------------------\\

	var particle_options = {
	  isStatic: true
	}

	//crie múltiplos de corpos de partículas
	var particle_options = {
		restitution: 0.4,
		friction: 0.02
	}

  	particle1 = Bodies.circle(400, 20, 10, particle_options);

	particle2 = Bodies.circle(400, 20, 10, particle_options);

	particle3 = Bodies.circle(400, 20, 10, particle_options);

	particle4 = Bodies.circle(400, 20, 10, particle_options);

	particle5 = Bodies.circle(400, 20, 10, particle_options);
	
	Matter.World.add(world, [particle1, particle2, particle3, particle4, particle5]);
	//-------------------------------------------------------------------------------\\

	var plane_options = {
		isStatic: true
	}

	plane = Bodies.rectangle(190, 190, 200, 20, plane_options);
	Matter.World.add(world, [plane]);
	//-------------------------------------------------------------\\

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  background("PaleGreen");
  fill("FireBrick");

  Engine.update(engine);
  
  Matter.Body.rotate(rotator1, angle1);
  
  push();
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  angle1 += 200;
  pop();
  
  Matter.Body.rotate(rotator2, angle2);

  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  angle2 += 250;
  pop();
  
  Matter.Body.rotate(rotator3, angle3);

  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  angle3 += 230;
  pop();



  drawSprites();
 
}



