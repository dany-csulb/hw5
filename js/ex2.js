// Homework 5 Exercise 2

// declare array
const array = [1,2,3,4,5,6,7,8,9,10];

// get array of odd numbers
var oddArray = array.filter(num => num % 2 != 0);

// get array of numbers divisble by 2 or 5
var divBy2or5 = array.filter(num => (num % 2 == 0) || (num % 5 == 0));

// get array of numbers divisble by 3 squared
var divBy3sqr = array.filter(num => num % 3 == 0).map(num => num * num);

// the sum of the following: square the numbers divisble by 5
var sumOfSqr = array.filter(num => num % 5 == 0).map(num => num * num).reduce((a,b) => a + b);

// console.log outputs
console.log(`Original Array is: ${array}`);
console.log(`Odd numbers of Array is: ${oddArray}`);
console.log(`Array of numbers divisible by 2 or 5: ${divBy2or5}`);
console.log(`Array of numbers divisbile by 3 squared: ${divBy3sqr}`);
console.log(`Sum of the following, square the numbers divisible by 5: ${sumOfSqr}`);