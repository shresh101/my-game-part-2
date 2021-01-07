const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var drone1;
var missile1, bullet1;


function setup() {
  createCanvas(displayWidth/ 4 , displayHeight - 20);
  engine = Engine.create();
  world = engine.world;

  drone1 = new Drone(400,100,50,50);
}

function draw() {
  background(255,255,0);  
  drawSprites();
  drone1.display();
}
function moving() {
  if(keyIsDown(37)){
    this.x -= 10
  }
  if(keyIsDown(39)){
    this.x += 10
  }
}