/* 
Create a function that takes an integer as argument and returns 'Even' for even numbers and 'Odd' for odd numbers.
*/

let evenOdd = (num) => {
     if (num % 2 === 0) {
          return 'Even';
     }
     else {
          return 'Odd';
     }
}
console.log(evenOdd(28));