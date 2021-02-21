
// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var promptLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmLowerCase;
var confirmUpperCase;


function generatePassword() {

  var promptLength = window.prompt('How long would you like your new password to be?');

  while (promptLength < 7 && promptLength > 128) {
    window.alert("Password must be between 8 and 128 characters. Try again.");
    var promptLength = window.prompt('How long would you like your new password to be?');
  }

  var confirmSpecial = window.confirm("Would you like special characters in your password?");
  var confirmNumeric = window.confirm("Would you like special numerics in your password?");
  var confirmUpperCase = window.confirm("Would you like upper-case characters in your password?");
  var confirmLowerCase = window.confirm("Would you like lower-case characters in your password?");
  
  while (!confirmSpecial && !confirmNumeric && !confirmUpperCase && !confirmLowerCase) {
    window.alert("Password must include at least one character type.");
    var confirmSpecial = window.confirm("Would you like special characters in your password?");
    var confirmNumeric = window.confirm("Would you like special numerics in your password?");
    var confirmUpperCase = window.confirm("Would you like upper-case characters in your password?");
    var confirmLowerCase = window.confirm("Would you like lower-case characters in your password?");

  }


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
© 2021 GitHub, Inc.