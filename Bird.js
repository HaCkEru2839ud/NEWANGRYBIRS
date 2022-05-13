class Bird {
  constructor(x,y){
    var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
     this.image = loadImage("angry bird.png");
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
     this.body = Matter.Bodies.rectangle(x, y, 70, 70, options);
    Matter.Body.setMass(this.body, this.body.mass * 4);   ////
            Matter.World.add(mundo, this.body);
  }

       
  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    
    
    if(this.body.velocity.x > 10 && this.body.position.x > 330){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
 console.log(this.body.velocity.x)

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
    
    
  }
}
