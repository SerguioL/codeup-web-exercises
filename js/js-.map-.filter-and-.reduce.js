//Array Squared Problem
const input = [1, 2, 3, 4, 5];
// we want    [1, ,4, 9, 16, 25];

const output = input.map(number => number**2);

console.log(output);

// sum of every positive element

const input2 = [1, -4, 12, 0, -3, 29, -150];
// we want 42

const output2 =input2.filter(number => number >= 0).reduce((total, number) => total+ number);

console.log(output2);

// Calculate median and mean
const input3 =[12, 46, 32, 64];
// we want {mean: 38.5, median: 32}
