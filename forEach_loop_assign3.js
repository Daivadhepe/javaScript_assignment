console.warn("============Create Employee class as it ======================="); 
 class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company ){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;
  }
}
const emp_anil=new Employee(22,"Anil","IT" ,50000,"TCS");
const emp_radha =new Employee( 33,"Radha","HR",74000,"Wipro" );
const emp_rishi = new Employee( 55,"Rishi" ,"Finance" ,47000,"TCS" );
const emp_sonali = new Employee( 66,"Sonali" ,"Finance" ,45000,"Infy" );
const emp_monika = new Employee(  77,"Monika","IT" ,40000,"Wipro"  );
const emp_viny=new Employee(88,"Vinayak","IT" ,75000,"TCS" );
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy" );
 let array = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi ];
 console.warn("----Q.no.1----Find out the TCS  employees name and company using forEach loop--------------        ");
array.forEach(element=>{
  if ( element.emp_company=="TCS") {
    console.log(`Employee details :- ID:- ${element.emp_id}  Name:- ${ element.emp_name} Salary:- ${element.emp_salary} Company :- ${element.emp_company}`);
  }
});
console.warn("-----Q.no.2 -- Find the employees with salary greater than or equal to 50000    -------------");
array.forEach(element=>{
  if ( element.emp_salary>=50000) {
    console.log(`Employee details :-ID:- ${element.emp_id}  Name:- ${ element.emp_name}   Company :- ${element.emp_company}   Salary:- ${element.emp_salary} `);
  }
});
console.warn("------Q.no.3----Find the sum of all salary of employee-------------------------");
 var sum=0;
 array.forEach(element=>{
  sum=sum+element.emp_salary;

 })
 console.log(sum);
console.warn("----Q.no.4---fine the average of salary------------------------------");
var sum=0;
array.forEach(element=>{
  sum=sum+element.emp_salary;
});
console.log(`Average of salary is :- ${sum/array.length}`);
console.warn("-----Q.no.5--Find the IT and HR dept of employee whose salary is >=75000----------------");
array.forEach(element => {
if ( element.emp_dept=="IT" &&  element.emp_salary>=75000) {
  console.log(`Employee Details :- Name:- ${element.emp_name} ID:- ${element.emp_id} Salary:-${element.emp_salary} Dept:-${element.emp_dept} Company:-${element.emp_company}`);
}
if ( element.emp_dept=="HR" && element.emp_salary>=75000) {
  console.log(`Employee Details :- Name:- ${element.emp_name} ID:- ${element.emp_id} Salary:-${element.emp_salary} Dept:-${element.emp_dept} Company:-${element.emp_company}`);
}
  

})


