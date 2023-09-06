// Excercise two:

function Cube(_length) {
  this.sideLenght = _length;
  this.calcArea = function () {
    let area = 6 * Math.pow(this.sideLenght, 2);
    return area;
  };

  this.calcPerimeter = function () {
    let perimeter = 12 * this.sideLenght;
    return perimeter;
  };
}

let promptNumber = +prompt("Enter the size of the cube sides:");

if (promptNumber <= 0) {
  alert("Enter a positive number");
} else if (promptNumber) {
  let cube = new Cube(promptNumber);
  console.log("The cube area is:" + " " + cube.calcArea() + "cm2");
  console.log("The cube Perimetar is:" + " " + cube.calcPerimeter() + "cm.");
} else {
  alert("Enter a valid number");
}
