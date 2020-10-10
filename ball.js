class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.color = color(random(20,255),random(52,255),random(20,200));
      this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      fill(this.color);
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  }