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


// switch the butonState back to generate for it to works properly, basically figured out when it stops to shove in stopping music and switching buttonState

function setup() {
  createCanvas(windowWidth, windowHeight);

  // music and sountrack
  ding = loadSound('assets/ding.mp3');
  soundtrack = loadSound('assets/soundtrack.mp3');

  // generate new array
  arrayButton();

  // array size
  slider = createSlider(0, width / cellWidth, 50);
  slider.position(width / 2 - width / 8, 40);
  slider.style('width', '80px');

  // sort button
  quickSortButton();
}

function draw() {
  background(0);

  let arrayDimension = arraySize * cellWidth;

  // fill in the color while sorting
  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] === 0) {
      fill('#ff290d');
    } else if (states[i] === 1) {
      fill('#7affd9');
    } else {
      fill(255);

    }
    // draw rectangles representing data in an array
    rect(i * cellWidth + (width - arrayDimension) / 2, height - values[i], cellWidth, values[i]);
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
    soundtrack.play();
    quickSort(values, 0, values.length - 1);
  }
}

// delay quicksort function and animate the process
async function quickSort(array, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(array, start, end);
  states[index] = -1;

  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);

}

// determining partition value/point and swap out the lesser value to the left 
async function partition(array, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotValue = array[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      await swapOut(array, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swapOut(array, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}

async function swapOut(array, a, b) {
  await sleep(50);
  let hold = array[a];
  array[a] = array[b];
  array[b] = hold;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}