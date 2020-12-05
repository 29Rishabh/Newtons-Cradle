class Bob{
    constructor(x,y){
        var options={
            friction: 0.5,
            density: 1.2,
            restitution: 1
        }
        this.body=Bodies.circle(x,y,32,options);
        this.image=loadImage("sprites/Bob.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,80,80);
    }
}