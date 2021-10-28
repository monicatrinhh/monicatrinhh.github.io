// Ball OOP demo
// Monica Trinh
// Date

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // for (let i=0; i<10; i++){
  //   let x = mouseX;
  //   let y = mouseY;
  //   let ball = new Ball(x,y);
  //   ballArray.push(ball);
  // }
    
}

function draw() {
  background(220);

  
  for( let ball of ballArray){
    ball.move();
    ball.display();
  }
  
}

function mousePressed(){
  let ball = new Ball(mouseX,mouseY);
  ballArray.push(ball);
}

class Ball{
  constructor(x,y){
    this.r = random(20,50);
    this.x = x;
    this.y = y;
    this.dx = random(-5,5);
    this.dy = random(-5,5);
    this.theColor = color(random(255),random(255),random(255));
  }

  display(){
    noStroke();
    circle(this.x,this.y,this.r*2);
    fill(this.theColor);
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
    
    if(this.x <= this.r && this.x >= width-this.r){
      this.dx *= -1;
    }

    if(this.y <= this.r && this.y >= height-this.r){
      this.dy *= -1;
    }
  }
}