const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var division1,division2,division3,division4,division5,division6,division7;
var ground;
var ball,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9;
var plinkos=[];
var particles=[];

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

  for(var j = 10; j <=width; j=j+50)
  {      
     plinkos.push(new Plinko(j,50));
  }
 for(var j= 15; j <=width-20; j=j+50)
  {
  plinkos.push(new Plinko(j,110)) ;
  }
  for(var j= 20; j <=width-20; j=j+50)
  {
  plinkos.push(new Plinko(j,170)) ;
  }
  for(var j= 25; j <=width-20; j=j+50)
  {
  plinkos.push(new Plinko(j,230)) ;
  }
  for(var j= 30; j <=width-20; j=j+50)
  {
  plinkos.push(new Plinko(j,290)) ;
  }



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

  if(frameCount%60===0){
    particles.push(new Ball(random(width/2-20,width/2+20),10))
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }

  for(var i = 0;i<particles.length;i++){
    particles[i].display();
  }
  drawSprites();
}

