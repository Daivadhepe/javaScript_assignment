console.warn("---------Given array for fruits seasonal -------------------"  );
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);

console.warn("----Q.no.1----Log the first and last element on console ----------------");
console.log(`First element of the array is ==> ${fruits_seasonal[0]}`);
console.log(`Last element of the array is ==> ${fruits_seasonal[4]}`);

console.warn(" ----Q.no.2  Add element Papaya before Banana --------------------------");
console.log(`I am adding Papaya before Banana ${fruits_seasonal.unshift("Papaya")}`);
console.log(fruits_seasonal);

console.warn("---Q.no.3--Remove Mongo from the array -----------------");
console.log(`Remove Mongo from the array ==> ${fruits_seasonal.splice(4,1)}`);
console.log(fruits_seasonal);

console.warn("--Q.no.4 --Add element Pineapple at the last position------------");
console.log(`Add element pineapple at the last position ==>${fruits_seasonal.push("Pineapple")}`);
console.log(fruits_seasonal);

console.warn("---Q.no.5 --Add element Dragon fruit Before Water Melon--------");
console.log(`Add element Dragon Before Water Melon ${fruits_seasonal.splice(4,0,"Dragon")}`);
console.log(fruits_seasonal);

console.warn("---Q.no.6---Replace an element Orange with Kiwi ---------");
console.log(`replace Orange with Kiwi ==>${fruits_seasonal.splice(2,1,"Kivi")}`);
console.log(fruits_seasonal);

console.warn("--Q.no.7---Log the elements starting from index 1to 4 ---------");
console.log(`Logging the elements starting from index 1 to 4 is ==> ${fruits_seasonal.slice(1,5)}`);

console.warn("----Q.no.8 -- Only select last tree element using length property --------");
console.log(`Only select last tree elements is ==> ${fruits_seasonal.slice(fruits_seasonal.length-3)} `);