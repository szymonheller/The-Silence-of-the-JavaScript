'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio';
// const private = 534;
// const if = 23;



// Functions

function logger() {
    console.log('My name is Szymon');
}

// calling / running / invoking
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 2);
console.log(appleOrangeJuice);



// Function declarations vs expressions

// function declaration:
function calcAge1(birthYear) {
    return 2020 - birthYear;
}
const age1 = calcAge1(1996);
console.log(age1);


// function expression:
const calcAge2 = function (birthYear) {
    return 2020 - birthYear;
}
const age2 = calcAge2(1990);
console.log(age2);



// Arrow Functions

const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirement = 70 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1996, "Szymon"));
console.log(yearsUntilRetirement(1980, "Andrzej"));



// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}
console.log(fruitProcessor(2, 3));





const calcAge = function (birthYear) {
    return 2020 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 70 - age;

    if (retirement > 0) {
        console.log(`$(firstName) retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`$(firstName) has already retired.`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1990, "Wojciech"));
console.log(yearsUntilRetirement(1920, "Mike"));




const firstTeamName = "Dolphins";
const dolphinsScore1 = 20;
const dolphinsScore2 = 28;
const dolphinsScore3 = 23;

const secondTeamName = "Koalas";
const koalasScore1 = 13;
const koalasScore2 = 10;
const koalasScore3 = 20;

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}


const avarageDolphinsScore = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
const avarageKoalasScore = calcAverage(koalasScore1, koalasScore2, koalasScore3);
console.log(`Avarage Dolphins score: ${avarageDolphinsScore}, avarage Koalas score: ${avarageKoalasScore}`);


const checkWinner = function (firstTeamAvarageScore, secondTeamAvarageScore, firstTeamName, secondTeamName) {
    if (firstTeamAvarageScore > secondTeamAvarageScore) {
        return console.log(`${firstTeamName} are the winners!`)
    } else if (secondTeamAvarageScore > firstTeamAvarageScore) {
        return console.log(`${secondTeamName} are the winners!`)
    } else {
        return console.log(`It is a draw!`)
    }
}

const dolphinsVsCoalasResult = checkWinner(avarageDolphinsScore, avarageKoalasScore, firstTeamName, secondTeamName);



// Arrays

const friend1 = "Adam";
const friend2 = "Wiktor";
const friend3 = "Krzysztof";

const friends = ['Adam', 'Wiktor', 'Krzysztof'];
console.log(friends);

const years = new Array(1991, 1980, 2000, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jakub"
console.log(friends);



// add elements

const friends = ['Adam', 'Wiktor', 'Krzysztof'];
friends.push('Maciej');
console.log(friends);

friends.unshift('John');
console.log(friends);

// remove elements
friends.pop(); // last element
console.log(friends);

friends.shift(); // first element
console.log(friends);


console.log(friends.indexOf('Adam'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Adam'));
console.log(friends.includes('Bob'));




const calcTip = billValue => {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * (15 / 100);
    } else {
        return billValue * (20 / 100);
    }
}
// console.log(calcTip(100));


let bills = [125, 555, 44];

let tips = [];

let total = [];

// tips
for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
}

// total
for (let i = 0; i < bills.length; i++) {
    let sum = bills[i] + tips[i];
    total.push(sum);
}

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);



// Objects

const mrSzymon = {
    firstName: "Szymon",
    lastName: "Surname",
    age: 2021 - 1996,
    job: "programmer",
    friends: ["Adam", "Wiktor", "Krzysztof"],
};

console.log(mrSzymon);
console.log(mrSzymon.firstName);
console.log(mrSzymon["firstName"]);

const nameKey = 'Name';
console.log(mrSzymon["first" + nameKey]);
console.log(mrSzymon["last" + nameKey]);


const interestedIn = prompt("What do you want to know about Szymon? Choose between firstName, lastname, age, job and friends");

if (mrSzymon[interestedIn]) {
    console.log(mrSzymon[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastname, age, job and friends");
}


mrSzymon.location = 'Poland';
mrSzymon['twitter'] = "@testTwitter";

console.log(mrSzymon);

console.log(`${mrSzymon.firstName} has ${mrSzymon.friends.length} friends, and his best friend name is ${mrSzymon.friends[0]}.`);





// Objects methods


const mrSzymon = {
    firstName: "Szymon",
    lastName: "Surname",
    birthYear: 1996,
    job: "programmer",
    friends: ["Adam", "Wiktor", "Krzysztof"],
    hasDriversLicense: true,

    // calcAge: function (birthyear) {
    //     return 2021 - birthyear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    }
};

// console.log(mrSzymon.calcAge());

// console.log(mrSzymon.age);
// console.log(mrSzymon.age);
// console.log(mrSzymon.age);


// console.log(`Szymon is a ${mrSzymon.calcAge()} years old ${mrSzymon.job}, and he has ${mrSzymon.hasDriversLicense ? "a" : "no"} driving license.`);




const mark = {
    firstName: "Mark",
    lastName: "Smith",
    mass: "78",
    height: "1.69",

    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}

const john = {
    firstName: "John",
    lastName: "Bush",
    mass: "92",
    height: "1.95",

    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(`${mark.bmi > john.bmi ? "Mark's BMI " + "(" + mark.bmi + ")" : "John's BMI " + "(" + john.bmi + ")"} is higher than ${mark.bmi < john.bmi ? "Mark's BMI " + "(" + mark.bmi + ")" : "John's BMI " + "(" + john.bmi + ")"}!`)




// The for loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}!`);
}




const szymonArray = ["Szymon", "Heller", "25", "Web Developer", 11, ["a", "b"], true, "xyz"];
const szymonArrayTypes = [];

for (let i = 0; i < szymonArray.length; i++) {
    console.log(szymonArray[i], ";", typeof szymonArray[i]);

    szymonArrayTypes.push(typeof szymonArray[i]);
}
console.log(szymonArrayTypes);


const years = [1991, 2000, 1945, 2001];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);


// continue and break

console.log("---only strings---")
for (let i = 0; i < szymonArray.length; i++) {
    if (typeof szymonArray[i] !== 'string') continue;

    console.log(szymonArray[i], typeof szymonArray[i]);
}

console.log("---break with number---")
for (let i = 0; i < szymonArray.length; i++) {
    if (typeof szymonArray[i] === 'number') break;

    console.log(szymonArray[i], typeof szymonArray[i]);
}




const szymonArray = ["Szymon",
    "Heller",
    "25",
    "Web Developer",
    11,
    ["a", "b"],
    true,
    "xyz",
];

for (let i = szymonArray.length - 1; i >= 0; i--) {
    console.log(i, szymonArray[i]);
}




for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}




// While loop


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}!`);
// }


// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}!`);
//     rep++;
// }


let dice = Math.trunc(Math.random() * 6) + 1;



while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log(`Loop is about to end.`);
}





const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


const calcTip = billValue => {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * (15 / 100);
    } else {
        return billValue * (20 / 100);
    }
}

for (let i = 0; i < bills.length; i++) {
    let tipsCounter = calcTip(bills[i]);
    tips.push(tipsCounter);
    totals.push(tipsCounter + bills[i]);
}

console.log(`Tips: ${tips}, totals: ${totals}.`);


*/


const array = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const array2 = [50, 50, 50];

let calcAvarage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


console.log(calcAvarage(array));
console.log(calcAvarage(array2));


