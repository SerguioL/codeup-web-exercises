"use strict";

//function showMultiplicationTable(input){
//     let number = 1
// while(number <= 10){
//         let result = number * input;
//     console.log(result);
//     number++;
//}
//}
//let i;
// function showMultiplicationTable(){
//     for(let i=1; i<=10; i++){
//
//         console.log(i*7)
//     }
// }
// showMultiplicationTable()
//
// let random = Math.floor(Math.random() ) + 20;

function randomNumberBetween20And200(){
    for (let i=1;i<=10;i++){
        let random = Math.floor(Math.random()* 180) + 20;
        if(random % 2 === 0){
            console.log(random + " is even");
        } else {
            console.log( random + " is odd");
        }
    }
}
randomNumberBetween20And200();