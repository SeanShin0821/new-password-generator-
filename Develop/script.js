// Assignment code here
//The password generator will provide a password up to 50 char based on which user speicifies. 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//define a function first 
function generatePassword({

})
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
