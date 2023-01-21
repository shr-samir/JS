/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/


// let options = ['rock', 'paper', 'scissors'];
// let player1 = options[Math.floor(Math.random() * options.length)];
// let player2 = options[Math.floor(Math.random() * options.length)];   
// let rps = (player1, player2) => {
//      console.log(player1);
//      console.log(player2);
//      if (player1 === 'scissors') { 
//           if (player2 === 'paper') {
//                return 'Player 1 won!';
//           } else if (player2 === 'rock') {
//                return 'Player 2 won!';
//           } else if (player2 === 'scissors') {
//                return 'Draw!';
//           }
//      }
//      if (player1 === 'paper') {
//           if (player2 === 'rock') {
//                return 'Player 1 won!';
//           } else if (player2 === 'scissors') {
//                return 'Player 2 won!';
//           } else if (player2 === 'paper') {
//                return 'Draw!';
//           }
//      }
//      if (player1 === 'rock') {
//           if (player2 === 'scissors') {
//                return 'Player 1 won!';
//           } else if (player2 === 'paper') {
//                return 'Player 2 won!';
//           } else if (player2 === 'rock') {
//                return 'Draw!';
//           }
//      }
// }
// console.log(rps(player1, player2));


let options = ['scissors', 'paper', 'rock'];
let p1 = options[Math.floor(Math.random() * options.length)];
let p2 = options[Math.floor(Math.random() * options.length)];
let rps = (p1, p2) => {
     if (p1 === p2) {
          return 'Draw!';
     }
     if (p1 === 'scissors' && p2 === 'paper') 
          return 'Player 1 won!';
     else if (p1 === 'paper' && p2 === 'rock') 
          return 'Player 1 won!';
     else if (p1 === 'rock' && p2 === 'scissors') 
          return 'Player 1 won!';
     else 
          return 'Player 2 won!';
     
}
console.log(p1);
console.log(p2);
console.log(rps(p1, p2));