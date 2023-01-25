/*
Simple, remove the spaces from the string, then return the resultant string.
*/

let noSpace = (str) => {
     return str.split(' ').join('');   // .split(' ') method splits the string into array when space is found. Then  .join('') method joins back the array without any spaces.
}
console.log(noSpace('Learning JavaScript And Web Development'));