class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("enemy.png");
    this.visiblity = 255;
  }
  display(){
 //console.log(this.visiblity );
    if(this.body.speed < 3){
    super.display();
   }    
    else{
     World.remove(mundo, this.body);
     push();
     this.visiblity = this.visiblity - 5;
     tint(255,this.visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
 }
  
   puntaje(){
    if (this.visiblity < 0 && this.visiblity > -2111){
      puntaje++;
      //puntaje=puntaje+1;
    }
  }
}