let number = 12321;
let original = number;
let digitCount = 0;
let digitSum = 0;
let reversed = 0;

if (number === 0) {
    digitCount = 1;
}

while (number > 0) {
    let digit = number % 10;

    digitSum += digit;
    reversed = reversed * 10 + digit;
    digitCount++;

    number = Math.floor(number / 10);
}

console.log("Digit count: " + digitCount);
console.log("Digit sum: " + digitSum);
console.log("Reversed number: " + reversed);
console.log("Palindrome: " + (original === reversed ? "Yes" : "No"));