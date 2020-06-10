const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var division1,division2,division3,division4,division5,division6;
var particles = [];
var plinkos= [];
var divisions= [];

for (var j = 0; j < particles.length; j++){
	particles[j].display();
}

if(frameCount%60===0){
	particles.push= new Particles(random(width/2-10,width/2+10),10,10);

for (var j = 40; j<= width; j=j+50){
	plinkos.push( new Plinko(j,75));
}

for (var j = 15; j<= width-10; j=j+50){
	plinkos.push( new Plinko(j,175));
}

for (var j = 40; j<= 480; j=j+50){
	plinkos.push( new Plinko(j,275));
}

for (var j = 40; j<= 480; j=j+50){
	plinkos.push( new Plinko(j,375));
}



function setup() {
	createCanvas(480, 800);
	}

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(240,790,480,20);
	division1 = new Divisions(50,710,10,140);
	division2 = new Divisions(130,710,10,140);
	division3 = new Divisions(210,710,10,140);
	division4 = new Divisions(290,710,10,140);
	division5 = new Divisions(370,710,10,140);
	division6 = new Divisions(450,710,10,140);


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  drawSprites();
}