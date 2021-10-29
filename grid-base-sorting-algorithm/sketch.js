// 2D Array Grid Base Sorting Algorithm Visualizer 
// Monica Trinh
// October 19th, 2021

let buttonArray;
let buttonSort;
let slider;
let arraySize;
let values = [];
let states = [];
let w = 10;
let ding;
let sorted;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ding = loadSound('assets/ding.mp3');

  arrayButton();

  slider = createSlider(0, 500, 50);
  slider.position(width/2 - width/8, 40);
  slider.style('width', '80px');

  quickSortButton();
}

function draw() {
  background(0); 
  
  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('#ff290d');
    } else if (states[i] == 1) {
      fill('#7affd9');
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
  
}

function generateNewArray(){ 
  arraySize = slider.value();
  values = new Array(arraySize);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height-200);
    states[i] = -1;
  } 

}

function arrayButton(){
  buttonArray = createButton('Generate New Array');
  buttonArray.position(width/2 - width/4, 40);
  buttonArray.mousePressed(generateNewArray);
  buttonArray.style('background-color', "pink");
}

function quickSortButton(){
  buttonSort = createButton('Quick Sort');
  buttonSort.position(width/2, 40);
  buttonSort.mousePressed(isItSort);
  buttonSort.style('background-color', "pink");
}

function isItSort(){
  quickSort(values, 0, values.length - 1);

 
}


async function quickSort(array, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(array, start, end);
  states[index] = -1;

  await Promise.all([
    quickSort(array, start, index - 1),
    quickSort(array, index + 1, end)
  ]);
  // ding.play();
}

async function partition(array, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotValue = array[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      await swap(array, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(array, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}

async function swap(array, a, b) {
  await sleep(50);
  let temporary = array[a];
  array[a] = array[b];
  array[b] = temporary;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

