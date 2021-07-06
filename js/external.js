"use strict";

// alert

// /alert("Hi, Im a JavaScript alert")

// confirm

//  var userDecision = confirm("are you sureyou don't want to buy stuff on sale!");
// console.log(userDecision);

// if(userDecision === true){
//  alert("wise choice!");
// } else{
//  alert("Oh no, your loss!")
// }

// prompt

// var currentSpeedInMph = 65;
// var plannedSpeedInMph = prompt("How fast do you plan to go I mph");
// var distanceLeftInMiles = prompt("How may miles away are you from your destination");
// var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedInMph) * 60;
// console.log(timeToDestinationAtCurrentSpeed);
// var timeToDestinationAtPlannedSpeed =(distanceLeftInMiles/plannedSpeedInMph) * 60;
// var timeGoin = timeToDestinationAtCurrentSpeed - timeToDestinationAtPlannedSpeed;
// var minutesGoined = Math.floor(timeGoin);
// var seconds = Math.round((timeGoin - minutesGoined) * 60);
// console.log("If you drive at " + plannedSpeedInMph + " mph,you will arrive " + minutesGoined + " minutes and " + seconds + " seconds earlier. Is it worth it?")

// console.log("Hello from external JavaScript");
// alert("Welcome to my Website");
// let favoriteColor = prompt("What is your favorite color?");
// alert("Great " + favoriteColor + " is my favorite color too.");
//
// let littleMermaidDaysRent = prompt("How many day did you rent The Little Mermaid? ");
//
// let brotherBearDaysRent = prompt("How many day did you rent Brother Bear? ");
//
// let herculesDaysRent = prompt("How many day did you rent Hercules? ");
//
// let totalCostOfMovies = (littleMermaidDaysRent * 3) + (brotherBearDaysRent * 3) + (herculesDaysRent * 3);
//
// alert("$" + totalCostOfMovies);

let hoursWorkedAtGoogle = prompt("How many hours did you work at Google?");

let hoursWorkedAtAmazon = prompt("How many hours did you work at Amazon?");

let hoursWorkedAtFaceBook = prompt("How many hours did you work at FaceBook?");

let totalPay = (hoursWorkedAtGoogle * 400) + (hoursWorkedAtAmazon * 380) + (hoursWorkedAtFaceBook * 350);

alert("$" + totalPay);

