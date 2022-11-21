console.warn("-----------Given an array -----------------------------------");
const array_numbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(array_numbers);

console.warn("====Q.no.1  Add 10 into each element ================");
 const new_array = array_numbers.map((element )=>{
return element+10;
})
console.log(`Adding 10 into all element :- ${new_array}`);

console.warn("=====Q.no. 2   Square the each array element ===========================");
 const new_array1= array_numbers.map((element)=>{
    return element*element;
})
console.log(`Square the each array element :- ${new_array1}`);

console.warn("=======Q.no.3  Add the index value into its corresponding each array element =====================");

const new_array2 = array_numbers.map((element,index)=>{
    return element+index;
})
console.log(`Add the index value into its corresponding each array element :- ${ new_array2}`);

console.warn("====Q.no.4   add3 only first 3 index ===============================");
 const new_array4 = array_numbers.map((element,index)=>{
    if ( index<=2) {
        return element+3
    };
     return element;
})
console.log(new_array4);
console.log(array_numbers);




