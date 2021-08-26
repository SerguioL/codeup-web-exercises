const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const langWith3 = users.filter(lang => lang.languages.length >= 3);

const userEmailS = users.map( emailS => emailS.email);

// let averagePrice = affordablesWithTax.reduce((total, indivItemCost, index, array) => {
//     total = total + indivItemCost;
//     if (index === array.length - 1) {
//         return total/array.length;
//     } else {
//         return total;
//     }
// });

const avgYearsExp = users.reduce((total, user, index, array) => {
    total = total + user.yearsOfExperience;
    if (index === array.length - 1) {
        return total/array.length;
    } else {
        return total;
    }
},0);

// const highestMileage = cars.reduce((accumulator, car, index, carsArray) => {
//     if (index === carsArray.length -1) {
//         accumulator.push(car.mileage);
//         accumulator.sort((a,b) => b-a);
//         return accumulator[0];
//     } else {
//         accumulator.push(car.mileage);
//         return accumulator;
//     }
// }, []);

const longestEmail = users.reduce((accumulator, uEamil, index, uEamilArray) => {
    if (index === uEamilArray.length -1){
        accumulator.push(uEamil.email);
        accumulator.sort();
        return accumulator[0];
    } else {
        accumulator.push(uEamil.email);
        return accumulator;
    }
},[]);






