// Personal Information

const firstName = "Zara";
const lastName = "Karapetyan";
const birthYear = 2003;
const currentYear = 2025;
const isStudent = false;
let hobbies = ["hiking", "pottery", "drawing", "reading"];
const contact = {
    email: "zara.karapetyan.techx@gmail.com",
    phone: "+37498384242",
    city: "Yerevan"
};

// Log personal information

console.log(`Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`);
console.log(`I am ${currentYear - birthYear} years old and currently ${isStudent ? "a student" : "not a student"}.`);


// Type Coercion & Comparison

const ageString = "25";
const ageNumber = 25;

console.log("== comparison:", ageString == ageNumber);
console.log("=== comparison:", ageString === ageNumber);

console.log("Type of ageString is", typeof ageString);
console.log("Type of ageNumber is", typeof ageNumber);


//  Score Grading System

const score = 78;
let grade = "";

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score < 60) {
    grade = "F";
}

console.log(`Grade: ${grade}`);


// Switch statement based on the grade
switch (grade) {
    case "A":
        console.log("Excellent work!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Keep improving.");
        break;
    case "D":
        console.log("Try harder.");
        break;
    case "F":
        console.log("Needs serious effort.");
        break;
    default:
        console.log("Invalid grade.");
}

// Ternary operator
const result = (grade === "A" || grade === "B" || grade === "C") ? "You passed." : "You failed.";
console.log(result);

