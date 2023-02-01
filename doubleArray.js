/*
Lost without a map

Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

// let maps = (arr) => {
//      for (let i = 0; i < arr.length; i++) {
//           arr[i] = arr[i] * 2;
//      }
//      return arr;
// }
// console.log(maps([1, 2, 3]));
// console.log(maps([13, 2, 3]));
// console.log(maps([11, 20, 3]));

let maps = (arr) => {
     return arr.map(val => val * 2);
}
console.log(maps([1, 2, 3]));
console.log(maps([13, 2, 3]));
console.log(maps([11, 20, 3]));
