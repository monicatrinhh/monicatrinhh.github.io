// Interactive Scene
// Monica Trinh
// September 20,2021
//
/* Extra for Experts:
  + HTML/CSS banner
  + Sound
  + Timer + Points
  + Classify Object
*/

// rotate sparkle, burst out into squares, restart, sounds fx

let r, g, b;
let r2, g2, b2;
let mouseR = 30;
let score;
let margin = 160;
let sparkle;
let timer = 30;
let state;
let pointsGained = false;
let pointsDeduct = false;
let song;
let expand = false;

const particles = [];

function setup() {
  state = "opening";
  createCanvas(windowWidth, windowHeight);
  score = 0;
  beat = new Beat();
  // sparkle = loadImage("assets/sparkle.gif")
  // firework = loadImage("assets/firework.gif");
  song = loadSound("assets/tokyo_revengers.mp3", playSong);
  
}

function draw() {

  background(0);

  if (state === "opening") {
    fill(255);
    textAlign(CENTER)
    textSize(30);
    text("Press Enter to Start", width / 2, height / 2);
  }

  else if (state === "game") {

    // image(sparkle, mouseX - beat.r, mouseY - beat.r);
    if (beat.contain(mouseX, mouseY)) {
      if (mouseIsPressed) {

        beat.burst();
        beat.changeColor(r2, g2, b2);
        pointsGained = true;
      }
    }

    beat.show();
    beat.popping();
    increasePoint();
    decreasePoint();

    noCursor();
    fill(beat.c);
    // circle(mouseX, mouseY, mouseR);




    for (let i = 0; i < 5; i++) {
      let p = new Particle();
      particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 30);
      }
    }




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
    song.stop();
    state = "restart";
  }

}

class Particle {

  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.effect = 255;
  }

  finished() {
    return this.effect < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.effect -= 5;
  }

  show() {
    noStroke();
    
    fill(beat.c);
    ellipse(this.x, this.y, 16);
  }

}

class Beat {
  constructor() {
    r = random(255);
    g = random(255);
    b = random(255);

    this.x = random(margin, width - margin); //xpos
    this.y = random(margin, height - margin); //ypos
    this.r = random(60, 80); //radius
    this.c = color(r, g, b);
  }
  show() {
    fill(this.c);
    circle(this.x, this.y, this.r * 2);
  }
  popping() {
    if (this.r < 150) {
      this.r++;
    }
    else {
      this.burst();
      pointsDeduct = true;

    }
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
    this.r = random(60, 80);
  }

  burst() {
      // setTimeout(fireworkBurst, 2000);
      this.changeLocation();
      this.changeColor(r2, g2, b2);
  }
}



// toggle boolean to change points
function increasePoint() {
  if (pointsGained) {
    score++;
    pointsGained = !pointsGained;
  }
}

function decreasePoint() {
  if (pointsDeduct) {
    score--;
    pointsDeduct = !pointsDeduct;
  }
}

// press Enter to start
function keyPressed() {
  if (state === "opening") {
    if (keyCode === ENTER) {
      console.log("hi");
      state = "game";
      song.play();
    }

  }
}

function playSong() {
  song.play();
}

function popUpLyrics(){
  
}