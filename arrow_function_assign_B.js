 
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
console.warn("========Q.no.1 ====Displaying the employee names and company  who is working in TCS ============ ");
for (const  employee of array) {
    if ( employee.emp_company=="TCS") {
        console.log(`Employee Name:- ${employee.emp_name} $  Company Name :- ${employee.emp_company}`);
    }
}
console.warn("======Q.no.2 ====Displaying the employee names and department who is working in Finance department =============");
for (const  employee of array) {
    if ( employee.emp_dept=="Finance") {
        console.log(`Employee name :- ${employee.emp_name}   department name :- ${employee.emp_dept}`);
    }
}
console.warn("====Q.no.3====Displaying whose name start with( R )and log completely details on console =======================");
for (const  employee of array) {
    if ( employee.emp_name.startsWith("R")) {
        console.log(`Details ==>   name :- ${employee.emp_name}  ID :- ${employee.emp_id}   salary :- ${ employee.emp_salary}    Dept :- ${employee.emp_dept}   Company :- ${employee.emp_company} `);
    }
}
console.warn("=====Q.no.4 ====Displaying  Name,Company , Salary , whose salary greater than 70000  thousand =============================");
for (const  employee of array) {
    if ( employee.emp_salary>70000) {
        console.log(`Employee Salary :- ${employee.emp_salary}   Employee Name :- ${employee.emp_name}   Employee Company ${employee.emp_company}`);
    }
}console.warn("=====Q.no.5 ===Displaying all details whose salary is => 50000 and also  working in IT dept ==============================");
for (const iterator of array) {
    if ( iterator.emp_salary>=50000 && iterator.emp_dept=="IT") {
        console.log(`Employee all details :- name = ${iterator.emp_name}  ID = ${iterator.emp_id}  Salary = ${iterator.emp_salary}  Dpt = ${iterator.emp_dept}  Company= ${iterator.emp_company}`);
    }
}
console.warn("=======Q.no.6=====Displaying all details whose working in (Infy) company ================");
for (const  employee of array) {
    if ( employee.emp_company=="Infy") {
        console.log(`All details :- ID : ${employee.emp_id} Name: ${employee.emp_name}  Salary: ${employee.emp_salary}  Dept: ${employee.emp_dept} Company: ${employee.emp_company}`);
    }
}






