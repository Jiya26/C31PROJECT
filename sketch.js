const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var division1,division2,division3,division4,division5,division6,division7;
var ground;
var ball,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;
var plinkos=[];


function setup() {
  createCanvas(460,800);
  engine = Engine.create();
  world = engine.world;  
  ground=new Ground(250,680,500,20)
  division1 = new Divisions(5,570,8,200);
  division2 = new Divisions(95,570,8,200)
  division3 = new Divisions(185,570,8,200);
  division4 = new Divisions(275,570,8,200);
  division5 = new Divisions(365,570,8,200);
  division6 = new Divisions(455,570,8,200);
  ball = new Ball(200,0)
  ball1 = new Ball(100,300);
  ball2 = new Ball(50,-50);
  ball3 = new Ball(100,-80);
  ball4 = new Ball(150,-100);
  ball5 = new Ball(200,-120);
  ball6 = new Ball(250,-700);
  ball7 = new Ball(300,-800);
  ball8 = new Ball(350,-900);
  ball9 = new Ball(400,-1000);

}

function draw() {
  background(0); 
  Engine.update(engine);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();

  for(var j = 40; j <=width; j=j+50)
    {      
       plinkos.push(new Plinko(j,50));
    }
 	for(var j= 15; j <=width-10; j=j+50)
	{
	plinkos.push(new Plinko(j,100)) ;
	}

  drawSprites();
}