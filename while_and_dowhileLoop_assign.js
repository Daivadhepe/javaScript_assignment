console.warn(" -------------using while loop, do while loop and for loop ----------------------------------------------");
console.log("=====================Q.no.1. WAP to print numbers from 5 to 15 by incrementing 1  =================  ");
console.warn("---------using while loop---------------------");

function function1(start, end) {

    let index = start; // initialization

    while (index <= end) // condition
    {
        console.log(index);
        index++; // increment 
    }
    console.warn("---------using  do while loop---------------------");
  
        let index1 = start;                 // initialization
    do { console.log(index1);
        index1++;                 // increment 
    } while ( index1<= end);        // condition

    console.warn("---------using  for  loop---------------------");

for (let index = start; index <=end; index++) {
console.log(index);;
    
}
}

function1(5, 15);

console.log("=====================Q.no.2. WAP to print numbers from 50 to 40 by decrementing 1  =================  ");
console.warn("---------using while loop---------------------");
 function  function2 (start,end) {
     let kami = start;
     while ( kami>=end) {
        console.log(kami);
        kami--;
     }
     console.warn("---------using  do while loop---------------------");
     let kami1 = start;
     do { console.log(kami1);
        kami1--;
     } while ( kami1>=end);
     console.warn("---------using for loop---------------------");
     for (let kami = start; kami >=end; kami--) {
        console.log(kami);;
        
     }
 }
 
 function2(50,40);
 console.log("=====================Q.no.7. WAP to print first 15 odd numbers   =================  ");
console.warn("---------using while loop---------------------");
function  function3(start,end) {
    let odd = start;
    while (odd= numbers%2==0) {
        console.log(odd);
        odd=odd+2;
    }

}
function3(0,30)
 
