/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// let repeatStr = (n, s) => {
//      let str = s;
//      for (let i=0; i<n-1; i++) {
//           str = str + s;
//      }
//      return str;
// }
// console.log(repeatStr(5, 'samir'));

let repeatStr = (n, s) => {
     return s.repeat(n);            // .repeat() method repeats string n number of times.
}
console.log(repeatStr(5, 'samir'));