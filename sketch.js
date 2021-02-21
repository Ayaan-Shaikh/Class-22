const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world,ground,ball

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world

  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,360,width,30,options)
  World.add(world,ground)

  console.log(ground)
  

ball=Bodies.rectangle(200,100,50,50,{restitution:1.5})
World.add(world,ball)

}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  fill(255)
    rect(ground.position.x,ground.position.y,width,30);
    ellipse(ball.position.x,ball.position.y,50,50);
}
