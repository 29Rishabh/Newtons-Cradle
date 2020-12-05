class constraint{
    constructor(pointA,bodyB){
        var constraint_options={
            pointA: pointA,
            bodyB: bodyB,
            length: 300,
            stiffness: 0
        }
        this.rope=Matter.Constraint.create(constraint_options);
        World.add(world,this.rope);
    }
    display(){
        var body1=this.rope.pointA;
        var body2=this.rope.bodyB.position;
        stroke("white");
        line(body1.x,body1.y,body2.x,body2.y);
    }
}