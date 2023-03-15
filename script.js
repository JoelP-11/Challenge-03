// Assignment code here
var LettersArr = ["a", "b", "c", "d", "e", "f",];

var lengthOfPassword = parseInt(window.prompt("Password Length"));

console.log(lengthOfPassword);
console.log(typeof lengthOfPassword);

 var result = [];

for (var i = 0; i < lengthOfPassword; i++) {
  var randomIndex = Math.floor(Math.random() * lettersArr.length);
  var randomNum = lettersArr[randomIndex];
  result.push(randomNum);
}

console.log(result.join(""));

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
