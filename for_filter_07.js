const array= [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given an array is :- ${array}`);
console.warn("=================Q. no.1 Find out the numbers which are greater than 50 =========================== ");
 let array1 = array.filter((element)=>{
    return element>50;

})
console.log(`Greater than 50 numbers are :- ${array1  }`);

console.warn("==============Q.no.2.   find out even numbers ===================================== ");
 let array2 = array.filter((element)=>{
    return element%2==0;
})
console.log(`even numbers are :- ${array2}`);

console.warn("========Q.no.3 find out the odd numbers ======================================");
 let array3 = array.filter((element)=>{
    return element%2!=0 ;

})
console.log(`Odd numbers are :- ${array3}`);

console.warn("======Q.no.4  find out numbers which are multiple of 5 ========================");
let array4 = array.filter((element)=>{
    return element%5==0 ;

})

console.log(`Given numbers which are multiple of 5 :- ${array4}`);
console.warn("=======Q.no.5  find out the numbers bet 20 and 50 =======================");

let array5 = array.filter((element)=>{
    return element>20 && element<50 ;
})

console.log(`numbers greater than 20 and less than 50 are :- ${array5}`);


