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
