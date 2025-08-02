
/*
Vending Machine Application
This application allows the user to select a soda by entering its code.

Pseudocode:
Import the readline module to read user input
Create the input and output interface using readline
Define an array of soda objects with three dogit code, name, and price
Print welcome message and the soda options
Loop through the soda objects to print each soda's code, name, and price
Ask the user to input three digit code for the soda they want
When user inputs a code: If code matches, print selected soda name and price
and If not, display "Invalid code"
Close the input interface
*/

//Import readline module to get input from the user
const readline = require('readline');

//Create an input and output interface using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Values, Data Types, and Operations:
//define strings for codes and names, numbers for prices, and use assignment (=) to store them.

const sodas = [
  { code: '021', name: 'Coke Regular', price: 1.25 },
  { code: '052', name: 'Coke Diet', price: 1.25 },
  { code: '063', name: 'Sprite', price: 1.00 },
  { code: '094', name: 'Fanta', price: 1.10 },
  { code: '035', name: 'Lemonade', price: 1.15 },
  { code: '076', name: 'Ginger Ale', price: 1.30 }
];

//Stringing Characters Together
//Usingstring concatenation to show welcome messages and print each soda option.

console.log('Welcome to my vending machine!');
console.log('Please check the soda options:');

//Working with Loops + Building Arrays
//Looping through the sodas array to print each soda's code, name, and price.
//Each soda is an object inside the array.

for (let i = 0; i < sodas.length; i++) {
  console.log(sodas[i].code + ' - ' + sodas[i].name + ' - $' + sodas[i].price.toFixed(2));
}

//Control Structures and Logic
//Use if and else statements to handle user input and check for valid codes.

//Prompting the user to enter the 3-digit code
rl.question('Please enter the 3-digit code of the soda you want to buy: ', function (inputCode) {
  let found = false;

  //Using Arrays + Using Objects
  //Looping through the array of objects and check if the input matches the code property of any soda.
  for (let i = 0; i < sodas.length; i++) {
    if (inputCode === sodas[i].code) {
      console.log('You selected: ' + sodas[i].name);
      console.log('Price: $' + sodas[i].price.toFixed(2));
      found = true;
      break;
    }
  }
  
//If the user entered an invalid code
  if (!found) {
    console.log('Invalid code. Please try again.');
  }

  //Closing the input interface
  rl.close();
});


