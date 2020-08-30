const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var divsion;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;  
  divsion = new Divisions(200,200,5,100);
  ground=new Ground(250,700,500,20)
}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  divsion.display();
  drawSprites();
}