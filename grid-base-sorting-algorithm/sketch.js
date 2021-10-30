// 2D Array Grid Base Sorting Algorithm Visualizer 
// Monica Trinh
// October 19th, 2021

let buttonArray;
let slider;
let arraySize;
let values = [];
let states = [];
let buttonSort;
let w = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  arrayButton();

  slider = createSlider(0, width, 50);
  slider.position(width / 2 - width / 8, 40);
  slider.style('width', '80px');

  // change color of the sorting?
  sortButton();
  frameRate(5);
  quickSort(values, 0, values.length - 1);
}

function draw() {
  background(0);

  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('#E0777D');
    } else if (states[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

function generateNewArray() {
  arraySize = slider.value();
  values = new Array(arraySize);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height - 400);
    states[i] = -1;
  }
}

function arrayButton() {
  buttonArray = createButton('Generate New Array');
  buttonArray.position(width / 2 - width / 4, 40);
  buttonArray.mousePressed(generateNewArray);
  buttonArray.style('background-color', "pink");
}

function sortButton() {
  buttonArray = createButton('Sort');
  buttonArray.position(width / 2, 40);

}

function quickSort(array, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(array, start, end);
  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);
}

function partition(array, start, end) {
  let pivotPoint = start;
  let pivotValue = array[end];
  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, pivotPoint);
      pivotPoint++;
    }
  }
  swap(array, pivotPoint, end);
  return pivotPoint;
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}









// function quickSort(arr, start, end) {
//   if (start >= end) {
//     return;
//   }
//   let index = await partition(arr, start, end);
//   states[index] = -1;

//   await Promise.all([
//     quickSort(arr, start, index - 1),
//     quickSort(arr, index + 1, end)
//   ]);
// }

// function partition(arr, start, end) {
//   for (let i = start; i < end; i++) {
//     states[i] = 1;
//   }

//   let pivotValue = arr[end];
//   let pivotIndex = start;
//   states[pivotIndex] = 0;
//   for (let i = start; i < end; i++) {
//     if (arr[i] < pivotValue) {
//       swap(arr, i, pivotIndex);
//       states[pivotIndex] = -1;
//       pivotIndex++;
//       states[pivotIndex] = 0;
//     }
//   }
//   swap(arr, pivotIndex, end);

//   for (let i = start; i < end; i++) {
//     if (i != pivotIndex) {
//       states[i] = -1;
//     }
//   }

//   return pivotIndex;
// }

// function swap(arr, a, b) {
//   await sleep(50);
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// }

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

