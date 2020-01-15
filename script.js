// Assignment Code
var generateBtn = document.querySelector("#generate");

var genPassword = "";

var includeLower = false;
var includeUpper = false;

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

  genPassword = "";

  //ask for critera

  askLength();
  askCase();
  askSpecialNum();

  if(includeLower == false && includeUpper == false && includeSpec == false && includeNum == false){ //if user didnt choose any criteria
    alert("You need to include at least one type of character!");
  }
  else{

   // includeAll(); //makes sure all wanted criteria is added, changes password length accordingly

   var startArray = [];

   startArray = makeStartArray(); //returns an array of only letters so we can replace them with what the user wants

   genPassword = addCriteria(startArray);



  }

    return genPassword;
}

function addCriteria(startArray){

  var criteriaPassword = "";

  for (var i = 0; i < startArray.length; i++){

    if(includeNum && includeSpec){// user wants both num and special characters
      if(includeUpper || includeLower){ //user wants some kind of letter
  
        var ran = Math.floor(Math.random() * 3);
        
  
        if(ran == 0){ //letters
          startArray[i] = randomLetter();
        }else if(ran == 1){ //num
          startArray[i] = randomNum();
        }else if(ran == 2){ //spec
          startArray[i] = randomChar();
        }
  
      }
      else{ //if user wants no letters
        var ran = Math.floor(Math.random() * 2);


        if(ran == 0){ //num
          startArray[i] = randomNum();
        }else if(ran == 1){ //spec
          startArray[i] = randomChar();
        }
      }
    }else if(includeNum && !includeSpec){ //user only wants numbers
      if(includeUpper || includeLower){ //if user wants some kind of letter
  
        var ran = Math.floor(Math.random() * 2);
  
        if(ran == 0){ //letters
          startArray[i] = randomLetter();
        }else if(ran == 1){ //num
          startArray[i] = randomNum();
        }
  
      }
      else{ //if user wants no letters
          startArray[i] = randomNum();
      }
    }else if(!includeNum && includeSpec){ //user only wants special characters
      if(includeUpper || includeLower){ //if user wants some kind of letter
  
        var ran = Math.floor(Math.random() * 2);
  
        if(ran == 0){ //letters
          startArray[i] = randomLetter();
        }else if(ran == 1){ //spec
          startArray[i] = randomChar();
        }
  
      }
      else{ //if user wants no letters
          startArray[i] = randomChar();
      }
    }else{ //user wants only letters
      startArray[i] = randomLetter();
    }


  }//end of for loop

  criteriaPassword = arrayToString(startArray);

  return criteriaPassword;
}//end of function

function makeStartArray(){

  var startString = "";
  var startArray = [];

  for (var i = 0; i < passLength; i++){ //iterates through password length 

    startString+=randomLetter();

    startArray = startString.split('');
   
  }

  return startArray;
}

function arrayToString(array){

  var arrayAsString = "";

  arrayAsString = array.join('');

  return arrayAsString;
}

function includeAll(){
  if(includeLower == true && includeUpper == true){
    genPassword+=randomLetter(true);
    passLength--;
  }
  else if(includeLower == true || includeUpper == true){
    genPassword+=randomLetter();
    passLength--;
  }

  if(includeNum == true){
    genPassword+=randomNum();
    passLength--;
  }

  if(includeSpec == true){
    genPassword+=randomChar();
    passLength--;
  }
}

function askLength(){

  passLength = 0;

  //if length fits criteria
    while(!(passLength >= minPassLength && passLength <= maxPassLength)){ //while passLength is not within 8 - 128
      passLength = parseInt(prompt("Type length of password from 8 to 128"));
    }
    
    console.log("asked for length");
}

function askCase(){ //function designed to see which case letter the user wants to add to their password

  var doneAsking = false;

  while (!doneAsking){ //The "done asking" code with the while loops and what not is dry, i wouldve put it into a function but I ran out of time with work and all
                       //

    var userInput = prompt("include lowercase? y/n").toLowerCase();

    if(userInput == "y"){

      includeLower = true;
      doneAsking = true;

    }
    else if(userInput == "n"){

      includeLower = false;
      doneAsking = true;

    }
    else if(userInput != "y" && userInput != "n"){
      doneAsking = false;
    }
  }

  var doneAsking = false;

  while (!doneAsking){

    var userInput = prompt("include uppercase? y/n").toLowerCase();

    if(userInput == "y"){
      includeUpper = true;
      doneAsking = true;
    }
    else if(userInput == "n"){

      includeUpper = false;
      doneAsking = true;
      
    }
    else if(userInput != "y" && userInput != "n"){
      doneAsking = false;
    }
  }
  
  console.log("asked for case");
}

function askSpecialNum(){

  var doneAsking = false;

  while(!doneAsking){
    var ans = prompt("include numbers? y/n");

    if(ans.toLowerCase() == "y"){
      includeNum = true;
      doneAsking = true;
    }
    else if(ans.toLowerCase() == "n"){
      includeNum = false;
      doneAsking = true;
    }
  }

  var doneAsking = false;

  while(!doneAsking){
    var ans = prompt("include special characters? y/n");

    if(ans.toLowerCase() == "y"){
      includeSpec = true;
      doneAsking = true;
    }
    else if(ans.toLowerCase() == "n"){
      includeSpec = false;
      doneAsking = true;
    }
  }

  console.log("ased for special characters");
}

function ranAlphabetCharacter(){
  var ran = Math.floor(Math.random() * alphabet.length); //gets random index from alphabet

  return alphabet[ran]
}

function randomLetter(includeBoth){

  if(includeBoth){

    var lowerLetter = ranAlphabetCharacter().toLowerCase();

    console.log(lowerLetter);

    var upperLetter = ranAlphabetCharacter().toUpperCase();

    console.log(upperLetter);

    return lowerLetter+upperLetter;
  }
 

  var randomLetter = ranAlphabetCharacter(); //stores random letter at index to var



  if(includeLower && includeUpper){ //if user wants both

    var ran = Math.floor(Math.random() * 2); //gets random between 0 and 1, used to choose either upper or lower case if both are true

    if(ran == 0){
     randomLetter = randomLetter.toLowerCase();
     console.log(ran + " chose lower");
    }else if(ran == 1){
      randomLetter = randomLetter.toUpperCase();
      console.log(ran + " chose upper");
    }


  }else if(includeLower && !includeUpper){ //if user only wants lowercase
    
    randomLetter = randomLetter.toLowerCase();

  }else if(!includeLower && includeUpper){ //if user wants only uppercasw

    randomLetter = randomLetter.toUpperCase();

  }


  return randomLetter;
}

function randomChar(){
  var ran = Math.floor(Math.random() * specChar.length);

  return specChar[ran];
}

function randomNum(){
  var ran = Math.floor(Math.random() * 10);

  return ran;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
