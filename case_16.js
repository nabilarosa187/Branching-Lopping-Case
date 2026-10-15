let hours = 5;
let fee;

if (hours <= 0) {
    console.log("Invalid parking duration");
} else {
    fee = 5000 + (Math.ceil(hours) - 1) * 3000;

    if (fee > 20000) {
        fee = 20000;
    }

    console.log("Parking fee: Rp" + fee.toLocaleString("id-ID"));
}