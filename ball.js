class Ball{
    constructor(x,y,radius,diameter){
     var  options={restitution:0.5,friction:0.5,density:100,isStatic:false}
      this.body=Bodies.rectangle(x,y,width,height,options);
     this.radius=radius;
     this.diameter=diameter;
     World.add(world,this.body)
this.image=loadImage("paper.png")
    }
display(){
    var angle=this.body.angle;
push();
translate(this.body.position.x,this.body.position.y);
rotate(angle)
imageMode(CENTER);
image(this.image,0,0,this.radius,this.diameter);
pop();
}
}