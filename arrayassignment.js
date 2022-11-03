console.warn("-------Q.no.a   given an array is -----------------");
var arrayOfNames= [`kamat`,`memon`,`naspati`,`taimur`,`menon`,`kamat`,`andy`,`taimur`];
console.log(`original array is :  ${arrayOfNames}`);
console.warn("------Q.no.b   Remove duplicate names from original array ----------------");
var set = [...new Set (arrayOfNames)];
console.log(` After remove duplicate names updated array is :  [${set}]`);
console.warn("---Q.no.c  find out the how many duplicates names are removed from original array -----------");
let arrayLen = arrayOfNames.length;
console.log(`original array length  : ${arrayLen}`);
let setLength = set.length;
// console.log(`updated array length is : ${setLength}`);
console.log(`count of duplicate names removed from original array is : ${arrayLen-setLength}`);
console.warn("---Q.no.d   total uniq names is  ");
console.log(`total uniq names is : ${setLength}`);







