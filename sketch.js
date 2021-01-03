const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350, 100, 550, 30);
	bob1 = new Bob(350, 400);
	bob2 = new Bob(280, 400);
	bob3 = new Bob(210, 400);
	bob4 = new Bob(420, 400);
	bob5 = new Bob(490, 400);
	rope1 = new Rope(bob1.body, roof.body);
	rope2 = new Rope(bob2.body, roof.body);
	rope3 = new Roof(bob3.body, roof.body);
	rope4 = new Roof(bob4.body, roof.body);
	rope5 = new Rope(bob5.body, roof.body);


	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
//Engine.update(engine);
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	//rope2.display();
	//rope3.display();
	//rope4.display();
	//rope5.display();
}
