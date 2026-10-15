const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sales = [];
let day = 1;

function inputSales() {
    if (day > 7) {
        let total = 0;
        let daysAbove500k = 0;

        for (let i = 0; i < sales.length; i++) {
            total += sales[i];

            if (sales[i] > 500000) {
                daysAbove500k++;
            }
        }

        let highest = Math.max(...sales);
        let highestDay = sales.indexOf(highest) + 1;

        console.log("\nWeekly total: Rp" + total.toLocaleString("id-ID"));
        console.log("Daily average: Rp" + (total / 7).toLocaleString("id-ID"));
        console.log("Days above Rp500,000: " + daysAbove500k);
        console.log("Highest sales day: Day " + highestDay);
        console.log("Highest sales: Rp" + highest.toLocaleString("id-ID"));
        console.log("Weekly target: " + (total >= 3500000 ? "Achieved" : "Not achieved"));

        rl.close();
        return;
    }

    rl.question(`Enter sales for day ${day}: Rp`, (answer) => {
        let amount = Number(answer);

        if (answer.trim() === "" || !Number.isFinite(amount) || amount < 0) {
            console.log("Enter a valid sales amount.");
            inputSales();
            return;
        }

        sales.push(amount);
        day++;
        inputSales();
    });
}

inputSales();