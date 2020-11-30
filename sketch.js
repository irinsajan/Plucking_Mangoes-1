const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Juno;
var tree;
var stone;
var floor;
var string;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	tree = loadImage("tree.png");
	Juno = loadImage("girl.png");
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	floor = new Ground(600, 480, 1300, 5);

	mango1 = new Mango(840, 160, 50);
	mango2 = new Mango(920, 180, 50);
	mango3 = new Mango(970, 130, 50);
	mango4 = new Mango(1075, 130, 50);
	mango5 = new Mango(1157, 185, 50);

	stone = new Rock(140, 320, 200, 270);

	string = new Chain(stone.body, {x: 140, y:320});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  image(Juno, 120, 210, 200, 270);

  floor.display();

  image(tree, 700, -10, 500, 500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();

  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
    string.fly();
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<-lmango.r + lmango.r) {
			Matter.Body.setStatic(lmango.body, false)
		}
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:140, y:320})
		string = new Chain(stone.body, {x: 140, y:320});
	}
}