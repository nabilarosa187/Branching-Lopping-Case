let N = 10;
let primes = [];
let sum = 0;

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

for (let number = 2; number <= N; number++) {
    if (isPrime(number)) {
        primes.push(number);
        sum += number;
    }
}

console.log("Is N prime? " + (isPrime(N) ? "Yes" : "No"));
console.log("Prime numbers: " + primes.join(", "));
console.log("Total primes: " + primes.length);
console.log("Sum: " + sum);