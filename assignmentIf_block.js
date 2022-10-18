 console.warn("1) Number value is EVEN or ODD----------------------------------------------------------");
     var evenOrOdd = function  ( number) {
      if (number%2==0 ) {
          console.log(`given no ${number}is : ==> Even number`);
      }
      else{
         console.log(`given no ${number} is : ==> Odd number`);
      }
   }
   evenOrOdd(45 );
   console.log("------------------------------------------------");
    evenOrOdd(70 );
    console.log("------------------------------------------------");
    evenOrOdd(67 );
    console.log("------------------------------------------------");
    evenOrOdd(98);
  console.warn("2) eligible for voting----------------------------------------------------------");
    var votingEligibility = function (age) {
        if ( age>=18) {
            console.log(`you are eligible for voting `);
        }
      else{
        console.log(`you are not eligible for voting`);
      }
    }
    votingEligibility (18);
    console.log("------------------------------------------------");
    votingEligibility (20);
    console.log("------------------------------------------------");

    votingEligibility (17);
    console.log("------------------------------------------------");
 votingEligibility (40);
 console.warn("3) String -------------------------------------------------------------------");
  var stringNew="JavaScript-ES6";
  console.log(  stringNew);
   var stringLength =stringNew.length;
   if (stringLength>=10 ) {
    console.log("more than 10 character:-Yes"); 
   }
   else{
    console.log("more than 10 character:- No");
   }
   console.warn("4) String -------------------------------------------------------------------");
   var stringNew = "JavaScript Language";
   console.log(stringNew);
    // var stringSrartwith = stringNew.startsWith(Java);
    if (stringNew.startsWith("Java")) {
        console.log("start with Java:-Yes");
    }
    else{
        console.log("start with Java:-No");
    }