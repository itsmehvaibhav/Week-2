const ages = [32, 33, 16, 40];

console.log(ages.filter(checkAdult));

function checkAdult(age) {
    return age >= 18;
}