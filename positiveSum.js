/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

let positiveSum = (arr) => {
     let s = 0;
     if (arr != null) {
          for (let i=0; i<arr.length; i++) {
               if (arr[i] > 0)
                    s = s + arr[i];
          }
          return s;
     } else 
          return s;
}
console.log(positiveSum([1, 2, -3, 4, 5, 12, -5]));
console.log(positiveSum());