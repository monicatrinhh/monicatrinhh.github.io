// Project Name
// Monica Trinh
// Date



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  recursiveCircle(width / 2, height);
}

function recursiveCircle(x, diameter) {

  circle(x, height / 2, diameter);

  if (diameter > 100) {
    // fill(random(255), random(255), random(255));
    recursiveCircle(x - 0.25 * diameter / 2, diameter / 2);
    recursiveCircle(x + 0.25 * diameter, diameter / 2);
  }

}