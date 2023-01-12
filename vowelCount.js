/* 
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

let vowelCount = (str) => {
     let count = 0;
     let strArr = str.split(''); //Using an empty string as the separator in the split method will split the string into an array of characters.
     for (let i=0; i<str.length; i++) {
          switch (strArr[i]) {
               case 'a':
               case 'e':
               case 'i':
               case 'o':
               case 'u':
                    count ++;
                    break;
          }
     }
     return count;
}
console.log(vowelCount('samirshrestha'));