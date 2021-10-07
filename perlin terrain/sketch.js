// Terrain
// Monica Trinh
// Date

let rectHeights = [];
let numberOfRects = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function draw() {
  background(220);
  displayTerrain();
}

function generateTerrain(){
  let time = 0;
  for (let i=0;i<numberOfRects;i++){
    let theHeight = noise(time) * height;
    rectHeights.push(theHeight);
    time += 0.002;
  }
}

function displayTerrain(){
  let theWidth = width/rectHeights.length;
  for (let i=0; i <rectHeights.length; i++){
    let theHeight = rectHeights[i];
    fill("pink");
    rect(theWidth*i,height,10,-theHeight);
  }
}