let count = 0;
let sum = 0;

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
    count++;
    sum += i;
}

console.log("Total even numbers: " + count);
console.log("Sum: " + sum);