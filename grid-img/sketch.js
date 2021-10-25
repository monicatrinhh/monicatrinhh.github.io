// Grid Images
// Monica Trinh
// Date

let gridSize = 30;
let grid;
let song;
let cellWidth;
let cellHeight;

let grassImg;
let leavesImg;

let cellX = Math.floor(mouseX/cellWidth);
let cellY = Math.floor(mouseY/cellHeight);

function preload()
{
  grassImg = loadImage("assets/grass.png");
  leavesImg = loadImage("assets/leaves.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
  song = loadSound("assets/soundfx.wav"); // to play music
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        image(leavesImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      // rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}

function createRandom2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        grid[y].push(0);
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}


function mousePressed(){
  song.play();
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);
  
  
  if (grid[cellY][cellX] === 1){
    grid[cellY][cellX] = 0;
    grid[cellY+1][cellX] = 0;
    grid[cellY-1][cellX] = 0;
    grid[cellY][cellX+1] = 0;
    grid[cellY][cellX-1] = 0;

  }
 
  else if (grid[cellY][cellX] === 0){
    grid[cellY][cellX] = 1;
    grid[cellY+1][cellX] = 1;
    grid[cellY-1][cellX] = 1;
    grid[cellY][cellX+1] = 1;
    grid[cellY][cellX-1] = 1;
  }

}

// press e for white; press b for black