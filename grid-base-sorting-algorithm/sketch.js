// 2D Array Grid Base Sorting Algorithm Visualizer 
// Monica Trinh
// October 19th, 2021

let buttonArray;
let buttonSort;
let slider;
let arraySize;
let values = [];
let states = [];
let cellWidth = 10;
let ding;
let soundtrack;
let sorted;
let buttonState = "generate";
let checkbox;
let colorPicker;
let isPicked = false;
let counter = 0;
let doneCount = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // music and sountrack
  ding = loadSound('assets/ding.mp3');
  // soundtrack = loadSound('assets/soundtrack.mp3');

  // slider value determines the size of the array
  slider = createSlider(0, width / cellWidth, 50);
  slider.position(width / 2 - width / 8, 40);
  slider.style('width', '80px');

  checkbox = createCheckbox('Color Picker', false);
  checkbox.changed(changeColor);
  checkbox.position(width / 2 + 150, 40);
}

function draw() {
  background(0);

  // buttons
  arrayButton();
  quickSortButton();

  let arrayDimension = arraySize * cellWidth;

  // fill in the color while sorting
  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] === 0) {
      fill('#ff290d');
    }
    else if (states[i] === 1) {
      fill('#7affd9');
    }
    else {
      if (isPicked) {
        fill(colorPicker.color());
      }
      else {
        fill(255);
      }

    }
    // draw rectangles representing data in an array
    rect(i * cellWidth + (width - arrayDimension) / 2, height - values[i], cellWidth, values[i]);
  }

  if(floor(counter/values.length) >= 1){
    counter = 0;
  }
}

function changeColor() {
  if (this.checked()) {
    colorPicker = createColorPicker('pink');
    colorPicker.position(width / 2 + 300, 40);
    isPicked = true;
  }
  else{
    isPicked = false;
  }
}

function generateNewArray() {
  // generate new array
  if (buttonState === "generate") {
    arraySize = slider.value();
    values = new Array(arraySize);
    for (let i = 0; i < values.length; i++) {
      values[i] = random(height - 200);
      states[i] = -1;
    }
    // switching state to sort
    buttonState = "sort";
  }
}

// button design
function arrayButton() {
  buttonArray = createButton('Generate New Array');
  buttonArray.position(width / 2 - width / 4, 40);
  buttonArray.mousePressed(generateNewArray);
  buttonArray.style('background-color', "pink");
}

// button design
function quickSortButton() {
  buttonSort = createButton('Quick Sort');
  buttonSort.position(width / 2, 40);
  buttonSort.mousePressed(isItSort);
  buttonSort.style('background-color', "pink");
}

// call the quickSort function when click on the sort button
function isItSort() {
  if (buttonState === "sort") {
    // soundtrack.play();
    quickSort(values, 0, values.length - 1);
  }
}

// delay with async/await for quicksort function to animate the process
async function quickSort(array, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(array, start, end);
  states[index] = -1;

  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);

}

// determining pivotal value and partition
async function partition(array, start, end) {

  // setting pre-sorted value to turquoise
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  // sort from pivotIndex to pivotValue for each new sorting cohort
  let pivotValue = array[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;

  // swap out lesser value to the left and change the state of the coloring
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      await swapOut(array, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      doneCount = ! doneCount;
      states[pivotIndex] = 0; 
      counting();
    }
  }
  await swapOut(array, pivotIndex, end);

  // setting new sorted value to white
  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      
      states[i] = -1;
     
    }
  }
  return pivotIndex;
}

function counting(){
  if(doneCount){
    counter ++;
    doneCount = ! doneCount;
  }
  else{
    // counter --;
  }
}

// swap values
async function swapOut(array, a, b) {
  await sleep(50);
  let hold = array[a];
  array[a] = array[b];
  array[b] = hold;
}

// Promise to delay 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}