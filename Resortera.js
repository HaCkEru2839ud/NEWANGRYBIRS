class Resortera {
  constructor(bodya, pointb) {
    var options = {
      bodyA: bodya,
      pointB: pointb,
      stiffness: 0.04,
      length: 10,
    }
    
    this.pointB = pointb;
    this.image1 = loadImage("resortera1.png");
    this.image2 = loadImage("resortera2.png");
    this.image3 = loadImage("resortera3.png");

    this.cadena = Constraint.create(options);
    World.add(mundo, this.cadena);
  }

  volar() {
    this.cadena.bodyA = null;
  }

  juntar(body) {
    this.cadena.bodyA = body;
  }

  display() {
    //imageMode(CENTER);
    image(this.image1, 290, 120);
    image(this.image2, 260, 120);

    if (this.cadena.bodyA) {
      var pointA = this.cadena.bodyA.position;
      var pointB = this.pointB;
      push();
      stroke(48, 22, 8);
      if (pointA.x < 280) {
        strokeWeight(10);
        line(pointA.x - 40, pointA.y, pointB.x - 10, pointB.y);
        line(pointA.x - 40, pointA.y, pointB.x + 30, pointB.y - 3);
        image(this.image3, pointA.x - 40, pointA.y - 10, 15, 30);
      }
      // else {
      //  strokeWeight(3);
      // line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
      // line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
      // image(this.image3, pointA.x +  25, pointA.y - 10, 15, 30);
      //}
      pop();
    }
  }
}
