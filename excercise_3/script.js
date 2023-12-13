//  From the given 3 numbers,find the smallest and largest,and check are they prime.
// Example
// ​ Number = 13; ​Number2 ​= 15; Number3 = 20;
// Smallest - 13 , Largest-20
// The smallest number 13 is prime , The largest number 20 is n​ ot prime.

let num1 = 13;
let num2 = 15;
let num3 = 20;

let smallestNum;
let largestNum;

if (num1 < num2 && num1 < num3) {
  smallestNum = num1;
} else {
  largestNum = num1;
}

if (num2 < num1 && num2 < num3) {
  smallestNum = num2;
} else {
  largestNum = num2;
}

if (num3 < num1 && num3 < num2) {
  smallestNum = num3;
} else {
  largestNum = num3;
}

var isPrime1 = true;
var isPrime2 = true;

for (let i = 2; i < smallestNum; i++) {
  if (smallestNum % i === 0) {
    isPrime1 = false;
  }
}

if (isPrime1) {
  console.log(`The smallest number ${smallestNum} is prime!`);
} else {
  console.log(`The smallest number ${smallestNum} is not prime!`);
}

for (let i = 2; i < largestNum; i++) {
  if (largestNum % i === 0) {
    isPrime2 = false;
  }
}

if (isPrime2) {
  console.log(`The largest number  ${largestNum} is prime!`);
} else {
  console.log(`The largest number  ${largestNum} is not prime!`);
}
