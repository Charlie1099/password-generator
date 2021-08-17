// Assignment code here

//var numbers = ("1234567890");
//var lowerletters = ("abcdefghijklmnopqrstuvwxyz")
//var uperletters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
//var special = ("!@#$%^&*()_-+={}[]|:;<>,./?*-`~")


var randomFunc = {
  lower: getrandomlowerletters("abcdefghijklmnopqrstuvwxyz"),
  uper: getrandomuperletters("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  numbers: getrandomnumbers("1234567890"),
  special: getrandomspecial("!@#$%^&*()_-+={}[]|:;<>,./?*-`~")
}
console.log(Object.values(randomFunc))



// Get references to the #generate element
var generateBtn = document.getElementById("generate");
console.log(generateBtn)
// Write password to the #password input
function writePassword() {

  var passwordlength = window.prompt("Chosse how many characters do you want. you need to chose 8 to 128 characters");
  console.log(passwordlength)
  while (passwordlength < 8 || passwordlength > 128) {
    window.alert("Please choose a password characters between 8 to 128 characters!");
    passwordlength = window.prompt("Chosse how many characters do you want. you need to chose 8 to 128 characters")
  }

  numbers = confirm("Do you want to have numbers in your password?");
  lowerletters = confirm("Do you want to have Lowercase letters in your password?");
  uperletters = confirm("Do you want to have upercase letters in your password?");
  special = confirm("Do you want to have special in your password?");
  console.log(numbers, lowerletters, uperletters, special)

  if (!(uperletters || lowerletters || numbers || special)) {
    window.alert("Please choose more than one character!");
    console.log(numbers, lowerletters, uperletters, special)
  }

}

function password(lower, uper, numbers, special, passwordlength) {
  var Password = "";
  var typesCount = lower + uper + numbers + special;
  var typesArr = [{ lower }, { uper }, { numbers }, { Symbol }].filter(item => Object.values(item)[0]);

  for (var i = 0; i < passwordlength.length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
      
    });

  };
  var Password = Password.slice(0, passwordlength);
  
  return generatePassword;
  

}


//var password = generatePassword()



var passwordText = document.querySelector("#password");


passwordText.value = password;


// Add event listener to generate button
console.log(generateBtn)
generateBtn.addEventListener("click", writePassword);



function getrandomnumbers() {
  var numbers = "1234567890";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getrandomlowerletters() {
  var lowerletters = "abcdefghijklmnopqrstuvwxyz"
  return lowerletters[Math.floor(Math.random() * lowerletters.length)];
}

function getrandomuperletters() {
  var uperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uperletters[Math.floor(Math.random() * uperletters.length)];
}

function getrandomspecial() {
  var special = "!@#$%^&*()_-+={}[]|:;<>,./?*-`~";
  return special[Math.floor(Math.random() * special.length)];
}

console.log(getrandomspecial());
console.log(getrandomuperletters());
console.log(getrandomlowerletters())
console.log(getrandomnumbers());


