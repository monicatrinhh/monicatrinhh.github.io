// Interactive Scene
// Monica Trinh
// September 20,2021
//
/* Extra for Experts:
  + HTML/CSS banner
  + Sound
*/

// change color for mouse, make buble burst, make bubble pop, dragging mouse?, add song, song end = game over or finish all beat (MaxPoint)

let r, g, b;
let r2, g2, b2;
// let maxPoint;
let mouseR = 30;
let point;
let margin = 160;
let sparkle;
let timer = 10;
let state;
let pointsGained = false;


function setup() {
  state = "opening";
  createCanvas(windowWidth, windowHeight);
  score = 0;
  beat = new Beat();
  sparkle = loadImage("sparkle.gif")
}
function draw() {

  background(0);

  if (state === "opening") {
    fill(255);
    textAlign(CENTER)
    textSize(30);
    text("Press Enter to Start", width / 2, height / 2);
  }

  if (state === "game") {
    image(sparkle, mouseX - beat.r, mouseY - beat.r);
    if (beat.contain(mouseX, mouseY)) {
      if (mouseIsPressed) {
        beat.changeColor(r2, g2, b2);
        beat.changeLocation();
        beat.burst();
        pointsGained = true;
      }
    }

    beat.show();
    beat.popping();
    increasePoint()


    noCursor();
    fill(beat.c);
    circle(mouseX, mouseY, mouseR);

    // timer
    text(timer, width / 2, 50);


    textAlign(CENTER)
    textSize(30);

    if (frameCount % 60 === 0 && timer > 0) {
      timer--;
    }

  }
  if (timer === 0) {
    clear();
    background(0);
    text("Hit Enter to Restart", width / 2, height / 2);
    text("Total: " + score, width / 2, height / 2 - 40);
    state = "restart";
  }

}

class Beat {
  constructor() {
    r = random(255);
    g = random(255);
    b = random(255);

    this.x = random(margin, width - margin); //xpos
    this.y = random(margin, height - margin); //ypos
    this.r = random(50, 80); //radius
    this.c = color(r, g, b);
  }
  show() {
    fill(this.c);
    circle(this.x, this.y, this.r * 2);
  }
  popping() {

  }

  contain(x2, y2) {
    let d = dist(x2, y2, this.x, this.y);
    if (d < this.r + mouseR / 2) {
      return true;
    }
    else {
      return false;
    }
  }

  changeColor(red, green, blue) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    this.c = color(red, green, blue);
  }

  changeLocation() {
    this.x = random(margin, width - margin);
    this.y = random(margin, height - margin);
    this.r = random(50, 80);
  }

  burst() {

  }
}

function increasePoint() {
  if (pointsGained) {
    score++;
    pointsGained = !pointsGained;
  }
}

// press Enter to start
function keyPressed() {
  if (keyCode === ENTER) {
    state = "game";
  }

}