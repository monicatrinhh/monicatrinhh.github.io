// 2D Array Grid Base Sorting Algorithm Visualizer x 
// Monica Trinh
// October 19th, 2021

let buttonArray;
let slider;
let arraySize;
let values = [];
let states = [];
let buttonSort;

function setup() {
  createCanvas(windowWidth, windowHeight);

  arrayButton();
  
  buttonArray = createButton('Sort');
  buttonArray.position(width/2 , 40);
  // buttonArray.mousePressed(quickSort(values, 0, values.length - 1));

  slider = createSlider(0, width, 50);
  slider.position(width/2 - width/8, 40);
  slider.style('width', '80px');

  // change color of the sorting?
  arraySize = slider.value();
  values = new Array(arraySize);

  
}

function draw() {
  background(220);

}

function generateNewArray(){
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
}

function arrayButton(){
  buttonArray = createButton('Generate New Array');
  buttonArray.position(width/2 - width/4, 40);
  buttonArray.mousePressed(generateNewArray);
  buttonArray.style('background-color', "pink");
  buttonArray.style('fontFamily', 'poppins');
  buttonArray.style('borderRadius', '8px');
 
  buttonArray.style('borderStyle', 'solid');

  buttonArray.style('borderColor', 'red');

}