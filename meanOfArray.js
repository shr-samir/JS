/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

let getAverage = (marks) => {
     let totalMarks = 0;
     for (let i=0; i<marks.length; i++) {
          totalMarks = totalMarks + marks[i];
     }
     return Math.floor(totalMarks/marks.length);
}
console.log(getAverage([20, 30, 40.23]));
console.log(getAverage([120, 30, 40.23]));
console.log(getAverage([298, 20, 530, 40.23]));