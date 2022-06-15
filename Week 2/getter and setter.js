const prompt = require("prompt-sync")();
console.log(" there are program of variable ");
console.log("1.getter  2.setter ");
let y = parseInt(prompt("enter the below no here "));
switch (y) {
    case 1:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        const person = {
            firstName: "John",
            lastName: "Doe",
            language: "en",
            get lang() {
                return this.language;
            },
        };

        // Display data from the object using a getter:
        console.log(person.lang);

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 2:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        const people = {
            firstName: "John",
            lastName: "Doe",
            language: "NO",
            set lang(value) {
                this.language = value;
            },
        };

        // Set a property using set:
        people.lang = "en";

        // Display data from the object:
        console.log(people.language);

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;

    default:
        console.log("Invalid input");
}