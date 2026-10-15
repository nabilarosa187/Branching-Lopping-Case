for (let row = 1; row <= 10; row++) {
    let line = "";

    for (let column = 1; column <= 10; column++) {
        line += String(row * column).padStart(4, " ");
    }

    console.log(line);
}