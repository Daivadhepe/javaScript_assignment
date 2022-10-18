console.log("=============================Assignment NO 2 ==================================");
console.log("Q.NO 1=============WAF to reverse a string");
var str1 = "Hard work always pays back";
console.log(str1.length);

var str2 = "Soon I will be Angular IT Champ"; 

function reverseString(str)

{
    var res="";
    for (let index = str.length-1; index >=0; index--) {
       
        res = res + str.charAt(index);
    }
    return res;
}
var res = reverseString(str1);
console.log(res);
var res = reverseString(str2)
console.log(res);


// console.log("Q.NO 2===========WAF exp to get first 10 prime no ");
// var isPrime =function(n)
// {
//     if(n == 1 || n == 0) 
//     {
//         return false;
//     }
  
//     for(let i = 2; i <= n / 2; i++)
//     {
//           if(n % i == 0) return false;
//     }
      
//     return true;
// }

// var n=20;
// for (let index = 0; index <= n; index++) {
//    if( isPrime(index))
//    {
//     console.log(i + " ");
//    }

// }