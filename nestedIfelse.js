//nested if else

let winnigNumber = 19;
let userGuess = prompt("Guess a number."); // The prompt is in string type so we use + to change it into number

if (userGuess === winnigNumber) {
    console.log("Your guess is right!!");
}
else if (userGuess < winnigNumber) {
    console.log("too low!!!");
}
else {
    console.log("too high!!!");
}