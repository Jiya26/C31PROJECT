class Plinko {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':true
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  }