//adding matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//object variables
var b,p;
var gb1,gb2,gb3,gb4,gb5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);
 
//making world
	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies 
	b = new Blueb(200,600,50,50);
	p = new Pinkb(1300,600,50,50);
	gb1 = new Gb(200,700,200,20);
	gb2 = new Gb(1300,700,200,20);
	gb3 = new Gb(550,450,200,20);
	gb4 = new Gb(950,450,200,20);
	gb5 = new Gb(750,250,200,20);


}

function draw() {
  
  background("white");
  
 b.display();
 p.display();
 gb1.display();
 gb2.display();
 gb3.display();
 gb4.display();
 gb5.display();
  drawSprites();
 
}







