const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,480,20);
  for (var k = 0;k<=width;k = k +80){
    divisions.push(new division(k,height - divisionHeight/2,10,divisionHeight));
  }

  for (var j = 40;j<=width;j = j +50){
    plinkos.push(new plinko(j,75));
   }
  for (var j = 40;j<=width;j = j +50){
    plinkos.push(new plinko(j,175));
      }
  for (var j = 40;j<=width;j = j +50){
    plinkos.push(new plinko(j,275));
        }
  for (var j = 40;j<=width;j = j +50){
    plinkos.push(new plinko(j,375));
          }
  for (var j = 40;j<=width;j = j +50){
    plinkos.push(new plinko(j,375));
  }

  for (var j = 0;j<particles.length;j++){
    particles[j].display();
         }

  if(frameCount%90 === 0){

particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for (var k = 0;k<divisions.length;k++){
    divisions[k].display();
         }
  for (var m = 0;m<plinkos.length;m++){
    plinkos[m].display();
         }
}
function draw () {
  background(0,0,0);
  Engine.update(engine);
  ground.display();
  drawSprites();
}
