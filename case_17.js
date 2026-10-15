let score = 80;
let attendance = 90;
let assignments = 70;

if (score >= 60 && attendance >= 75 && assignments >= 80) {
    console.log("Pass");
} else {
    console.log("Fail");

    if (score < 60) {
        console.log("Reason: Score is below 60");
    }

    if (attendance < 75) {
        console.log("Reason: Attendance is below 75%");
    }

    if (assignments < 80) {
        console.log("Reason: Assignments completed are below 80%");
    }
}