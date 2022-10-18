 console.log("********** Assignment 01 *****************");
 console.log("======================================== Question no. 1=======================================================================");
var wordLengthSquare = function(word){
    console.log(`given word ==> ${word}`);
    console.log(`length of word ${word.length}`);

var wordLength= word.length;
return wordLength*wordLength
}

 console.log (`length square of "JavaScript" ===> ${wordLengthSquare ("JavaScript")}  `);
  console.log(`length square of "Google" ===> ${wordLengthSquare("Google")}`);   
  console.log(`length square of "Developer" ===> ${wordLengthSquare("Developer")}`);
  console.log("========================================= Question no.2======================================================================");
var given_string = "I am Angular Developer";
console.log(given_string);

var stringLength = given_string.length;
console.log(`total string length ==> ${stringLength}`);

var totalwords= given_string.split(" ");
var totalWordsLength = totalwords.length;
console.log(`total no.of words ==> ${totalWordsLength }`);
console.log(`stringLength divided by total no of words ==> ${stringLength/totalWordsLength }`);
console.log(`stringLength multipal by totalStringLength ==> ${stringLength*totalWordsLength }`);