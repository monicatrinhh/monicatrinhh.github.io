// Bubble Demo
// Monica Trinh
// September 20,2021

let theBubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(220);
  bubbleUp();
  displayBubble();
}

function mousePressed(){
  for (let i=0; i<5;i++){
    spawnBubble();
  }
  
}

function spawnBubble(){
  let bubble = {
    x: mouseX,
    y: mouseY,
    radius: random(20,50),
    dx: 0,
    dy: -3,
    theColor: color(random(255),random(255),random(255)),
  }
  theBubble.push(bubble);
}

function bubbleUp() {
  for (let bubble of theBubble){
    bubble.y += bubble.dy;

    // jitter sideways
    bubble.x += random(-5,5);
  }
  
}

function displayBubble(){

  for (let bubble of theBubble){
    noStroke();
    circle(bubble.x, bubble.y, bubble.radius*2);
    fill(bubble.theColor);
  }
}