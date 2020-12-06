
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, PaperIMG
var dustbin, DustbinIMG

function preload()
{
	
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,1600,20)
	
	sideBox1 = new Dustbin(width/2-100, height-95, 20, 100)
	sideBox2 = new Dustbin(width/2+100, height-95 , 20, 100)

	paperBall = new Paper(200, 450)

	baseBox = new BaseBox(width/2, height-100 , 240, 150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  drawSprites();
  ground.display();
  paperBall.display();
  sideBox1.display();
  sideBox2.display();
  baseBox.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:85, y:-95})
	}

}



