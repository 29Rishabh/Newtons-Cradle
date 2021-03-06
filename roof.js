class Roof{
    constructor(x,y,width,height){
        var ground_options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,ground_options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/Roof.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,400,200);
    }
}