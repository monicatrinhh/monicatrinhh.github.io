// Bubble Sort
// Monica Trinh
// Date

let somelist = [5, 15, 3, 8, 9, 1, 20, 7];
let anotherList = [25, 145, 43, 58, 96, 19, 20, 73];

function selectionSort(aList) {
  for (let i = 0; i < aList.length; i++) {
    let currentP = i;
    for (let j = i + 1; j < aList.length; j++) {
      if (aList[j] < aList[currentP]) {
        currentP = j;
      }
    }
    if (i !== currentP) {
      let temp = aList[i];
      aList[i] = aList[currentP];
      aList[currentP] = temp;
    }
  }
  return aList;
  //check for swap
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(anotherList));
}

function draw() {
  background(220);

}
