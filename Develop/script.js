// Assignment code here

// passwordText.value = password
// var passwordText = document.querySelector("#password");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


  var lowerletters ="abcdefghijklmnopqrstuvwxyz"
  var uperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var special = "!@#$%^&*()_-+={}[]|:;<>,./?*-`~"


console.log(generateBtn)
// Write password to the #password input
function writePassword() {

  var passwordlength = parseInt(prompt("Chosse how many characters do you want. you need to chose 8 to 128 characters"));
  console.log(passwordlength)
  while (passwordlength < 8 || passwordlength > 128) {
    window.alert("Please choose a password characters between 8 to 128 characters!");
    passwordlength = parseInt(prompt("Chosse how many characters do you want. you need to chose 8 to 128 characters"));
  }

  var numbers = confirm("Do you want to have numbers in your password?");
 var lowerletters = confirm("Do you want to have Lowercase letters in your password?");
  var uperletters = confirm("Do you want to have upercase letters in your password?");
  var special = confirm("Do you want to have special in your password?");
  console.log(numbers, lowerletters, uperletters, special)

  // if (!(uperletters || lowerletters || numbers || special)) {
  //   window.alert("Please choose more than one character!");
  //   console.log(numbers, lowerletters, uperletters, special)
  // }

  var possibilities = "";
  if(numbers) {
    possibilities += numbers
  }
if(lowerletters) {
    possibilities += lowerletters
  }
if(uperletters) {
    possibilities += uperletters
  }
if(special) {
    possibilities += special
  }

  var password = ""
 
  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * possibilities.length);
    var character = possibilities[randomIndex];
    password += character
  }

  document.querySelector("#password").value = password

} 
generateBtn.addEventListener("click", writePassword);

// document.querySelector("#password").value = writePassword
// var password = generatePassword()

// Add event listener to generate button
console.log(generateBtn)





