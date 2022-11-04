console.warn("--------------Q.no. 1 -------------Shallow cloning --------------------------------  ");
let  array_nums = [20,3,4,56,90,400,49];
console.log(`Given a string ==>`, array_nums );
let array_nums2 = array_nums ;
array_nums2.push(55,66);

console.log(`main array after clone ==>   ${array_nums2}`);

console.warn("------------Q.no.2 -----------------perform deep clone using spread operator -------------------------------------------");
const array_nums3 = [...array_nums];
array_nums.push(10,25);

console.log(`Update original array with value 10,25 ==>   ${array_nums}`);
console.log(`Deep clone array after main array update ==>  ${ array_nums3}`);

console.warn("--------Q.no.3 -------Merge or concat array  with using spread operator-------------------------------------------------- ");
let array_even = [2,30,14,08];
console.log(`Given other array ==> `,array_even);
const array_merge = [...array_nums,...array_even];
console.log(`After merge or concat of array_nums and array_even  ===>  ${array_merge}`);
console.warn("----------Q.no.4  Create the employee_info object------------");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000 INR",
        aug_month: "50,0000 INR",
        jun_month: "65,0000 INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
       },
   mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.table( employee_info);

console.warn("-----------Q.no.5  log the employee details on console -------------------");
console.warn(" ------------------------------- a-- I am login Employee address details -----------------------------");
console.table(employee_info.address  );
console.warn("------------------------------b-- -----------------------------------");

console.log(`Employees mobile number is ==>`, employee_info.mobiles);
console.warn("--------------Q.no.6-----Perform the deep clone using ... operator ----------------------------------");

let clone_emp_info = {...employee_info}
// console.table(employee_info);
// console.table(clone_emp_info);
employee_info.address.locality.street = `At. Nanded Di. 431602`;
employee_info.mobiles[0] = `8668 7474 45`;
console.table(employee_info);
console.table(clone_emp_info);
console.log(`  deep clone mdhe fkt clone mdhech changes vayla pahije hote pn ithe donhimdhe pn zalet .... Due to limitations of spread operator`);
console.warn("-------------------Q.no.7  ------employee info program deep clonning using JSON.stringfy() method --------------------------------------");
// let clone_emp_info2 = JSON.parse(JSON.stringify(employee_info));
// employee_info.salary.july_month = "80K";
// employee_info.address.country = " United Kingdom";

// console.warn("-----------Q. 7.a ----------Original and clone object salary-----------------------");
// console.log(`Employee original salary in main object ==> `,clone_emp_info2.salary.july_month );
// console.log(`Employee  salary in clone objet ==> `,employee_info.salary.july_month);
// console.warn("--------------Q. no .7a -------------Original and clone object Country ------------------------------");
// console.log(`Employee original country value  ==> `,clone_emp_info2.address.country );
// console.log(`Employee clone country value ==> `,employee_info.address.country );


clone_emp_info = JSON.parse(JSON.stringify(employee_info));
console.log(employee_info.salary.july_month="80000");
console.log(employee_info.address.country = "united Kingdom");
console.table(employee_info);
console.table(clone_emp_info);




