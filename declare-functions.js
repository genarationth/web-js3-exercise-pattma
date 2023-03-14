// Exercise #1
const fee = 3;
const interestFee = 0.01;

const cal = (cost) => {
    let transaction = cost + (cost * interestFee) + fee;
    return transaction;
};
console.log(cal(100));

// Exercise #2
// Part 1
friends('Jay','Jane','James');
function friends(name1,name2,name3) {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
}

// Part 2
const age = (year) => {
    let currentYear = 2023;
    return  currentYear - year;
};
console.log(age(1996));

// Part 3
show('Jay',20,'Jane',22,'James',24);
function show(name1,age1,name2,age2,name3,age3) {
    console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);
}

// ================= Challenge Yourself =================
const stdResult = () => {
    let score = Math.floor(Math.random() * 12);
    console.log(score);

    if (score === 11) {
        console.log('Perfect');
    } else if (score > 8 ) {
        console.log('Excellent');
    } else if (score >= 5) {
        console.log('Pass');
    } else {
        console.log('Fail');
    }
}
stdResult();