// Homework 5 Exercise 1
// This program creates a Square class that has methods to get the perimeter, area, diagonal, & describe
// This program is to create 3 squres and use the describe method to show each squares information

class Square {
  constructor(side) {
    this.side = side;
  }

  // method 1 returns the perimeter of square
  perimeter() {
    return 4 * this.side;
  }

  // method 2 returns the area of the square
  area() {
    return this.side * this.side;
  }

  // method 3 returns the diagonal of the square
  diagonal() {
    return Math.sqrt(2 * (this.side * this.side)).toFixed(3);
  }

  // method shows the squres information
  describe() {
    return "Square with side " + this.side + " has permiter of " + this.perimeter() + ", area of " + this.area() + ", and diagonal of " + this.diagonal();
  }
}

// output square 1
square1 = new Square(2);
console.log(square1.describe());

square2 = new Square(3);
console.log(square2.describe());

square3 = new Square(4);
console.log(square3.describe());