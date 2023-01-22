/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

// let basicOp = (operator, v1, v2) => {
//      switch (operator) {
//           case '+':
//                return v1 + v2;
//                break;
//           case '-':
//                return v1 - v2;
//                break;
//           case '*':
//                return v1 * v2;
//                break;
//           case '/':
//                return v1 / v2;
//                break;
     
//           default:
//                break;
//      }
// }
// console.log(basicOp('+', 2, 3));
// console.log(basicOp('-', 2, 3));
// console.log(basicOp('*', 2, 3));
// console.log(basicOp('/', 2, 3));

let basicOp = (operator, v1, v2) => {    // using eval()
     return eval(v1 + operator + v2);
}
console.log(basicOp('+', 2, 3));
console.log(basicOp('-', 2, 3));
console.log(basicOp('*', 2, 3));
console.log(basicOp('/', 2, 3));