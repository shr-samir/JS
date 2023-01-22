/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

let removeChar = (str) => {
     // return str.slice(1, -1);         // .slice(start, end)
     return str.substr(1, str.length-2);    // .substr(start, length)
     // also, there is trimstart() and trimend() methods.
}
console.log(removeChar(' Samir Shrestha'));