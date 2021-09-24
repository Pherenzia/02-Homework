// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
var upperC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var digits = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','?','>','<',':'];
var inclcases = [];

if(confirm('Include Uppercase Letters?')) {
  inclcases = inclcases.concat(upperC)
}


if(confirm('Include Lowercase Letters?')) {
  inclcases = inclcases.concat(lowerC)
}

if(confirm('Include Digits?')) {
  inclcases = inclcases.concat(digits)
}

if(confirm('Include Special Characters?')) {
  inclcases = inclcases.concat(special)
  console.log(inclcases)
}

if (inclcases === 0) {
  alert('You must select at least one parameter!')
  return generatePassword();
}

var password = inclcases[Math.floor(Math.random() * inclcases.length)]
console.log(password)
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
