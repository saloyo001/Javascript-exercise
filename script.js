const fullName = "Mark Njuguna";
let age = 20;
var isEnrolled = true;

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isEnrolled, typeof isEnrolled);

// q2 part2

const numericString ="5";
const number =10;

console.log(numericString+number);
console.log(numericString*number);

// q3 part2

const buyerAge = 20;

if (buyerAge < 5) {
    console.log("Free");
} else if (buyerAge >= 5 && buyerAge <= 17) {
    console.log("Child Discount");
} else if (buyerAge >= 18 && buyerAge <= 64) {
    console.log("Full Price");
} else {
    console.log("Senior Discount");
}

// q4 part2

const balance = 1000;

const accountStatus = balance < 0
    ? "Account Overdrawn"
    : "Account Active";

console.log(accountStatus);

//q5 part2

const score = 85;
const bonus = 5;

const finalScore = score + bonus;

let grade;

switch (true) {
    case finalScore >= 90:
        grade = "A";
        break;

    case finalScore >= 80:
        grade = "B";
        break;

    case finalScore >= 70:
        grade = "C";
        break;

    case finalScore >= 60:
        grade = "D";
        break;

    default:
        grade = "F";
}

console.log("Final Score:", finalScore);
console.log("Grade:", grade);

// JS LOOPS AND FUNCTIONS part 1 control flow

const x = "5";
const y = 5;

if (x == y && typeof x === "string") {
    console.log("Result A");
} else if (x === y || x > 0) {
    console.log("Result B");
} else {
    console.log("Result C");
}

//Question 6: Nested Logic Transformation


let day =5;
let dayName;

switch (day) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    default: dayName = "Not a Day";
}
console.log(dayName);

//Use a ternary for a simple either/or decision that produces a value, and use a switch when one variable is compared against three or more exact values, since a long chain of ternaries becomes hard to read.

//9 Array Transversal

const numbers = [1, 2, 3, 5, 8, -1, 7];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) break;            
    if (numbers[i] % 2 === 0) continue;   
    console.log(numbers[i]);
}
// Answers: 1, 3, 5
// The negative check comes first so a negative even number like -2 stops the loop instead of being skipped.
// count = 6
// Explanation : The inner loop runs while j > i, so it runs 3 times when i = 0, 2 times when i = 1, and once when i = 2. That gives 3 + 2 + 1 = 6.

//12 while and do while
let n = 10;

while (n < 5) {
    console.log("while ran");
}

do {
    console.log("do-while ran");  
} while (n < 5);

//Part 3: Functions (Anatomy & Execution)

//15 Arrow function anatomy

const multiply =(a,b) => a * b
// omitted function keyword 
// return key word omitted since it is an expression
// {} curly braces omitted too
// The parentheses around the parameter

//16 Higher-Order Concepts Function A and B

const double = n => n * 2;                 
const result = [1, 2, 3].map(double); 

//function A is a call back function
// funtion B is a map and feeds items to A

//Scopes and Variable Lifetime part 4


// 20 scope tracing
let a = 10;
function outer() {
    let b = 20;
    if (true) {
        let a = 30;
        var c = 40;
        console.log(a + b); 
    }
    console.log(a);
    console.log(c);
}
outer();
// block-scoped, exists only inside this if
// function-scoped, ignores the if block
// 50 -> inner a (30) + b (20)

console.log(s);
let s = 5;

console.log(t); //
var t = 5;


//There is undefined for t
// ReferenceError: Cannot access 's' before initialization




