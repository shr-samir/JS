/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/


let stringToArray = (str) => {
     return str.split(' ');        // split method
}
console.log(stringToArray('Learning JavaScript and Web Development'));