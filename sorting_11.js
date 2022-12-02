class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
         this.emp_id=emp_id;
         this.emp_name=emp_name;
         this.emp_dept=emp_dept;
         this.emp_salary=emp_salary;
         this.emp_company=emp_company;
    } 
 }
 const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
 const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
 const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
 const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
 const emp_monika =new Employee(77,"Monika","IT",40000,"Wipro");
 const emp_vinay =new Employee(88,"Vinayk","IT",75000,"TCS");
 const emp_mahi = new Employee(99,"Mahesh","HR",85000 ,"Infy");
 const array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
console.warn("Q.no.1 sort the array_employee in ascending order of Employee ID -------------------------- ");
var sort_array = array_employees.sort((a,b)=>{
return a.emp_id>b.emp_id ?1:-1 ;
})
sort_array.forEach((employee)=>{
    console.log(`Employee ID :- ${employee.emp_id}  Employee Name :- ${employee.emp_name}  Employee Dept :- ${employee.emp_dept}`);
});
console.warn("Q.no.2 sort the array employee in ascending order of Employee Dept------------------------  ");