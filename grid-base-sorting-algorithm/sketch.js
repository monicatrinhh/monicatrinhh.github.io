// 2D Array Grid Base Sorting Algorithm
// Monica Trinh
// October 19th, 2021


function setup() {
  createCanvas(windowWidth, windowHeight);

  // generate new Array
  bGenerate = createButton('Generate New Array');
  bGenerate.position(width / 2 - (width / 4), 40);
  bGenerate.mousePressed(generateNewArray);

  // Array Size slider
  slider = createSlider(0, 50, 5);
  slider.position(width / 2 - (width / 8), 45);
  slider.style('width', '80px');

}

function draw() {
  background(220);

}

function generateNewArray() {

}