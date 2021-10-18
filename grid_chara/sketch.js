// chaarcter in grid
// Monica Trinh
// October 15th, 2021

let grid;
let gridSize = 20;
let cellWidth, cellHeight;
let level;
let playerX = 0;
let playerY = 0;

function preload() {
  level = loadJSON("assets/level.json"); // assume grid size is 20
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  // put player in grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  
  if (key === "s"){
    moveCharacter(playerX, playerY+1);
  }
  else if (key === "w"){
    moveCharacter(playerX, playerY-1);
  }
  else if (key === "a"){
    moveCharacter(playerX-1, playerY);
  }
  else if (key === "d"){
    moveCharacter(playerX+1, playerY);
  }
  
  if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
  }
 
}

function moveCharacter(newX, newY){
  if (newX >= 0 && newY >=0 && newX < gridSize && newY < height ){
    if(grid[newY][newX] === 0){
      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
  
  }


}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
}

function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      if(grid[y][x] === 9){
        fill("red");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}

function createRandom2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}
