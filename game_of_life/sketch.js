// Game of Life
// Monica Trinh
// Date

let gridSize = 30;
let grid;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize,gridSize);
}

function draw() {
  background(220);

  // if (grid[y][x] === 0){
  //   fill(0);
  // }
  // else if (grid[y][x] === 1){
  //   fill(255);
  // }
}


function createRandom2DArray(rows,cols){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  grid = [];
  for (let y=0; y < cellHeight; y++){
    grid.push(0);
    for(let x=0; x < cellWidth; x++){
      if (random(100)<50){
         grid.push(0);
      }
      else{
        grid.push(1);
      }
    }
  }
  
}