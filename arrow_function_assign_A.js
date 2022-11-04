 let d= () =>{
    console.log("-----------4 th nov assignment of daiva Patil---------");
}
d();
console.warn("--------Q.no.1 arrow function with no arg and no return value ----------------------");
 let display=() =>{
    console.log("---- Good Morning , Today is Friday-------");
}
display();
console.warn("-----Q.no.2  Arrow function with tree arg and no return value perform the multiplication  --------");
let multiplication= (a,b,c=2)=>{    //by defolt value assign is 2. 
 let d=a*b*c;
 console.log(`multiplication of :- ${a},${b} and ${c}=${d}`);
}
multiplication(5,5,2);
console.warn("-----Adding default value to third arg = 2");
multiplication(10,4);
console.warn("---Q.no.3 Arrow function with 5 arg and return function -----------------------------------------");
var addition= (a,b,c,d,e)=>{
    return a+b+c+d+e;
    
}
var result=  addition(100,100,200,349,756);
var res=  addition("I am"," "+ "learning"," "+" ES6" ," " + "Features" ," " +"In depth"   )
console.log(` ---Addition of number 100,100,200,349,756 is  :-${result}`);
console.warn("---------------------------------------------------------------");
console.log(`----Addition of this String value is :- ${ res}`);

