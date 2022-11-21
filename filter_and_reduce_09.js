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
 console.warn("=========Q.no.1 Find the all employees from Wipro company================");
       array.filter((employee)=>{
    if ( employee.emp_company=="Wipro") {
        console.log(`Employee Id :- ${employee.emp_id}  Employee Name:- ${employee.emp_name}  Employee Company :- ${employee.emp_company}`);
    }
   })
   console.warn("=====Q.no.2  Find the all employees from IT or HR dept =============================");
    array.filter((employee)=>{
    if ( employee.emp_dept=="IT" || employee.emp_dept=="HR") {
        console.log(`Employee Id:- ${employee.emp_id} Employee Name :- ${employee.emp_name} Employee Dept :- ${employee.emp_dept}`);
    }
   })
   console.warn("====Q.no.3 Find all the employees whose id is greater than 50 =====================");
      array.filter((employee)=>{
    if ( employee.emp_id>50) {
        console.log(`Employee id :- ${employee.emp_id} Employee Name :- ${employee.emp_name} Employee Dept :- ${employee.emp_dept}`);
    }
   })
   console.warn("=====Q.no.4  Find out all the employees whose name starts with (A),(M),(V) ============");
   array.filter((employee)=>{
    if ( employee.emp_name.startsWith("A")||employee.emp_name.startsWith("M")||employee.emp_name.startsWith("V")) {
        console.log(`Employee name:- ${employee.emp_name} Employee id:- ${employee.emp_id} Employee company:- ${employee.emp_company}`);
    }
   })
   console.warn("=====Q.no.5  Find the Average salary of all the dept ==================");
var array1=[];
array.forEach((value)=>{
    array1.push(value.emp_salary);

});
  var array2 = array1.reduce((a,b)=>{
    return a+b;
 });
 console.log(`Total salary of all employee :- ${array2}`);
 console.log(`Average salary of all employees :- ${array2/array.length}`);
console.warn("======Q.no.6 Find the average salary of the employees whose work in IT dept ========================");
 const array3= array.filter((value)=>{
    return value.emp_dept=="IT";
})
// console.log(`All employee work in IT dept list :- ${array3}`);

var array4=[];
array3.forEach((value)=>{
    array4.push(value.emp_salary);

});
 var array5 = array4.reduce((a,b)=>{
    return a+b;
})
console.log(`Total salary of employees whose work in IT dept :- ${array5}`);
console.log(`Average salary of IT dept employees :-${array5/array3.length}`);

     