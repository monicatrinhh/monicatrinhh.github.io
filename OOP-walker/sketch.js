// OOP demo
// Monica Trinh
// OCt 27, 2021

let kayaan;
let nick;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kayaan = new Walker(width/2, height/2, "red");
  nick = new Walker(100,height/2, "blue");
}

function draw() {
  kayaan.display(); 
  kayaan.move();
  nick.display();
  nick.move();
 
}

class Walker{
  constructor(x,y,theColor){
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 5;
  }

  display(){
    fill(this.color);
    noStroke();
    circle(this.x, this.y, 5);
  }

  move(){
    let choice = random(100);
    if (choice < 25){
      this.y -= this.speed;
    }
    else if (choice < 50){
      this.y += this.speed;
    }
    else if (choice < 75){
      this.x -= this.speed;
    }
    else if (choice < 100){
      this.x += this.speed;
    }
  }
}