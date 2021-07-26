


function skipOneOddNumber(){
   while (true){
       let oddNumber = parseFloat(prompt("Pick a number between 1 and 50, to skip "));
       if (oddNumber % 2 === 1 && oddNumber < 51 && oddNumber >=1){
           break;
       }
       for (let i =1; i,51; i+=2){
           if(i === oddNumber){
               console.log("Skipping this number " + oddNumber);
               continue;
           }
           console.log(i)
       }
   }
}

//console.log(skipOneOddNumber(oddNumber));

//console.log(skipOneOddNumber(27));

// while (true){
//     var oddNumber = parseInt(prompt("Please enter an odd number between 1 and 50. I will skip it."));
//     if (oddNumber % 2 === 1 && oddNumber < 51 && oddNumber >=1){
//         break;
//     }
// }
//
// for (var i = 1; i<51; i+=2){
//     if (i === oddNumber){
//         console.log("Yikes! Skipping number: " + oddNumber);
//         continue;
//     }
//     console.log(i);
// }