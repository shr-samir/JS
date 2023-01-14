/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

let SmallestIntegerFinder = (num) => {
     let smallest = num[0];
     for (let i=1; i<num.length; i++) {
          if(smallest > num[i]) {
               smallest = num[i];
          }
     }
     return smallest;
}
console.log(SmallestIntegerFinder([12, -1, 43, -6, 0, 3]));

// Using in-built methods

// let SmallestIntegerFinder = (num) => {
//      num.sort((a,b) => a-b);
//      return num[0];
// }
// console.log(SmallestIntegerFinder([12, -1, 43, -6, 0, 3]));