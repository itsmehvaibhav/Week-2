const prompt = require("prompt-sync")();

function myFunction() {
    let x = parseInt(prompt("enter the integer"));
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (err) {
        console.log("Input is " + err);
    } finally {
        console.log("value=" + x);
    }
}
myFunction();