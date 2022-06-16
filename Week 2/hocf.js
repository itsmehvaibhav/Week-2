const company = [
    { name: "googlebaba", category: "project name", start: 1982, end: 2021 },
    { name: "amazon", category: "service based", start: 1981, end: 2017 },
    { name: "filipkart", category: "product based", start: 1992, end: 2018 },
    { name: "snapdeal", category: "website based", start: 1991, end: 2020 },
];
const age = [15, 55, 66, 85, 36, 58, 58, 14, 25, 67, 27, 14, 65];
//for loop
// for (let i = 0; i <= company.length; i++) {
//   console.log(company[i]);
// }
//foreach function

company.forEach(function(vaibhav, index) {
    console.log(vaibhav.name + vaibhav.category);
});
//foreach using arrow function
company.forEach((vaibhav, index) => {
    console.log(vaibhav.name + vaibhav.category);
});

// // for loop
// for (let i = 0; i <= age.length; i++) {
//     console.log(age[i]);
// }
//filter
const k = age.filter(function(k) {
    if (k >= 30) {
        return true;
    }
});
//arrow function
console.log(k);
const l = age.filter((vaibhav, index) => vaibhav >= 50);
console.log(l);
console.log("...............................................");
//object form
const o = company.filter(function(va1) {
    if (va1.category === "service based") {
        return true;
    }
});
console.log(o);
//arrow function
const v = company.filter((va1) => va1.category === "service based");
console.log(v);

//map
company.map(function(va2, index) {
    console.log(va2, index);
});
//arrow
const dummy = company.map((va2, index) => {
    return `${va2.name} + ${va2.category}`;
});
console.log(dummy);
// reduce
const kk = age.reduce(function(total, ages) {
    return total + ages;
}, 0);
console.log(kk);
//arrow
const vv = age.reduce((total, ages) => total + ages, 0);
console.log(vv);