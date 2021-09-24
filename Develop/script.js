// Assignment Code
var generateBtn = document.querySelector('#generate');

var upperC = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
var lowerC = ('abcdefghijklmnopqrstuvwxyz')
var digits = ('0123456789')
var special = ('!@#$%^&*?><:')
var inclcases = ();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
