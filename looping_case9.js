let rows = 4;
let columns = 5;

for (let row = 1; row <= rows; row++) {
    let line = "";

    for (let column = 1; column <= columns; column++) {
        line += "*";
    }

    console.log(line);
}