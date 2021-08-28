//Array iteration Methods that operate on every item inside an array.

// Map, filter, reduce do not alter the original array(does not the mutate the array)
//either create a new array from the old one, or generate a value based on the old array

//forEach review

// var output = "";
// var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

// prices.forEach((item)=>{
//     console.log(item);
// });
//
// prices.forEach((item)=>
//     output+= `<p>${item}</p>`
// );
// $("#output").html(output);

// prices.forEach((item,index)=>{
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     output += `<p>Item number ${index + 1}. Price: ${item}. Tax: ${tax}. Total: ${total}.</p>`;
// });
// $("#output").html(output);

//.map()

// let pricesAfterTax = [];

// let pricesAfterTax = prices.map((item)=>{
//     let tax = (item * 0.0825).toFixed(2);
//     let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
//     return parseFloat(total).toFixed(2);
// });
// let output = "";
// pricesAfterTax.forEach((item)=> output += `<p>${item}</p>`);
// $("#output").html(output);

let things = ["book", "pencil", "marker", "eraser"];
// let pluralThings = things.map(function(item){
//     item = item + 's';
//     return item;
// });

// let pluralThings = things.map((item)=>`${item}s`);
// let output = "";
// pluralThings.forEach((item, index)=>{
//    if (index === 0){
//        output = "<p>You must bring the following items:</p>";
//        output += `<p>${item}</p>`;
//    } else{
//        output += `<p>${item}</p>`;
//    }
// });
// $("#output").html(output);

//let pluralThings = things.map((item) => `${item}s`);
// let output = "";
//pluralThings.forEach((item, index)=> index === 0 ? output += `<p>You must bring the following items:</p><p>${item}</p>` : output += `<p>${item}</p>`);
// $("#output").html(output);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

//const mileages = cars.map( car => car.mileage );

// const mileages =car.map(function (car){
//     return car.mileage;
// });

// let output = "";
// mileages.forEach( item => output += `<p>${item}</p>`);
// $("#output").html(output);

// .filter

const under10K = cars.filter(car => car.mileage < 10000);

// const under10K = cars.filter(function (car){
//     if (car.mileage < 10000){
//         return true;
//     }else{
//         return false;
//     }
// });

let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
let offordablesWithTax = prices.filter( price => price < 10).map(price =>{
    let tax = (price * 0.0825).toFixed(2);
    let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);

});
//
// let output = "";
// offordablesWithTax.forEach(function (item){
//    output = output + "<p>" + item + "</p>";
//    $("#output").html(output);
// });

// .reduce()

// let totalCost = offordablesWithTax.reduce((total, indivItemCost) => total + indivItemCost);


// let totalCost = offordablesWithTax.reduce(function (total, itemPrice){
//     return total + itemPrice;
// });

let totalCost = offordablesWithTax.reduce((total, indivItemCost,index) =>{
    console.log(`The item is ${index}, the total is ${total}, the itemCost is ${indivItemCost}`)
    return total + indivItemCost;
});

let averagePrice = offordablesWithTax.reduce((total, indivItemCost, index, array) => {
   total = total + indivItemCost;
   if (index === array.length-1){
       return total/array.length;
   }else{
       return total;
   }
});


