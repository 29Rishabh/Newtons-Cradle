
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1360, 653);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(552,500);
	bob2=new Bob(616,500);
	bob3=new Bob(680,500);
	bob4=new Bob(744,500);
	bob5=new Bob(808,500);
	
	roof=new Roof(680,200,400,40);

	rope1=new constraint({x: 552,y: 200},bob1.body);
	rope2=new constraint({x: 616,y: 200},bob2.body);
	rope3=new constraint({x: 680,y: 200},bob3.body);
	rope4=new constraint({x: 744,y: 200},bob4.body);
	rope5=new constraint({x: 808,y: 200},bob5.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-80});
		
	}
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-80});
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-150,y:-80});
		
	}
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:150,y:-80});
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:150,y:-80});
		
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:-80});
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:150,y:-80});
		
	}
}