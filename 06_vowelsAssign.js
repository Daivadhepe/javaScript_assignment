 
 console.log("--------------------1.Count the total no.of vowels from given string -------------------------");

 var givenString="Good Morning IT Champ";
 var str = givenString.toLowerCase();
 var vowels="aeiou";
 var count=0;
for (let index = 0; index < str.length; index++) {
    var spl=str.charAt(index);
    if (vowels.includes(str.charAt(index)) ) {
        count=count+1
    }
    console.log(count);
}
console.log("==Q.NO 2================WAF to count vowels from given String==============");
var str = "I love javaScript";
var str1 = str.toLowerCase();
var vowels = ['a','e','i','o','u'];

function countVowels(){
    var count =0;
    for (let index = 0; index < str1.length; index++) {
        if(str1.charAt(index) =="a" ||str1.charAt(index) =="e" ||str1.charAt(index) =="i" ||str1.charAt(index) =="o"||str1.charAt(index) =="u")
        {
            count++;
        }

    }
    return count;
}
var res = countVowels(str1);
console.log(`the num of vowels in given string are = ${res}` );
console.log("==Q.NO 3================WAF Exp to sum all num from 1 to 10==============");
var sum = function(){
    var res=0;
    for (let index = 0; index <= 10; index++) {
        res = index + res;
        
    }
    return res;
}
var res =sum();
console.log(`total sum from 1 to 10 = ${res}`);

console.log("==Q.NO 4================WAF to sum of square num from 1 to 10 ==============");
function sumSquare()
{
    var res = 0;
    for (let index = 0; index <= 10; index++) {
       
        var temp = index * index;
        res += temp;
    }
    return res;
}
var sum =sumSquare();
console.log(`sum of square of num from 1 to 10 = ${sum}`);


 console.log("------------- 5.1===>even position number ---------------------");
 var str1="Hard work always pays back";
 var str2 = "Soon i will be Angular IT champ";
 var evenPositionedChar = function(str){
     var res="";

    for (let index = 0; index < str.length; index++) {
      if ( index%2==0 &&str.charAt(index)!=" ") {
         res=res+str.charAt(index); 
       
         
        
      }
        
    }
     return res;

 }
 var ans =evenPositionedChar(str1);
 var res =evenPositionedChar(str2);
 console.log(ans);
 console.log(res);
 console.log("------------5.2===>  Odd position number ----------------------------------");
 var oddPositionedNumber = function(num){
    var res="";
    for (let index = 0; index <  num.length; index++) {
        if (index%2!=0&&num.charAt(index)!=" " ) {
            res= res+num.charAt(index);
        }
        
    }
    return res;
 }
 var ans=oddPositionedNumber(str1);
 var res=oddPositionedNumber(str2);
 console.log(ans);
 console.log(res);