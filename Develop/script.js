// Assignment code here
//The password generator will provide a password up to 50 char based on which user speicifies. 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Various elements for the password 
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Variable declaration - 
var confirmLength ="";
var confirmSpecialCharacter = specialChar; 
var confirmNumericCharacter = number ;
var confirmUppercase = upperCase ;
var confirmLowercase = lowerCase ;


//Asking user regarding the password length 
function generatePassword(){
  var confirmLength = (prompt("Choose your character length for Password"));
//Using literation function 
while(confirmLength <= 7 || confirmLength >= 51) {
  alert("Please choose between 8-50 char");
  var confirmLength = (prompt("How many character would you like for the password"));
}}

//Acquire special characteristics of the password 
var confirmSpecialCharacter = confirm("Click OK to add special Char");
var confirmNumericCharacter = confirm ("Click OK to add numbers");
var confirmLowercase = confirm ("Click OK to add lowercase");
var confirmUppercase = confirm ("Click OK to add Uppercase");

//Provide loop for wrong selection 
while (confirmUppercase === false && confirmLowercase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false ){
  alert("You are mandated to choose one!");
  var confirmSpecialCharacter = confirm("Click OK to add special Char");
  var confirmNumericCharacter = confirm ("Click OK to add numbers");
  var confirmLowercase = confirm ("Click OK to add lowercase");
  var confirmUppercase = confirm ("Click OK to add Uppercase");
}
//Generating password ! 
var generatePassword = function(specialChar, lowerCase, upperCase, number) {
  if (specialChar && lowerCase && upperCase && number){

    password = "";
    for (var i = 0; i < length; i++) {
      password += all.charAt(Math.floor(Math.random()*all.length));    
    }
    return password;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
