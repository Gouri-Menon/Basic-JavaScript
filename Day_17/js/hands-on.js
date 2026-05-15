
//Task 1

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
  scale(factor) {
    this.width *= factor;
    this.height *= factor;
  }
}


