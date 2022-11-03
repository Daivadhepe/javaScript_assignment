
console.warn("---------Q.no.1 -----------------Define a class for vehicle-----------------------------------");
class Vehicle{
    constructor(company,model,color,type){
        this.company=company;
        this.model=model;
        this.color=color;
        this.type=type;
    }
}
let vehicle1=new Vehicle("BMW","Coupe","Black" ,"4-wheeler");
let  vehicle2=new Vehicle("Tata" ,"Punch","Gray","4-wheeler");
let  vehicle3=new Vehicle("Hero","splendor","Black","2-wheeler");
let  vehicle4=new Vehicle( "Malindra","Thar" ,"Red","4-wheeler");
let  vehicle5=new Vehicle("ashok Layland","Truck","Orange","12-wheeler");

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
console.log(vehicle4);
console.log(vehicle5);

console.warn("---------Q.no.2 --------------define a class for College--------------------------------------");
class College{
    constructor(college_name,city,establish_in){
        this.college_name=college_name;
        this.city=city;
        this.establish_in=establish_in;
    }
}let clg1= new College("PCN","Nanded",1950);
let clg2= new College("YMN","Nanded",1963);
let clg3= new College("MIT","Aurangabad",1979);
let clg4= new College("DY Patil","Pune",1984);

console.log(clg1);
console.warn("----------------------------------");
console.log(clg2);
console.warn("----------------------------------");
console.log(clg3);
console.warn("----------------------------------");
console.log(clg4);
console.warn("----------------------------------");
console.warn("------Q.no.3 _---------object using for in loop ----------------------------------------------------------");
 function  traverse_object(obj)
  {
    for (const key in obj)
     {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(`${key},${element}`);
            
        }
    }
 }
 traverse_object(clg1);
 console.warn("----------------------------------");
 traverse_object(clg2);
 console.warn("----------------------------------");
 traverse_object(clg3);
 console.warn("----------------------------------");
 traverse_object(clg4);
console.warn("--------Q.no. 3.1 ------------------ check BMW is instance of college class -----------------------------------");
console.log(vehicle1 instanceof College);
console.warn("---------Q.no.4 -------------WAP of Fibonacci series till 7th occurrence-------------------------------------------");
  let num1=0;
  let num2=1;
  let num=7;
  for (let index = 0; index < num; index++) 
  {
    if ( index==0) {
        console.log(0+" ");
    }
    else if ( index==1) {
        console.log(1+" ");
    }
    else{
        sum=num1+num2;
        num1=num2;
        num2=sum;
        console.log(sum+" ");
    }
  }
    





//  let num1=0;
// let num2=1;
// let num=7;
// for (let index = 0; index < num; index++) {
//     if(index==0)
//     {
//         console.log(0+" ");

//     }
//     else if(index==1)
//     {
// console.log(1+" ");
//     }
//    else{
//     sum=num1+num2;
//      num1=num2;
//       num2=sum;
//     console.log(sum+" ");
//    }
// }






