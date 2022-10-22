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

    let index1 = start; // initialization
    do {
        console.log(index1);
        index1++; // increment 
    } while (index1 <= end); // condition

    console.warn("---------using  for  loop---------------------");

    for (let index = start; index <= end; index++) {
        console.log(index);;

    }
}

function1(5, 15);

console.log("=====================Q.no.2. WAP to print numbers from 50 to 40 by decrementing 1  =================  ");
console.warn("---------using while loop---------------------");

function function2(start, end) {
    let kami = start;
    while (kami >= end) {
        console.log(kami);
        kami--;
    }
    console.warn("---------using  do while loop---------------------");
    let kami1 = start;
    do {
        console.log(kami1);
        kami1--;
    } while (kami1 >= end);
    console.warn("---------using for loop---------------------");
    for (let kami = start; kami >= end; kami--) {
        console.log(kami);;

    }
}

function2(50, 40);

console.log("=====================Q.no.7. WAP to print first 15 odd numbers   =================  ");
console.warn("---------using while loop---------------------");

function oddNumber()
//    { var count =0;
//      let idx=1;                  
//     while ( idx%2!=0&&count<=15)
//      {
//         console.log(idx);
//     idx=idx+2;
//     count++;

//  }


//    console.warn("---------using do  while loop---------------------");
{ 
// var count = 0;
// let odd = 1;
// do {
//     console.log(odd);
//     odd = odd + 2;
//     count++;
// }
// while (odd % 2 != 0 && count <= 15);


console.warn("---------using for loop---------------------");
var count = 0;
for (let index = 1; index % 2 != 0 && count <= 15; index = index + 2) {
    console.log(index);;
    count++;
}
}
oddNumber();
