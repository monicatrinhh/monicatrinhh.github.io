// Ball Array
// Monica Trinh
// Date

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<100;i++){
    spawnBall();
  }
  
}

function draw() {
  background("black");
  
  for (let myball of ballArray){
    noStroke();
    fill(myBall.theColor);
    myBall.x = noise(myBall.time)*width;
    myBall.y = noise(myBall.time+100)*height;
    circle(myBall.x, myBall.y, myBall.radius*2);
    myBall.time += 0.003;
  }
}
function spawnBall() {
  let myball = {
    radius : random(10,30),
    time : random(1,1000), 
    x : random(width),
    y : random(height),
    theColor: color(random(255),(random(255),(random(255)),
  };
  ballArray.push(myBall);
}
