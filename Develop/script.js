// Assignment code here
//The password generator will provide a password up to 50 char based on which user speicifies. 

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
//Various elements for the password and declare function 

function generatePassword(){}
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

//Acquire special characteristics of the password 
var confirmSpecialCharacter = confirm("Click OK to add special Char");
var confirmNumericCharacter = confirm ("Click OK to add numbers");
var confirmLowercase = confirm ("Click OK to add lowercase");
var confirmUppercase = confirm ("Click OK to add Uppercase");
var confirmLength = (prompt("Choose your character length for Password"));

//Asking user regarding the password length 
function generatePassword(){
  var Length = (prompt("Choose your character length for Password"));
//Using literation function 
while(Length <= 7 || Length >= 128) {
  alert("Please choose between 8-128 char");
  var Length = (prompt("How many character would you like for the password"));
}}

//Generating password ! 
var generatePassword = function(specialChar, lowerCase, upperCase, number) {
  if (specialChar && lowerCase && upperCase && number){

    for (var i = 0; i < length; i++) {
      password = password + length.charAt(Math.random()* Math.floor(length-1));
      password = "";
    }
    return password;
  }
}
//new
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
