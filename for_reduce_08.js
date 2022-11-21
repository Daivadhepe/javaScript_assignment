const array= [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given an array is :- ${array}`);
console.warn("-------Q.no.1 find the sum of all numbers ----------------------");
let array1 = array.reduce(( value,runningTotal)=>{
 return value+runningTotal ;
})
console.log(`Sum of all numbers :- ${array1}`);
 console.warn("-----Q.no.2 Find the sum of all even numbers --------------------");
let array2 = array.filter((element)=>{
    return element%2==0 ;
})
console.log(`All even numbers:- ${array2}`)  ;
let array3 = array2.reduce((value,runningTotal)=>{
    return value+runningTotal;
})
console.log(`Sum of all even numbers :- ${array3}`);



