// Assignment code here
//The password generator will provide a password up to 50 char based on which user speicifies. 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Various elements for the password 
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//define a function first 
function generatePassword(){
    console.log("Welcome, you clicked!")
    //prompt user the password criteria info 
      //length 8-128, lower,upper,number,special char.
      //Generate password 
      //Display password 


    return "Generated password space";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
