const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let scores = [];
let index = 1;

function inputScore() {
    if (index > 10) {
        let sum = 0;
        let passed = 0;
        let failed = 0;

        for (let i = 0; i < scores.length; i++) {
            sum += scores[i];

            if (scores[i] >= 75) {
                passed++;
            } else {
                failed++;
            }
        }

        console.log("\nAverage: " + (sum / 10).toFixed(2));
        console.log("Passed students: " + passed);
        console.log("Failed students: " + failed);
        console.log("Highest score: " + Math.max(...scores));
        console.log("Lowest score: " + Math.min(...scores));

        rl.close();
        return;
    }

    rl.question(`Enter score for student ${index}: `, (answer) => {
        let score = Number(answer);

        if (answer.trim() === "" || score < 0 || score > 100 || !Number.isFinite(score)) {
            console.log("Enter a valid score from 0 to 100.");
            inputScore();
            return;
        }

        scores.push(score);
        index++;
        inputScore();
    });
}

inputScore();