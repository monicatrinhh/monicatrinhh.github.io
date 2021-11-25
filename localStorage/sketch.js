// Local Storage
// Monica Trinh
// Nov 25th, 2021

let clickCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  textSize(42);
  text(clickCount, width/2, height/2);

  fill("red")
  text(getItem("highest"),100,100);
  
}

function mousePressed(){
  clickCount++;
  if (clickCount > getItem("highest")){
    storeItem("highest", clickCount);
  }
}