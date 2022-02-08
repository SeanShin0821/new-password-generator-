// Assignment code here
//The password generator will provide a password up to 50 char based on which user speicifies. 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Various elements for the password 
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//define a function first 
function generatePassword(){
    console.log("Welcome to the password generator!")
    //prompt user the password criteria info 
      //length 8-128, lower,upper,number,special char.
      //Generate password 
      //Display password 
    return "Generated password space";
}

//Variable declaration - 
var confirmLength ="";
var confirmSpecialCharacter; 
var confirmNumericCharacter;
var confirmUppercase;
var confirmLowercase;

//Asking user regarding the password length 
function generatePassword(){
  var confirmLength = (prompt("Choose your character length for Password"));
//Using literation function 
while(confirmLength <= 7 || confirmLength >= 51) {
  alert("Please choose between 8-50 char");
  var confirmLength = (prompt("How many character would you like for the password"));
}}

//Notify user about the char length 
alert("Password will contain ${confirmLength} characters");

//Acquire special characteristics of the password 
var confirmSpecialCharacter = confirm("Click OK to add special Char");
var confirmNumericCharacter = confirm ("Click OK to add numbers");
var confirmLowercase = confirm ("Click OK to add lowercase");
var confirmUppercase = confirm ("Click OK to add Uppercase");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
