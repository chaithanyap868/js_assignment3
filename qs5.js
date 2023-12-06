// implement a function expression named printPattern that takes a parameter rows and prints a pattern of stars in the form of a right-angled 
// triangle. For example, if the input is 5, the output should be:
// *
// **
// ***
// ****
// *****

var readlineSync = require("readline-sync");

const printPattern = (rows) => {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
};

let rows = parseInt(readlineSync.question('Enter the number of rows: '));
printPattern(rows);
