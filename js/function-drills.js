function isOdd(number){
    if(number % 2 === 0) {
        return "is not odd";
    } else {
        return "is odd";
    }
}

function isEven(number){
    if(number % 2 === 0){
        return "is even";
    } else{
        return "is not even";
    }
}

function identity(input){
    return input;
}

function isFive(input){
    return parseFloat(input) === 5;
}

function addFive(input){
    return parseFloat(input) + 5;
}

function isMultipleOfFive(input){
    if(input % 5 === 0){
        return "Multiple of five";
    } else {
        return "Not multiple of five";
    }
}

function isThree(input){
    return parseFloat(input) === 3;
}

function isMultipleOfThree(input){
    if(input % 3 === 0){
        return "Multiple of three";
    }else{
        return "Not multiple of three";
    }
}

function isMultipleOfThreeAndFive(input){
    if (input % 3 ===0 || input % 5 === 0){
        return "Multiple of three or five";
    } else{
        return "Not a multiple of three or five";
    }
}

function isMultipleOf(target,n){
    if (target % n === 0){
        return "Is multiple of target"
    } else{
        return "Not multiple of target"
    }
}

function isTrue(boolean){
    return boolean === true;
}

function isFalse(boolean){
    return boolean === false;
}

// function isTruthy(input){
//
// }
//
// function isFalsy(input){
//
// }

function isVowel(letter){
    if (letter === "a" || "e" || "i" || "o" || "u"; )
    {
        return "Is a vowel";
    }else {
        return "Is not a vowel";
    }
}