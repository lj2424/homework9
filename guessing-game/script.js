const randomNumber = Math.floor(Math.random()* 100) + 1;

let guess = null;
let attempts = 0;

while (guess !== randomNumber) {
   console.log(`Number to guess: ${randomNumber}`);
   const userInput = prompt("Enter a number between 1 and 100:");

    if (isNaN(userInput)) {
        alert("Invalid input! Please enter a numeric value.");
       console.log("Invalid input, try again.");
        continue;
    }
    guess = parseInt(userInput, 10);
    attempts++;
    console.log(`Attempt ${attempts}: Guess is ${guess}`);
    if (guess > randomNumber) {
        alert("Too high! Try again.");
    } else if (guess < randomNumber) {
        alert("Too low! Try again.");
    } else {
        console.log(`Correct! It took ${attempts} attempts to guess the number.`)
        alert(`Correct! You guessed the number in ${attempts} attempts.`);
    }
}