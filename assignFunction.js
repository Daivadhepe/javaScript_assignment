
console.log("===========first Question===========");
function daiva(){
console.log("daivashala Gangadhar Dhepe");
console.log("I am BA graduate student.");
}

daiva();
console.log("=========Second Question===========");
function  addition(first_name,last_name) {
   console.log(first_name+last_name);
}
addition( "daivashala","Dhepe");






console.log("===========Third Question=========");
function swap_values(arg1,arg2) {
   console.log("------Before swap------");
   console.log(arg1,arg2);
   console.log("------after sap--------");
   var temp = arg1;
   arg1=arg2;
   arg2=temp;

   console.log(arg1,arg2);
   
}
swap_values("Virat,Anushka")
swap_values(1000,2000)







console.log("=========Forth Question===========");
 function add_three_numbers (num1,num2,num3){
    console.log(num1,num2,num3);
    var total=num1+num2+num3;
    console.log(total);
    }
    add_three_numbers(100,200,250);
    console.log("=================");
    add_three_numbers(10.23,600,40);
    console.log("==================");
    add_three_numbers("Hello","Good","Morning")
