console.log("1. use ternary operator ----------------------------------------");
var maleMarriageEligibility = function (gender, age, boyName) {
    var result = "gender==male" && "age >=21"
     ? `Hey ${boyName} you are eligible for marriage` 
        
     : "not eligible for marriage";

    return result 
}
var massage = maleMarriageEligibility("Male", 25, "Billgates");
console.log(`massage for that boy :- ${massage}`);
console.log("-------------------------------------------------------------------------");
var massage1 = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(`massage for that boy :- ${massage1}`);

console.log("2. use if block ----------------------------------------");
var femaleMarriageEligibility = function (gender, age, girlName) {
    if ("gender==girl" && "age>=18") {
        console.log(`massage for that girl:- Hey ${girlName} you are eligible for marriage `);
    } else {
        console.log(`massage for that girl:- Hey ${girlName} you are not eligible for marriage `);
    }
}
femaleMarriageEligibility("female", 16, "Jenifer");
console.log("-------------------------------------------------------------------------");
femaleMarriageEligibility("female", 16, "Malinda Gates");
console.log("-------------------------------------------------------------------------");
femaleMarriageEligibility("female", 16, "Bills Gates");
