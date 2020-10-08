class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 10, options);
     
      this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      this.color = color(random(0.255),random(0.255));
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  }