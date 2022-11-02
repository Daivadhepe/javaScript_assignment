console.warn("-----Given array numbers ----------------");
const array_numbers = [20,31,40,25,23,11,29,9,60,2,11 ];
console.log(array_numbers);
console.warn(" Q.no. 1 ----- Find the total numbers of elements available in array -------- ");
console.log(`------>  total number of elements ==> ${array_numbers.length}`);
console.warn("  Q.no. 2  -----Find first element and last element in array -------");
console.log(`----->  First element of an array ==> ${array_numbers[0]}`);
console.log(`----->  Last  element of an array ==> ${array_numbers[10]}`);
console.warn("  Q.no. 3 ----- Find the third last element using length property ------");
console.log(` Third last element is  ==>  ${array_numbers[8]}`);
console.warn("   Q.no.4 -----Find the all even numbers -------");
console.log(`----> Get all even numbers from given array ==> `);
for (num of array_numbers){
    if ( num%2==0) {
        console.log(num);
    }
}
console.warn("  Q.no.5  ----Find the all odd numbers from given array-------");
console.log(`------>  get all odd numbers from given array ==> `);
for(num of array_numbers){
    if ( num%2!=0) {
        console.log(num);
    }
}
console.warn("   Q.no. 6 ---Find the all even positioned elements from array_numbers using for loop ----");
for (let index = 0; index < array_numbers.length; index++) {
    if ( index%2==0) {
        const element = array_numbers[index];
        console.log(element);
    }
    
    
}
console.warn("   Q.no. 7 ---Find the all odd positioned elements from array_numbers using for loop ----");
for (let index = 0; index < array_numbers.length; index++) {
    if ( index%2!=0) {
        const element = array_numbers[index];
        console.log(element);
    }
    
    
}
console.warn("  Q.no.8  ------find the sum of all elements from array_numbers ------");
let sum = 0 ;
for (let index = 0; index < array_numbers.length; index++) {
    sum =sum+ array_numbers[index];
    
}
console.log(sum);
console.warn("  Q.no. 9 ---Find the numbers which is multiply  by 5 ---------------");
for (let index = 0; index < array_numbers.length; index++) {
    if ( array_numbers[index]%5==0) {
        const element = array_numbers[index];
        console.log(element);
    }
   
    
}
console.warn("   Q.no. 10 ---Is number 115 available  in array_numbers? -------------");
console.log(` ----> 115 available in Given array ==> ${array_numbers.includes(115)}`);

console.warn("   Q.no. 11 ---Is number 23  available  in array_numbers? -------------");
console.log(` ----> 23 available in Given array ==> ${array_numbers.includes(23)}`);












