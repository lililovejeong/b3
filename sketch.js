const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, Sally;
var bolita, Screech;
var box, box1, box2;
var log1;
var ConstraintLog;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("sprites/fondo1.jpeg");
}

function setup() {
  var canvas = createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ConstraintLog = new Log(230,180,80, PI/2);
  ground = new Ground(600,height,1200,20);

  //Fila 1
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810,260,300, PI/2);

  //Fila 2
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810, 220);
  log3 = new Log(810,160,300, PI/2);

  //Fila 3
  box5 = new Box(810,156,70,70);
  log4 = new Log(760,120,150, PI/7);
  log5 = new Log(810,120,150, -PI/7);

  bird = new Bird(100,100);

  ConstraintLog = new Log(230,180,80, PI/2);
  chain = new Chain(bird.body, ConstraintLog.body);

  chain2 = new Chain(box5.body, log3.body);

  /*var options ={
    bodyA: bird.body,
    bodyB: ConstraintLog.body,
    stiffness: 0.04,
    length: 10
  }

  var chain = Constraint.create(options);
  World.add(world, chain);

 /* var Screech_options ={
    restitution: 1.0
  }

  Screech = Bodies.circle(600,30,20, Screech_options);
  World.add(world, Screech);*/

  console.log(box1);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  ground.display()
  ConstraintLog.display()
  box1.display()
  box2.display()
  pig1.display()
  log1.display()

  box3.display()
  box4.display()
  pig2.display()
  log3.display()
  

  box5.display()
  log4.display()
  log5.display()
  bird.display()

  /*ellipseMode(RADIUS)
  ellipse(Screech.position.x, Screech.position.y, 20, 20);*/
}