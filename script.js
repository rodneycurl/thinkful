// Programming on the web:
// HTML: Content, CSS: Style, JS: Interaction

// Variables
// Declarations
// Simple Type: Numbers (5 or .04), Booleans (true or false), Strings ('String')
// Complex Type: Objects ({...}) and Arrays ([...])
var amount = 37;
var iLoveCoding = true;
var myName = 'Pol Klein';

// Statements
// Expressions
// Logic

var outOfGas = false;
  if (outOfGas) {
      getGas();
  } else {
    keepDriving();
  }

function getGas() {
  console.log("I bought gas at Shell!");
}

function keepDriving() {
  console.log("Let's look at the pretty view");
}


// Functions
// Declarations
// Returning
// Parameters
// User Interactions (console.log, prompt, alert)

console.log(nba());

function nba() {
  return 'National Basketball Association';
}


var feeling = "I love ";
var school = "Howard University";
var result = feeling + school;

console.log(result);
