// let pizzaSlices = 4;
//
// while(pizzaSlices > 0){
//     console.log("there's " + pizzaSlices + " slices!")
//     console.log("I'll have a slice");
//     pizzaSlices = pizzaSlices -1;
//     console.log(("Now there's " + pizzaSlices + " slices left!"))
// }
//
// console.log("is it already all eaten? :(");

// let counter = 0;
// while(counter <= 100){
//     console.log(counter);
//     counter++;
// }

// let counter = 100;
// while(counter >= 0){
//     console.log(counter);
//     counter--;
// }

// let counter = 1;
// let number = 5;
// while (counter <= 10){
//     number = number *2;
//     console.log(number);
//     counter++
// }

// let number = 5;
// while(number < 200){
//     number *=2;//number = number * 2
//     console.log(number)
// }

// let number = 5;
// while(number < 200){
//     console.log(number)
//     number *=2;//number = number * 2
// }

// pseudocode
//Ask user for input -- store user input in a variable
//Declare variable to hold running total
//add user input price of item to a running total
// Loop back and ask the user for price of next item
//I need some way for user to break out of loop --
//?? stop or end or some other way for them to end the program
//Tell user how to end the program
//??Feature: warn user when they reach the limit
//??When do you get free shipping/

// let total = 0;
// let priceOfItem;
// while (true){
//     let userInput= prompt("Enter the price of your item: " + "\n" + "Enter STOP to end program");
//     //sentinel value
//     if ( userInput == "STOP"){
//         alert("OK. your final total is " + total);
//         break;
//     } else {
//         priceOfItem = parseFloat(userInput);
//         total = total + priceOfItem
//         alert("Your total cost is now " + total.toFixed(2))
//
//     }
// }

//Let's get a number 1 and 6

// let number = Math.ceil(Math.random() * 6);
// let guess;
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6 : "))
// }while (guess !== number);
// alert("Your guess of "+ "matches the number " + number + "!");

// for loops

// let count = 100;
// while(count >= 0){
//     console.log(count);
//     count = count -1;
// }

//"count" is the loop control variable (lcv)
// The lcv get initialized (var count = 100;)
//The value of the lcv is checked in the conditional test
// the lcv is output (console.log(count);)
//the value of the lcv is modified inside the loop (count = count - 1;) -- otherwise it is an infinite loop

// //lcv initialized ; conditional tested ; Lcv modified
// for(count = 100; count >= 0; count = count -1){
//     console.log(count);
// }
// // even this too long for impatient programmers
// // i is the iterator -- standard name for the loop control variable
// for(i = 100; i >= 0; i--){
//     console.log(i);
// }

//Here the lcv is incremented
// I never see 99
// let i = 0;
// while (i<100){
//     console.log(i);
//     i = i +1;
// }
//
//here the lcv is incremented before out put
//I see 100
// let i = 0;
// while (i<100){
//     i = i +1;
//     console.log(i);
// }

//In a for loop, the lcv is modified last. Always last.
// We see 99, it's incremented. We never see 100.
// for (i = 0; i < 100; i++){
//     console.log(i)
// }
//
// You can change your starting point
// You can change your end point
// You can change by how much you step up or down
// for (i = 0; i < 100; i++){
//     console.log(i)
//     for (inner = 0; inner < 9; inner++){
//         console.log(i + " plus " + inner + " equals " + (i + inner));
//     }
// if( i <50){
//     console.log(i + " is such a cute little number!")
// }
// }

let words = "";
for (i= 0; i < 5; i++){
    let word = prompt("Let's make sentence! Enter a word!")
    if(word ==="curses"){
        alert("Ouch! This a respectable program!");
        continue;
    }
word = word + " " + word;
    console.log("Your sentence is " + word);
}

