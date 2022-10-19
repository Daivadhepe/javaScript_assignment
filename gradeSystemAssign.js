console.warn("---------------------------------------Design a grade system--------------------------------------------------");
 function    gradeSystem(score){
     
    
         if ( score<35)
         {
            console.log(`Marks : (${score} )  You are failed`);
            console.warn("-------------------------------------------------------------------------------");
        }
        //   if ( score>=35) 
        //   {
        //       console.log("You are pass");
        //   }
        if ( score>=35&&score<60) 
        {
            console.log(` Marks :(${score} )   you are pass and grade is C`);
            console.warn("-------------------------------------------------------------------------------");
        }
        if ( score>60&&score<75) 
        {
           console.log(` Marks : (${score} )  You are pass and grade is B`); 
           console.warn("-------------------------------------------------------------------------------");
        }
        if ( score>=75&&score<=90) 
        {
            console.log(` Marks :(${score})     You are pass and grade is A`);
            console.warn("-------------------------------------------------------------------------------");
        }
        if ( score>=90&&score<=100) 
        {
            console.log(`Marks : (${score} )  percentage You are pass and grade is A+`);
            console.warn("-------------------------------------------------------------------------------");
        }
      if ( score == null ||score==String||score == undefined||score<0||score>100) 
    {
        console.log(`marks: (${score})    Invalid Input`);
        console.warn("-------------------------------------------------------------------------------");
    } 
 }
 
  gradeSystem(66);
 
 gradeSystem(13);
 
  gradeSystem("");
 
gradeSystem(98);

  gradeSystem("fifty five");
 
 gradeSystem(35);

 gradeSystem(75);

gradeSystem(null);

 gradeSystem(undefined);
 
 gradeSystem(-20);

 gradeSystem(55);

 gradeSystem(82);

