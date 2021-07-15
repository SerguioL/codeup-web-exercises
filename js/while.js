"use strict";

let number = 2 ;
let counter = 0;
while(counter < 16){
    console.log(number)
    number *=2;//number = number * 2
    counter++
}

// different method

// let num = 1;
// while(num < 65000){
//     num *=2;
//     console.log(num);
// }


let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let conesBeingBought =Math.floor(Math.random() * 5)+ 1;
    if(conesBeingBought > allCones){
        console.log("Cannot sell you " + conesBeingBought + " I only have " + allCones);
    } else {
        allCones = allCones - conesBeingBought;
        console.log(conesBeingBought + " Cones sold " + allCones + " cones left");
    }
} while (allCones > 0);
console.log("Yay! I sold them all");


