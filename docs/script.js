
// Assignment code here
var numbers = "0123456789"  
var specialChar = "!%&*+-./<>?~"
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


var promptLength = "";
var confirmSpecial;
var confirmNumeric;
var confirmLowerCase;
var confirmUpperCase;



function generatePassword() {

  var promptLength = window.prompt('How long would you like your new password to be? Please enter a number between 8 and 128.');

  while (promptLength <= 7 || promptLength > 128) {
    window.alert("Password must be between 8 and 128 characters. Try again.");
    var promptLength = window.prompt('How long would you like your new password to be?');
  }

  var confirmSpecial = window.confirm("Would you like special characters in your password?");
  var confirmNumeric = window.confirm("Would you like numbers in your password?");
  var confirmUpperCase = window.confirm("Would you like upper-case characters in your password?");
  var confirmLowerCase = window.confirm("Would you like lower-case characters in your password?");
  
  while (!confirmSpecial && !confirmNumeric && !confirmUpperCase && !confirmLowerCase) {
    window.alert("Password must include at least one character type.");
    var confirmSpecial = window.confirm("Would you like special characters in your password?");
    var confirmNumeric = window.confirm("Would you like numbers in your password?");
    var confirmUpperCase = window.confirm("Would you like upper-case characters in your password?");
    var confirmLowerCase = window.confirm("Would you like lower-case characters in your password?");

  }

  var validChars = "";
  var validCharConfirm;

    if(confirmSpecial) {
      validChars = validChars + specialChar;
      validCharConfirm = validChars.includes(specialChar);
      console.log(validCharConfirm);
    }
    if(confirmNumeric) {
      validChars = validChars + numbers;
      validCharConfirm = validChars.includes(numbers);
      console.log(validCharConfirm);
    }
    if(confirmUpperCase) {
      validChars = validChars + upperCases;
      validCharConfirm = validChars.includes(upperCases);
      console.log(validCharConfirm);
    }
    if(confirmLowerCase) {
      validChars = validChars + lowerCases;
      validCharConfirm = validChars.includes(lowerCases);
      console.log(validCharConfirm);
    }
    ;
  
    var password = "";
    var length = parseInt(promptLength);

    for( let i = 0; i < length; i++) {
      var randomPoint = Math.floor(Math.random() * validChars.length);
      password = password + validChars[randomPoint];
      console.log(password);  
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
