let teacher={

}
console.warn("------------------------------------Create empty teacher object ----------------------------------------------");
console.log("Create a empty object with name teacher" , teacher);

let Teacher={
    teacher_name:"Daivashala Gangadhar Dhepe",
    city:"PUNE",
    age:24,
    education:"BE",
    
    degrees:{
              engineering:"Mechanical Engineer",
              Master_In:"Software Testing",
              PHD:"Adv Computing",
    },
    certificates:{
               certificate_1: "Hacker Rank Participation",
               certificate_2:"Certificate in IFE course",
               certificate_3:"Certificate in Adv programing",
            },
            allDegree: function()
             {
                return  `${Teacher.degrees.engineering},${ Teacher.degrees.Master_In} and ${ Teacher.degrees.PHD}`;
             },
            
}
console.warn("-----------Q.no.1   Teacher Properties and Nested object ---------------------------------------------------");
console.table(Teacher);
console.warn("----------entries---------------------------------");
console.log(Object.entries(Teacher));
console.warn("----------Q.no.2   Nested object degrees ---------------------------------------------------");
console.table(Teacher.degrees);
console.warn("------------Q.no.3  Nested object Certificates----------------------------------------------");
console.table(Teacher.certificates);
console.warn("--------------Q.no.4 concat all degrees----------------------------------------------------");
let result=Teacher.allDegree();
console.log(`teacher degree as follows: ${result}`);
console.warn("-----------Q.no.5    count total degree in degrees object -----------------------------------");
console.log("total degree of a teacher:", Object.values(Teacher.degrees));
console.warn("----------Q.no.6 adding new property in Teacher object -----------------------------------");
console.log(Teacher.state="MAHARASHTRA");
console.table(Teacher);
console.warn("---------------- Q.no.7  Modify any one properties --------------------------------");
console.log("Modify Master_In degree==>",Teacher.degrees.Master_In="UI developer");
console.table(Teacher.degrees);
console.warn("----------------Q.no.8  delete one certificate from Nested object--------------------------- ");
console.log("Delete certificate_3 ",delete Teacher.certificates.certificate_3);
console.table(Teacher.certificates);
console.warn("----------Q.no.9  Add new one certificates in Nested object Certificates-------------------------------------");
console.log(Teacher.certificates.certificate_3="Best Teacher");

console.table(Teacher.certificates);