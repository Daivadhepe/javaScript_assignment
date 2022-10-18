


console.log("==============================================================");
   var square= function  (value) {
    console.log(value*value);
    return "FE"
  }
  console.log("square of 5");
  square( 5);
  console.log("square of 6");
  square( 6);
  console.log("square of 25");
  square( 25);
  console.log("square of 100");
  square( 100);
  console.log( typeof square);

  console.log(" ========================================================================");
    var triangle = function  (base,hight) {
        console.log(base*hight/2);
        return "FE"
    }
    console.log("Area of triangle= 1/2*b*h");
    triangle(45,34,2)
    console.log("==========================================================================");
     var rectangle = function  (width,length) {
        console.log(width*length);
        return "FE"
     }
     console.log("Area of rectangle = L*W");
     rectangle(499,917);

     console.log("==========================================================================");
      function swap_values(arg1,arg2) {
         console.log("------Before swap------");
         console.log(arg1,arg2);
         console.log("------after sap--------");
         var temp = arg1;
         arg1=arg2;
         arg2=temp;
     
         console.log(arg1,arg2);
         return "FE"
     }
     
     swap_values(1000,2000)
     swap_values("Virat","Anushka")
     console.log("=================================================================================");










     

