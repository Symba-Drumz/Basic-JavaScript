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


//TYPE CONVERSION
//Type conversion = changing datatypes of values into other datatypes(string to numbers, numbers to strings,strings to booleans, e.t.c)

//let AGE = window.prompt("How old are you?"); // do the type conversion below:
//AGE = Number(AGE);

//AGE+=1;  //user input is a default string so by adding 1, you are just adding an extra string input.
//console.log(AGE, typeof AGE);

//Converting other datatypes below;
let a = "pilau";
let b = 0
let c = false;

a = Boolean(a);
b = Number(b);
c = Number(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);


//JAVASCRIPT CONSTANTS.
// const is a variable that can't be changed.

const PI = 3.14159
let radius;
let circumference;

 document.getElementById("myKeyIn").onclick = function() {
    radius = document.getElementById("myWord").value;
    radius = Number(radius)
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
 }

 //Math Objects = built in objects that provide a collection of properties and methods

 Math.PI
 console.log(Math.PI);

 Math.E
 console.log(Math.E);

 let d = 3.21;
 let e = 2
 let f;

 //f = Math.round(d); //this rounds the number up.
 //f =  Math.floor(d);  //this rounds the number down.
//f = Math.ceil(d); // this ALWAYS rounds the number up.
//f = Math.trunc(d); //this eliminates any decimal options.
//f = Math.pow(d, e); //raises a number to a power.
//f = Math.sqrt(d); //finds square root.
//f = Math.sin(d);  // for trig purposes.
//f = Math.cos(d); // also for trig purposes.
//f = Math.tan(d); // also for trig purposes.
//f = Math.abs(d); // absolute value of a number; eliminates the negative sign.
//f = Math.sign(d); // 
//Math.max; finds the highest value btwn variables
//Math.min; finds the lowest value btwn variables

 console.log(f);

 //IF STATEMENTS
 //if condition is true, execute some code, if not, do something else.

 let time = 9;
 if(time < 12){
    console.log("Good morning.");
 }
 else{
    console.log("Good Afternoon");
 }

 let isStudent = false;
 if (isStudent) {
    console.log("You are a student!");
 }
 else{
    console.log("You are not a Student!");
 }

 let AGE = 18;
 let hasLicense = false;

 if (AGE >=16) {
    console.log("You are old enough to drive!"); 
    if (hasLicense) {
        console.log("Are ready to drive.");
    }
    else{
        console.log("Don't go driving!");
    }
 }  
 
 else{
    console.log("You must be 16+ to drive!");
 }

 let height = 4.5;

 if (height >= 5){
    console.log("You are tall enough to ride.");
 }
 else if (height >= 4){
    console.log("Ride the medium  ride.");
 }
 else if (height < 4){
    console.log("Ride the kiddy ride");
 }
 else{
    console.log("Go home.");
 }
 


//TERNARY OPERATOR = this is a shortcut to if{} and else{} statements that help assign  a variable to a condition ? codeIfTrue : codeIfFalse;

let distance = 10;
let message = distance > 5 ? "The place is far!" : "The place is near.";
console.log(message);

let hasWeapon = false
let verdict = hasWeapon ? "Is guilty of crime committed." : "Is innocent";
console.log(verdict);


//JAVASCRIPT fUNCTIONS

//Normal function with a name. ~this can be hoisted (called anywhere after being properly defined)because it has a function name.~
eat("meat")
function eat(food) {
    console.log("Serve me some "+ food + "!");
    
}
eat("meat");

//Anonymous JavaScript Function. ~cannot be hoisted without being initialized because of a lack of name~

const isDog = function(){
    console.log("Hello Rusty!");
    
}
isDog(); // => this call cannot be hoisted because this was an entire anonymous function.

//Here, the anonymous function ahs been accessed using a Function Expression.
const app = function () {
    console.log("This is a random app");
}
app();

const doMath = function(number, number2){
     return number * number2
}
//Variables passed as parameters will bring values passed as arguments
let fiveByFive = doMath(5,5);

function exerciseByronThePoodle() {
    console.log("Wake Byron the poodle");
    console.log("Leash Byron the poodle");
    console.log("Walk to the park Byron the poodle");
    console.log("Throw the frisbee for Byron the poodle");
    console.log("Walk home with Byron the poodle");
    console.log("Unleash Byron the poodle");
  }
  exerciseByronThePoodle(); //how to call a Function in JavaScript.

  const weatherToday = "rainy"

  const dogName = "Byron"
  const dogBreed = "poodle"

  function exerciseDog(dogName, dogBreed) {
    if (weatherToday === "rainy") {
        return `${dogName} did not exercise due to rain`
    }
    console.log(`Wake ${dogName} the ${dogBreed}`);
    console.log(`Leash ${dogName} the ${dogBreed}`);
    console.log(`Walk to the park ${dogName} the ${dogBreed}`);
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `${dogName} is happy and tired!`
  }
  const outcome = exerciseDog("Byron", "poodle");
  console.log(outcome);

  //my own function code below.

  function drummer(name) {
    console.log(name + " plays drums.");
  }
  drummer("Alfa");


//chef("Gordon Ramsey"); <= hoisting this call back has worked. N/B=> Hoisting is calling a function before they appear in a code.
  function chef(name) {
    console.log(name + " cooks really good food.")
  }
  chef("Gordon Ramsey");

//razzle("Dante", "Cathy"); <= hoisting this has also worked. it has outputted both the primary and default argument.
function razzle( officer = "Zach", target = "'em") {
    console.log(`${officer} razzle dazzles ${target}.`);
}
razzle();
razzle("Dante", "Cathy"); // I have placed "Dante" and "Cathy" as the default argument.

const mondayWork =  function(activity = "go to the office.") {
    return `This Monday I will ${activity}`
}
console.log(mondayWork());
console.log(mondayWork("work from home."));

outer("Hello")("student,", "JavaScript");

function outer(greeting, msg = "its a fine day to learn") {
    return function (name, language = "python") {
        return `${greeting}, ${name} , ${msg}, ${language}`
    }
}
outer("Hello")("student", "JavaScript");

function demoChain(name) {
    const part1 = "hi"
    return function() {
        const part2 = "there"
        return function () {
            console.log(`${part1.toUpperCase()} ${part2}, ${name}`);
        }
        
    }
}
demoChain("Alfa Zach")()();

//The following is a scope chain.
function question(suspect) {
    const part3 = "Why"
    return function() {
        const part4 = "are"
        return function() {
            const part5 = "you "
            return function () {
                const part6 = "late ?"
                console.log(`${suspect} ${part3} ${part4} ${part5}${part6}`);
            }
        }
    }
    
}
question("ALFA!")()()();

function foo(drink) {
    console.log(`I must have  ${drink}.`);
}
foo("juice");

//Arrow Functions is JavaScript.

const add = (parameter1, parameter2) => parameter1 + parameter2;

add(2, 2);

//If your arrow function has only one parameter, the () around the parameter becomes optional:

const twoAdder = x => x + 2;

const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  sum(1,2); 

  //Callback Functions in JavaScript;
  //How to pass an object into a function below;
  function iReturnThings(thing) {
    return thing;
    
  }
  iReturnThings({firstName: 'Alfa', lastName: 'Zach'}) //<=that is an object inside a function

  //How to pass a function into a function;
  iReturnThings(function () {return 4 + 5});

  iReturnThings(function () {'Hello,'+ 'world!'});
  //I must revisit all Function applications in JavaScript.
