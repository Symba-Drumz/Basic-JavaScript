function getDayOfWeek(number) {
    if (number === 1) {
        console.log("Sunday");
    } else {
        if (number === 2) {
            console.log("Monday");
        } else {
            if (number === 3) {
                console.log("Tuesday");
            } else {
                if (number === 4) {
                    console.log("Wednesday");
                } else {
                    if (number === 5) {
                        console.log("Thursday");
                    } else {
                        if (number === 6) {
                            console.log("Friday");
                        } else {
                            if (number === 7) {
                                console.log("Saturday");
                            } else {
                                console.log("Out of bounds exception (1-7)");
                            }
                        }
                    }
                }
            }
        }
    }
}




function getMonthOfYear(number) {
    switch (number) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Out of bounds exception (1-12)");
    }
}

const age = 15
let isAdult;
if (age >= 18) {
    isAdult = true;
}
else {
    isAdult = false;
}

const number = 5;
let isEven;
if (number % 2 === 0) {
    isEven = true;
}
else {
    isEven = false;
}
console.log(isEven);

const weight = 60;
let isObese;
weight >= 100 ? isObese = true : isObese = false;
console.log(isObese);

const aGe = 26;
const isADult = aGe >= 18 ? true : false;
console.log(isADult);

document.getElementById("MyP").textContent = "Hello World!";
document.getElementById("MyP").style.color = "red";
document.getElementById("peep").textContent = "Peep this Nigga!!"
document.getElementById("peep").style.backgroundColor = "grey"

//REVIEWING DATATYPES IN JAVASCRIPT .
//1.Numbers

let x = 26
let y = 5000
let z = 3.5

console.log(`I am ${x} years old.`);
console.log(`2 pairs of sticks cost ksh${y}.`);
console.log(`I got a gpa score of: ${z}.`);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//2.Strings

let firstName = "Symba";
console.log(typeof firstName);
console.log(firstName);
console.log(`My name is ${firstName}.`);
//Strings can include numbers but not for any mathematical functions.

//3.Booleans

let gay = true;
let poor = false;
console.log(typeof poor);
console.log(typeof gay);
console.log(`Alfa is poor: ${poor}`);
console.log(`Chimano is gay: ${gay}`);
//Booleans are used as a sort of flag.


document.getElementById("p1").textContent = `My name is ${firstName}.`;
document.getElementById("p2").textContent = `I am ${x} years old.`;
document.getElementById("p3").textContent = `My two pairs of drumsticks cost ksh ${y}.`;
document.getElementById("p4").textContent = `Is poor: ${poor}.`;
//I have successfully displayed the variables on the html page, keyed in by the user in JavaScript by the help of document.getElementById("id of html element of choice").textContent = `template literal with interpolated variable.



//REVIEWING OPERATORS IN JAVASCRIPT.
//1.Arithmetic Operators = operands (values, variables, e.t.c), operators = (+, -, *, /, **, %, ++, --)
                           
let students = 31;

//students = students + 5;
//students = students - 5;
//students = students * 5;
//students = students / 5;

// exponents
//students = students ** 2;

//modulus
//modulus requires a the user to set a new variable to the remainder of the division of the two numbers.
//let extraStudents = students % 3;

//Augmented assignment operators help prevent the user from repeating the variable name.

//students += 5;
//students -= 5;
//students *= 5;
//students /= 5;
//students **= 2;
//students %= 3;

//Increment(++) and Decrement(--) Operators

//students++;
//students--;
console.log(students);

//Operator Precedence: BIDMAS
/*
operator precedence
1. Parenthesis - ()
2. Exponents - **
3. Multiplication and Division and Modulo - *, /, %
4. Addition and Subtraction : +, -
*/
let result = 1 + 2 * 3  + 4 ** 2
console.log(result);


//HOW TO ACCEPT A USER INPUT IN JAVASCRIPT.
//1. Easy way = window prompt
//2. Hard way = HTML textbox

//1.Window Prompt
//let username = window.prompt("Enter your name: ");
//console.log(username);

//let ageOfUser = window.prompt("Enter your age: ")
//console.log(ageOfUser);

//2.HTML textbox (The Professional way)
let username;
let aGE;

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("mytext").value;
    aGE = document.getElementById("myage").value;


console.log(username);
console.log(aGE);
}
