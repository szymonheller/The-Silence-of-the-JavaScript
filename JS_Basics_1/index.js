/*

let js = "amazing";
console.log(40 + 2 - 7 + 6);

console.log("test");

let firstname = "Szymon";
console.log(firstname);



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Szymon');

javaScriptIsFun = 'YES';
console.log(javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);



let age = 30;
age = 31;

const ageTwo = 20;
// ageTwo = 21;



// Math operators
const currentYear = 2020;
const ageSzymon = currentYear - 1996;
const ageAnna = currentYear - 1998;
console.log(ageSzymon, ageAnna);


const firstName = "Szymon";
const lastName = "Heller";
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x++; // 101 (x = x + 1)
x--; // 100
x--; // 99
console.log(x);

// Comparison operators
console.log(ageSzymon > ageAnna);
console.log("Is Szymon adult? " + (ageSzymon >= 18))

const isFullAge = ageSzymon >= 18;
console.log(isFullAge);



let a, b;

a = b = 25 - 10 - 5;
console.log(a, b);



const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = (marksMass / (marksHeight ** 2));
const johnsBMI = (johnsMass / (johnsHeight ** 2));

console.log("Mark's BMI: " + marksBMI + " John's BMI: " + johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;

console.log("Mark has higher BMI: " + markHigherBMI);


const firstName = "Szymon";
const job = "programmer";
const birthYear = "1996";
const currentYear = "2020";
// template strings
const szymon = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + ".";
console.log(szymon);

const szymonNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}.`;
console.log(szymonNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can't start driving license! Wait another ${yearsLeft} years.`);
}

const birthYear = 1996;

let century = 21;
if (birthYear <= 2000) {
    let century = 20;
} else {
    let century = 21;
}



const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

const marksBMI = (marksMass / (marksHeight ** 2));
const johnsBMI = (johnsMass / (johnsHeight ** 2));

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI}).`)
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI}).`)
}



// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Szymon'));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');



// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Szymon'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log('Height is defined!');
} else {
    console.log('Height is UNDEFINED');
}



const age = '18';
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just gecame an adult! (loose)");

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is a great number.");
} else {
    console.log("Number is not 23 or 7.");
}

if (favourite !== 23) console.log("Why not 23?");



//logical operators

let hasDriversLicense = true; // A
let hasGoodVision = true; // B
console.log(`1a) ${hasDriversLicense && hasGoodVision}`);
console.log(`1b) ${hasDriversLicense || hasGoodVision}`);
console.log(`1c) ${!hasDriversLicense}`);

hasDriversLicense = false;
console.log(`2a) ${hasDriversLicense && hasGoodVision}`);
console.log(`2b) ${hasDriversLicense || hasGoodVision}`);
console.log(`2c) ${!hasDriversLicense}`);


if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log("Someone else should drive...")
}



// the switch statement

const day = 'sunday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Do some programming');
        console.log('Go to cinema');
        break;
    case 'tuesday':
        console.log('Go shopping');
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Train at gym");
        break;
    case 'friday':
        console.log("More programming");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Weekend");
        break;
    default:
        console.log('Not a valid day');
        break;
}

// same as above
if (day === 'monday') {
    console.log('Do some programming');
    console.log('Go to cinema');
} else if (day === 'tuesday') {
    console.log('Go shopping');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Train at gym");
} else if (day === 'friday') {
    console.log("More programming");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("Weekend");
} else {
    console.log('Not a valid day');
}



//conditional operator

const age = 25;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}
console.log(drink2);


console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

*/
