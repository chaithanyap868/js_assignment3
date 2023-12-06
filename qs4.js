// Define a function named sumOfSquares that takes a parameter n and calculates the sum of the squares of numbers from 1 to n using a loop.

var readlineSync = require("readline-sync");
const sumOfSquares=(n)=>
{
    let sum=0
    for(i=1;i<n;i++){

        sum=sum+(i**2)
    }
    console.log("sum of squres of numbers from 1 to ",n,"is",sum)
}
let num= parseInt(readlineSync.question('enter the last number  '));
sumOfSquares(num)