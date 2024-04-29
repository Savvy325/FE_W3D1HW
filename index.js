// Understanding Data Types in JavaScript

/*Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.
Task 2: Assign sample values to the student information variables.
Task 3: Display the student information using console.log() statements.*/


let studentName = "Jane Doe";
let studentAge = 10;
let studentGrade = 80;
let isPresent = true;

console.log(`- Student Name: ${studentName}`);
console.log(`- Student Age: ${studentAge}`)
console.log(`- Student Grade: ${studentGrade}`)
console.log(`- Present: ${isPresent}`);

// Exploring JavaScript Operators

/*Task 1: Declare variables to store two numeric values for performing arithmetic operations.
Task 2: Assign sample numeric values to the variables declared in Task 1.
Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
*/

let num1 = 24;
let num2 = 12;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Explore assignment operators and update the values of variables.

console.log("Updated num1:", num1 = 45);
console.log("Updated num2:", num2 = 15);

// Task 5: Use comparison operators to compare the values of variables.

console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Task 6: Apply logical operators to combine conditions and display the results.

let isPositive = (num1 > 0) && (num2 > 0);
let isEven = (num1 % 2 == 0) || (num2 % 2 == 0);

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
