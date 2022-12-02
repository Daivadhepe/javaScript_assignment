console.warn("Given an  array is :- ");
const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(array_roll_numbers);
console.warn("Q.no.1 Reverse the array-------------------------------------");
      array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.warn("Q.no.2  Use the short method without using any argument ---------------");
   array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`issue:- sort method internally only understand string value , don't understand numbers value .
 is there sort only first character of this array. `);
 console.warn(" Q.no.3 sort the array in ascending order---------------");
    array_roll_numbers.sort((a,b)=>{
     return(a>b?1:-1) ;
    // if ( a>b) {
    //     return 1
    //  }else{
    //     return -1
    //   }
 });
 console.log(array_roll_numbers);
 console.warn("Q.no.4  sort the array in descending order--------------------");
   array_roll_numbers.sort((a,b)=>{
    return (a>b?-1:1)
 });
 console.log(array_roll_numbers);
console.warn(" Q.no. 5 sort the array  descending order using reverse method ----------------");
array_roll_numbers.sort((a,b)=>{
    return (a>b?1:-1)
})
// console.log(array_roll_numbers);
array_roll_numbers.reverse()
console.log(array_roll_numbers);
 console.warn("Q.no.6 Find the greatest number from the array----------------------------- ");
  var sortArray = array_roll_numbers.sort((a,b)=>{
   return a>b?1:-1;
 })
 console.log(sortArray);
 var  maxNumber=sortArray[sortArray.length -1];
console.log(maxNumber);
console.warn("Q.no.7 Find the smallest number from array --------------------------");
var smallNumber=sortArray[sortArray.indexOf=0]
console.log(smallNumber);
console.warn("Q.no.8 Remove the duplicate numbers from array ---------------------");
  var duplicateNumbers = [...new Set(array_roll_numbers)];
  console.log(duplicateNumbers );


