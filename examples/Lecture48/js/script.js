// Function constructors
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * Math.pow(this.radius, 2);
};

var myCircle = new Circle(10);
console.log(" Area of circle: " + myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

// // Function constructors
// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };
// }

// var myCircle = new Circle(10);
// console.log(" Area of circle: " + myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(" Area of other circle: " + myOtherCircle.getArea());
