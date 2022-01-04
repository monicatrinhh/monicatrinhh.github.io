// Bubble Sort
// Monica Trinh
// Date

let somelist = [5, 15, 3, 8, 9, 1, 20, 7];

function bubbleSort(aList) {
  let position = 0;
  let anySwaps = true;
  //one pass
  while (anySwaps) {
    anySwaps = false;
    for (let i = 0; i < aList.length - 1; i++) {
      if (aList[i] > aList[i + 1]) {
        anySwaps = true;
        let temp = aList[i];
        aList[i] = aList[i + 1];
        aList[i + 1] = temp;
      }
    }
    console.log(aList);
  }
  return aList;
  //check for swap
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(somelist));
}

function draw() {
  background(220);
  rect(mouseX, mouseY, 100, 50);
}
