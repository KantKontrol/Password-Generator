// Assignment Code
var generateBtn = document.querySelector("#generate");



var passCase = "";

var minPassLength = 8;
var maxPassLength = 128;

var passLength = 0;

var includeNum = false;
var includeSpec = false;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specChar = ["&", "%", "!", "@", "#"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

function generatePassword(){

  var genPassword = "";


  //ask for critera

  askLength();
  askCharacterTypes();

  for (var i = 0; i < passLength; i++){ //iterates through password length 

    if(uncludeNum == true && includeSpec == true){
      var ran = Math.floor(Math.random() * 3);

      if(ran == 0){
        genPassword+=randomLetter();
      }else if(ran == 1){
        genPassword+=randomChar();
      }else if(ran == 2){

      }

      
    }
    
  }

    return genPassword;
}

function askLength(){

  //if length fits criteria
    while(!(passLength >= minPassLength && passLength <= maxPassLength)){ //while passLength is not within 8 - 128
      passLength = parseInt(prompt("Type length of password from 8 to 128"));
    }
    
    console.log("asked for length");
}
  

function askCharacterTypes(){
  askCase();
  askSpecialNum();
}

function askCase(){

  var doneAsking = false;

  while (!doneAsking){

    passCase = prompt("LowerCase or UpperCase?");

    if(passCase.toLowerCase() == "lowercase" || passCase.toLowerCase() == "uppercase"){
      doneAsking = true;
    }
  }
  
  console.log("asked for case");
}

function askSpecialNum(){

  

  var ans = prompt("include numbers? y/n");

  if(ans.toLowerCase() == "y"){
    includeNum = true;
  }

  var ans = prompt("include special characters? y/n");

  if(ans.toLowerCase() == "y"){
    includeSpec = true;
  }

  console.log("ased for special characters");
}

function validateAns(){

  if(passCase == "lowercase"){ //sets alphabet to case
    alphabet = alphabet.toLowerCase();
  }
  else
    alphabet = alphabet.toUpperCase();

}

function randomLetter(){
  var ran = Math.floor(Math.random() * alphabet.length);

  return alphabet[ran];
}

function randomChar(){
  var ran = Math.floor(Math.random() * specChar.length);

  return specChar[ran];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
