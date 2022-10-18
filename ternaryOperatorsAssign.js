console.log("*********** Assignment 02 ************");
console.log("*********** Question no 1  ************");
 var greatestNo = function (num1, num2 ){
var result = num1 > num2 ? num1 :num2;
console.log(`greater no is ==> ${result}`);
 }
 greatestNo( 10,-10);
 greatestNo( 800,899);
 console.log("*********** Question no 2  ************");
    var evenOddNumbers = function(num){
        var result = num%2==0 ? true : false ;
        return result;

    }
    var returnValue1 = evenOddNumbers(29);
    console.log(`29 value true or false ==> ${returnValue1  }`);
 
    var returnValue2 = evenOddNumbers(44);
    console.log(`44 value true or false ==> ${returnValue2  }`);
 
    var returnValue4 = evenOddNumbers(101);
    console.log(`101 value true or false ==> ${returnValue4  }`);
 
    var returnValue3 = evenOddNumbers(0);
    console.log(`0 value true or false ==> ${returnValue3  }`);
    
    console.log("****************************3********************************");
var evenOddLength = function (word) {
    var resultwordlength = word.length;
    console.log(`word length is : ${resultwordlength}`);
    var iswordEvenOdd = resultwordlength % 2 == 0 ? "EVEN" : "ODD";
    return iswordEvenOdd;
}
var evenOrOdd = evenOddLength("Javascript");
console.log(`is word is even or odd : ${evenOrOdd}`);
var evenOrOdd2 = evenOddLength("developer");
console.log(`is word is even or odd : ${evenOrOdd2}`);
var evenOrOdd3 = evenOddLength("Google");
console.log(`is word is even or odd : ${evenOrOdd3}`);




    

