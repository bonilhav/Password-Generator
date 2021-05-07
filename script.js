// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = userOutput();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

//create a function to randomize

function random(arr) {
  var grabIndex = Math.floor(Math.random()*arr.length);
  var indexValue = arr[grabIndex];
  return indexValue;
}

//function to prompt user for choice selection
function userInput() {
  var passwordLength = prompt("How long would you like the password to be?");
  if (passwordLength < 8) {
    alert("Password must be at least 8 characters")
    return;
  } else if (passwordLength > 128) {
    alert("Password must be less than 128 characters")
    return;
  }

  var includesLowerCase = confirm("Would you like lower case?");
  var includesUpperCase = confirm("Would you like an uppercase?");
  var includesNumber = confirm("Would you like a number?");
  var includesSpecialCharacter = confirm("Would you like a special character?");
  console.log(passwordLength, includesLowerCase)
  if (!includesSpecialCharacter && !includesUpperCase && !includesNumber && !includesSpecialCharacter) {
    alert("Must include one selected attribute")
    return;
  }

  var userChoices = {
    length: passwordLength,
    hasLowerCase: includesLowerCase,
    hasUpperCase: includesUpperCase,
    hasNumber: includesNumber,
    hasSpecial: includesSpecialCharacter,
  }

  console.log(userChoices);
  return userChoices;

}

//generate password function that takes in user input and randomize function

function userOutput() {
  var passwordOptions = userInput();
  var generatedPassword = [];
  var possibleOptions = [];

  if (passwordOptions.hasLowerCase) {
    possibleOptions = possibleOptions.concat(lowerCase);
    possibleOptions.push(random(lowerCase));
  };
  if (passwordOptions.hasUpperCase) {
    possibleOptions = possibleOptions.concat(upperCase);
    possibleOptions.push(random(upperCase));
  };
  if (passwordOptions.hasNumber) {
    possibleOptions = possibleOptions.concat(numericCharacters);
    possibleOptions.push(random(numericCharacters));
  };
  if (passwordOptions.hasSpecial) {
    possibleOptions = possibleOptions.concat(specialCharacters);
    possibleOptions.push(random(specialCharacters));
  };

  for (var i = 0; i <= passwordOptions.length; i++) {
    var stagedPassword = random(possibleOptions);
    generatedPassword.push(stagedPassword)
  };

  console.log(generatedPassword);
  return generatedPassword.join("");
}
