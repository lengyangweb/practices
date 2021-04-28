const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// A regular for loop
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company) {
//     // console.log(company);
//     console.log(company.name);
// })
// filter

// Get 21 and older
// Normal forloop for filter
// const canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// filter method
// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// ES6 arrow function
// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// Filter retail companies
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// })

// Using Arrow Function
// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// Get 80's Company
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(eightiesCompanies);

// Get companies that lasted 10 years or more
// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// console.log(lastedTenYears);

// map
// Create array of company names
// const companyNames = companies.map(function(company) {
//     return company.name;
// });

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;   
// });

// const testMap = companies.map(company => `${company.name} [${company.start} = ${company.end}]`);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimesTwo = ages.map(age => (age * 2));

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);
// console.log(ageMap);
// sort
// Sort companies by start years
// const sortCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// const sortCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
// console.log(sortCompanies);
// const agesSort = ages.sort((a, b) => a - b);
// const agesSort = ages.sort((a, b) => b - a);

// console.log(agesSort);

// reduce
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// });

// const ageSum = ages.reduce((total, age) => total + age, 0);

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);


console.log(combined);