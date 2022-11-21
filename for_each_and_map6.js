 
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
 const array = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi ];
 console.log("=============================using map ===================================");
 console.warn("======Q.no.1  Get the list of all employee names ======================");
  const array1= array.map((employee)=>{
  return employee.emp_name;
 })
console.log(`All employee name list is :- ${array1}`);

console.warn("-=====Q.no.2  Get the list of Departments ===================================");
 const array2 = array.map((employee)=>{ 
  return employee.emp_dept;
})
console.log(`All employee departments list is :- ${array2}`);


console.warn("===Q.no.3  Get the list of ID =====================================");
 const array3 = array.map((employee)=>{
  return employee.emp_id;
})
console.log(`All employee ID list is :- ${array3} `);

console.log("==========================using for each loop ========================================");
console.warn("======Q.no.1  Get the list of all employee names ======================");
array.forEach (employee =>{
   
   console.log(employee.emp_name);
})

console.warn("-=====Q.no.2  Get the list of Departments ===================================");
array.forEach(employee=>{
  console.log(employee.emp_dept);
})

console.warn("===Q.no.3  Get the list of ID =====================================");
array.forEach(employee=>{
  console.log(employee.emp_id);
})