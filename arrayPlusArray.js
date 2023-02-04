/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/


let arrayPlusArray = (arr1, arr2) => {
     let sum1 = arr1.reduce(function(acc, currentValue) {
          return acc + currentValue;
     }, 0)
     let sum2 = arr2.reduce(function(acc, currentValue) {
          return acc + currentValue;
     }, 0)
     return sum1 + sum2;
}
console.log(arrayPlusArray([1, 2, 3], [5, 6, 7, 8]));

// function arrayPlusArray(arr1, arr2) {
//      return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
//    }