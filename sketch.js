const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var motor, mundo;
var caja1, caja2, caja3, caja4, caja5, caja6;
var piso1, piso2, piso3, piso4;
var pig1, pig2, pig3;
var backgroundImg;
var plataforma;
var bird;
var cadena_Ave;
var resorteRA;
var estado=1;
var puntaje=0;
var trajectory=[];
var mConstraint;

function preload() {
  smoke = loadImage("smoke.png");
   if(hour()>=06 && hour()<=19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }

 //console.log(hour());
  
  backgroundImg = loadImage(bg);
}

function setup() {
  var canvas = createCanvas(1200, 400);
  motor = Engine.create();
  mundo = motor.world;

  
  ground = new Piso(600, height, 1200, 20);
  izq= new Piso(10,200, 20,400);
     der = new Piso (1180,200, 20,400);
  top=new Piso(600, 0, 1200, 20);
  platforma = new Piso(200, 350, 300, 80);
  
  box1 = new Caja(700, 320, 70, 70);
  box2 = new Caja(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Tronco(810, 260, 300, PI / 2);

  box3 = new Caja(700, 240, 70, 70);
  box4 = new Caja(920, 240, 70, 70);
  pig3 = new Pig(810, 220);

  log3 = new Tronco(810, 180, 300, PI / 2);

  box5 = new Caja(810, 160, 70, 70);
  log4 = new Tronco(760, 120, 150, PI / 7);
  log5 = new Tronco(870, 120, 150, -PI / 7);

  bird = new Bird(260, 150);

 // log6 = new Tronco(230, 180, 80, PI / 2);
  resorteRA = new Resortera(bird.body, { x: 300, y: 150 });
    
     const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
 // mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(motor, options);
  World.add(mundo, mConstraint);
    

}

function draw() {
  background(backgroundImg);
  //text(mouseX+" , "+mouseY,40,30)
  Puntaje_pig();
  Engine.update(motor);
//  strokeWeight(4);
  
  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  pig1.puntaje();
  log1.display();

  box3.display();
  box4.display();
  pig3.display();
  pig3.puntaje();
  log3.display();

  box5.display();
  log4.display();
  log5.display();

  bird.display();
  platforma.display();
  //log6.display();
  resorteRA.display();
  
  if(bird.body.position.x>1000){
            Matter.Body.setPosition(bird.body,{x:200, y:50});
          resorteRA.juntar(bird.body);
estado=1
  }
  if(bird.body.position.y<10){
            Matter.Body.setPosition(bird.body,{x:200, y:50});
          resorteRA.juntar(bird.body);
estado=1
  }
    if(bird.body.speed < 4 && estado == 2 ){
      bird.trajectory = [];
            Matter.Body.setPosition(bird.body,{x:200, y:50});
          resorteRA.juntar(bird.body);
      estado = 1
    }
}

/*function mouseDragged() {
  if (estado==1)
  Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY }); 
}
*/

function mouseReleased() {
  
  setTimeout(() => {
    resorteRA.volar(); 
  }, 100);
  estado=2;
}

/*function keyPressed() {
  if (key == ' ') {
    World.remove(mundo, bird.body);
    World.remove(mundo, bird.body);
    bird = new Bird(150, 300, 25);
    resorteRA.juntar(bird.body);
  }
}
*/

function keyPressed(){
        if(keyCode === 54 && bird.body.speed < 3 ){
      bird.trajectory = [];
            Matter.Body.setPosition(bird.body,{x:200, y:50});
          resorteRA.juntar(bird.body);
    }
 if(keyCode === 13 ){
  
   World.remove(mundo, bird.body);
   
   World.remove(mundo, box1.body);
   World.remove(mundo, box2.body);
   
   World.remove(mundo, pig1.body);
   World.remove(mundo, log1.body);
   World.remove(mundo, box3.body);
   
   World.remove(mundo, box4.body);
   World.remove(mundo, pig3.body);
   World.remove(mundo, log3.body);
   World.remove(mundo, box5.body);
   
   World.remove(mundo, log4.body);
   World.remove(mundo, log5.body);
   
   box1 = new Caja(700, 320, 70, 70);
  box2 = new Caja(920, 320, 70, 70);
  pig1 = new Pig(810, 350);
  log1 = new Tronco(810, 260, 300, PI / 2);

  box3 = new Caja(700, 240, 70, 70);
  box4 = new Caja(920, 240, 70, 70);
  pig3 = new Pig(810, 220);

  log3 = new Tronco(810, 180, 300, PI / 2);

  box5 = new Caja(810, 160, 70, 70);
  log4 = new Tronco(760, 120, 150, PI / 7);
  log5 = new Tronco(870, 120, 150, -PI / 7);

  bird = new Bird(260, 150);
   
   puntaje=0;
    Matter.Body.setPosition(bird.body,{x:200, y:50});
          resorteRA.juntar(bird.body);
   
   
   
   
   
   
   
 }
 estado=1; 
}

function Puntaje_pig(){
  fill("brown");
  textSize(40);
  text("Score: "+ puntaje, width-300,50)
}

