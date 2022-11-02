console.warn(" step.1 ---Create object bank_sbi ---------------------");
 const bank_sbi = {
    bankName : "SBI Bank ",
    bankAddress : "At. Bhosri , Pune",
    bankLineNumber: 023427, 
    bankId : 548,
 }
 console.log(bank_sbi);
console.warn("  step . 2 --- Create object bank_location ----------------------");
const bank_location = {
    street : "Sakhubai Garden Road",
    city :"PUNE",
    pin_code:`431602`,
}
console.log(bank_location);
console.warn(" step .3 -----Cloning objects using -----------------");
console.warn(" ---------a.object.assign() method  ---------------------------");
let object_assign = Object.assign({},bank_sbi,bank_location);
console.table(object_assign);
console.warn(" ---------b. spread operator method  ---------------------------");
let spread_operator = {...bank_sbi,...bank_location};
console.table(spread_operator);
console.warn(" step . 4 -----create the object using literals --> rate of interest -------------");
const rate_of_interest = {
    home_lone_interest : "11.37%",
    personal_lone_interest : "12.13%",
    due_lone_interest :"08.17%",
}
console.log(rate_of_interest);
console.warn(" step . 5 ----Marge step.1 , step.2 and step . 4 objects into new object namely sbi_details -----");
let sbi_details = Object.assign({}, bank_sbi,bank_location,rate_of_interest);
console.table(sbi_details);
console.warn("  step.6 -----Traverse this merged object  step . 5 using loop ----------");
const array = [sbi_details];
for(const element of array){
    console.table(element);
}
















