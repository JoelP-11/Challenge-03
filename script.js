// Assignment code here
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCaseCharacters = ['a', 'b', 'c','d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generatePassword() {
var passwordLength = parseInt(prompt("How many characters would you like your password to have?"));
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Password length must be a number between 8 and 128.");
  return "";
}

var includeSpecialCharacters = confirm("Click OK to confirm including special Characters.");
var includeNumericCharacters = confirm("Click OK to confirm including numeric Characters.");
var includeLowerCaseCharacters = confirm("Click OK to confirm including lowercase Characters.");
var includeUpperCaseCharacters = confirm("Click OK to confirm including uppercase Characters.");

if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowerCaseCharacters && !includeUpperCaseCharacters) {
  alert("At least one character type needs to be selected.");
  return "";
}

var allCharacters = [];
if (includeSpecialCharacters) {
  allCharacters = allCharacters.concat(specialCharacters);
}
if (includeNumericCharacters) {
  allCharacters = allCharacters.concat(numericCharacters);
}
if (includeLowerCaseCharacters) {
  allCharacters = allCharacters.concat(lowerCaseCharacters);
}
if (includeUpperCaseCharacters) {
  allCharacters = allCharacters.concat(upperCaseCharacters);
}





var password = "";

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allCharacters.length);
  password += allCharacters[randomIndex];
}

return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
