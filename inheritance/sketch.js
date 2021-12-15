// Project Name
// Monica Trinh
// Date


let car;
function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Vehicle("Civic");
}

// function draw() {
//   background(220);
//   rect(mouseX, mouseY, 100, 50);
// }

class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name, "car");
  }

  getName() {
    return "This car is a " + super.getName();
  }
}