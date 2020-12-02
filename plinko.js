class Plinko {
  constructor(x, y) {
    var options = {
        isStatic:true,
    }
    this.body = Bodies.circle(x, y,8,options);
  this.radius=8;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
  ellipseMode(RADIUS);
    fill('#110000');
    ellipse(0, 0,this.radius,this.radius);
    pop();
  }
}
