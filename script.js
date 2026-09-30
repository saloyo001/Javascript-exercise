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

