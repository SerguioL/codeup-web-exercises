"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
//     if(color === "red"){
//         return "Roses are red.";
//     } else if(color === "orange"){
//         return "Oranges are orange.";
//     } else if(color === "yellow"){
//         return"The Sun is yellow.";
//     } else if(color === "green"){
//         return "The grass is green.";
//     } else if(color === "blue"){
//         return "The sky is blue.";
//     } else if (color === "indigo"){
//         return "Blueberries are indigo";
//     } else if(color === "violet"){
//         return "The rock is violet";
//     } else {
//         return "I don't Know";
//     }
// }

//console.log(analyzeColor("red"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor(color) {
//     switch (color) {
//         case("red"):
//             return "Roses are red.";
//             break;
//         case("orange"):
//             return "Oranges are orange.";
//             break;
//         case("yellow"):
//             return "The sun is yellow.";
//             break;
//         case("green"):
//             return "The grass the green.";
//             break;
//         case("blue"):
//             return "The sky is blue.";
//             break;
//         case("indigo"):
//             return "Blueberries are indigo";
//             break;
//         case("violet"):
//             return "The rock is violet";
//         default:
//             return "I don't Know"
//     }
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let pickColor = prompt("Pick a color.");
//
// alert(analyzeColor(pickColor))
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(lNumber, num){
//     if(0 === lNumber){
//         return num - ((lNumber = 0) * num);
//     } else if(1 === lNumber) {
//         return num - ((lNumber = .1) * num);
//     } else if (2 === lNumber){
//         return num - ((lNumber = .25) * num);
//     } else if (3 === lNumber){
//         return num - ((lNumber = .35) * num);
//     } else if (4 === lNumber){
//         return num - ((lNumber = .50) * num);
//     } else if (5 === lNumber){
//         return num - ((lNumber = 1) * num)
//     } else {
//         return "Invalid number"
//     }
// }
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
//
//  let cost = prompt("What is your total coast without any discounts?")
//
// alert("Your lucky number was " + luckyNumber + " and your total before the discount was $" + cost + " this is your final total $" + calculateTotal(luckyNumber,cost));
//
// console.log(calculateTotal(luckyNumber,cost));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let userEnterNumber = confirm("Do you want to enter a number");

function isANumber(input) {
    return !isNaN(parseFloat(input));
}

function isEvenOrOdd(num){
    if (num % 2){
        return "Number is even.";
    } else {
        return "Number is odd.";
    }
}

function numberAdd100(num){
    return num + " plus 100 is " + (num + 100);
}

function numberIsPositive(num){
    if(num < 0) {
            return "Number is negative";
    } else {
        return "Number is positive";
    }
}

if (userEnterNumber) {
    let userNumber = parseFloat(prompt("Please enter a number"));
    if (isANumber(userNumber)){
        alert(isEvenOrOdd(userNumber));
        alert(numberAdd100(userNumber));
        alert(numberIsPositive(userNumber));
    }else{
        alert('Input not a number')
    }
}


