

const array_number= [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`-------------Given an array:- ${ array_number}`);
console.warn("------Q.no.1-----log the array element with it's index using forEach()with arrow function -------------------------------");
array_number.forEach(  (element,index) =>{
    console.log(`Given element are there:-  ${element}    Given index are there :-   ${index}`);
})
console.warn("--------Q.no.2---Find the positive numbers and log on console -----------------------------------------------"); 
array_number.forEach((element)=>{
if ( element>0) {
    console.log(`Displaying the all positive numbers an array :-  ${element}`);
}
})
console.warn("--------Q.no.3---Find the Negative numbers and log on console -----------------------------------------------"); 
array_number.forEach((element)=>{
if ( element<0) {
    console.log(`Displaying the all Negative numbers an array :-  ${element}`);
}
});
console.warn("-----Q.no.4---Find the even numbers using forEach loop with arrow function -------------------------------");
array_number.forEach((element)=>{
if ( element%2==0) {
    console.log(`Displaying even number :-  ${element}`);
}
});
console.warn("--------Q.no.5----Find the sum of all numbers -------------------------------");
let sum = 0 ;
for (let index = 0; index < array_number.length; index++) {
    sum =sum+ array_number[index];
    
}
console.log(`sum of all numbers :- ${sum}`);

    

console.warn("-------Q.no.6-------Log the even positioned array value -------------------- ");
array_number.forEach((element,index)=>{ 
if ( index%2==0) {
    console.log(`Log even positioned array numbers  :- ${element}`);
}
});

console.warn("-------Q.no.7-------Log the Odd positioned array value -------------------- ");
array_number.forEach((element,index)=>{ 
if ( index%2!=0) {
    console.log(`Log Odd positioned array numbers  :- ${element}`);
}
});









