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

  function myFunc() {
    return 42;
  }

  const mySum = myFunc() * 2; // both these functions and variable expressions exist in the global scope.
  mySum;

  // we cant reference anything declared within a function as that may bring an error.
// Variables declared without const and let are automatically global scoped as demonstrated below;

if (true) {
    firstName = "Alfa"
    
}
firstName;

//Even inside a Function, a variable declared without Const and let are still still remains globally scoped

function bankAccount() {
    secretPassword = "il0v3pupp135";
  
    return "bankAccount() function invoked!";
  }
  
  bankAccount();
  // => "bankAccount() function invoked!"
  
  secretPassword;
  // => "il0v3pupp135"

  function myKey(){
    const myNum = 46;
    return myNum * 2;
  }
  myKey();

  // Demonstrating access to globally declared variables within another Function

  const globalVar = 2; //This is a globally declared  variable 

  function firstFunk() {
    const firstVar = 3  // this is a variable declared inside a function.
    return globalVar + firstVar;

  }
  firstFunk();
  //Because of the way functions can look up variables declared in outer scopes, we say they have access to a scope chain. 

  const globalAriab = 4

  function firstFun() {
    const firstAriab = 7

    function secondFun() {
        const secondAriab = 3
        return secondAriab + firstAriab + globalAriab
    }
    const resultFromSecondFun = secondFun();
    return resultFromSecondFun;
    
  }
  firstFun();
// Another demonstration of the scope accessibility

const fruit = "Apple";

function first() {
    const vegetable = "Spinach";
    console.log("fruit;", fruit);
    console.log("vegetable;", vegetable);
    console.log("legume;", legume);
    
}

function second() {
    const legume = "Beans"
    console.log("fruit;", fruit);
    console.log("vegetable;", vegetable);
    console.log("legume", legume);
}

first();
second();

//Both first() and second() have access to fruit, but first() cannot access legume and second() cannot access vegetable in the above scope demonstration.
//This is because both are first level scopes.

const myRav = 46;

function myFu() {
    const myRav = 7000;
    return myRav;
}
myFu(); // Here the global variable identifier  has been assigned the value of the similar identifiers value of 7000 since it has been declared within the local scope of the function myFu.
// The const myRav within myFu is the one that the engine will recognize as it cannot continue going far up beyond the function scope.


const myAr = "Foo"

function firs() {
    console.log("Inside firs()");
    console.log("MyAr is currently equal to:", myAr);
}
function secon() {
    const myAr = "Bar"

    firs();
}
secon();

//ARRAYS AND OBJECTS.

//A data structure is a means of associating anf organizing information

// the following is an array; 
['This', 'is', 'an', 'array.'];

//We can assign an array to a variable;
const evenNumbers = [2,4,6,8,10,12];

//We can find out how many elements an array contains using the length property;
const myArray = ['a','very','lengthy',false , 'array']  // this is an array literal syntax.
myArray.length; //this gives 5.

//Below is a demonstration of how Arrays are effective at organizing information beyond the array literal method.

const winningNumbers = [3,6,5,1,8,0,8,4]

function logWinningNumbers(numbers) {
    console.log("winning numbers:", numbers);
}
logWinningNumbers(winningNumbers);

//Accessing an element in an array

let goodNumbers = [4,5,6];
goodNumbers[0]; // this is the index for 4

const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // => undefined
  
  alphabet.length;
  // => 26
  
  alphabet[alphabet.length - 1];
  // => "z"
  //We placed an expression (alphabet.length - 1) inside the square brackets, and the JavaScript engine computed the value of that expression to determine which element we were trying to access. In this case, alphabet.length - 1 evaluated to 25, so alphabet[alphabet.length - 1] became alphabet[25].
//We  can update the value of an element in an array using square brackets and an assignment operator as seen below;
const planets = ['Mercury','Venus','Earth','Mars','Juptier','Saturn','Uranus','Neptune','Pluto']; // we access the planet we want, ['Juptier'] and reassign the element's value using =

planets[4] = 'Jupiter';
//We are not able to reassign the array itself but we are able to reassign its elements.

const chronicallyNestedArray = ['how',['deep',['can',['we',['go',['?'],'pretty'],'dang'],'deep'],'it'],'seems.',]; //Adding an extra set of brackets helps us access an array within an array as such;
chronicallyNestedArray[1][3];

//Brief mutability demonstration
const salutation = "Hello";
salutation.toUpperCase(); //=> SALUTATION.
salutation; //=> "Hello"

//Array Methods
//.push() and .unshift() are both methods used to add elements into an array.
//.push() adds to the end while .unshift() adds an element to the beginning of the array;

const superheroes = ["Hulk","Thor","Sentry","SilverSurfer"];
superheroes.push("Franklin Richard"); //adds "Franklin Richards" to the end of the array.

const cities = ["Nairobi","Kisumu","Nakuru",];
cities.unshift("Dodoma");// adds "Dodoma" to the beginning of the array.

//Spread Operator; (...) helps 'spread out' the elements of an existing array into a new array creating a copy as seen below;
const goodFood = ["Chapatti","Matumbo","Pilau"];
const copyOfGoodFood = [...goodFood];  //this has made a whole copy of the variable 'goodFood' array value.

//Add Elements To An Array.
//adding an element to the front of an Array using a Spread Operator.

const goodDrinks = ["Soda","Passion","Mango",];
const allDrinks = [...goodDrinks, "Water","Red Bull"] //=> adds all the components of goodDrinks to the front of allDrinks

//adding an element to the back of an Array using a Spread Operator.
const sneakers = ["Nike","Jordans","Puma"];
const allShoes = ["Loafers","Boots","Brogues",...sneakers]; //=> adds all the components of sneakers to the back of allShoes.

//Removing Elements From An Array.
//We use .pop() to remove an element from the end of an array, an .shift() to remove an element from the beginning of an array.

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.pop();
// => "Sun"

days;
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] "Sun" has been removed.

const Days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.shift();
// => "Mon"

days;
// => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] "Mon" has been removed.

//USing .slice() removes elements from an Array non destructively.
//If we don't provide an argument , then .slice() will return a copy of the array unaffected.
const primes = [2, 3, 5, 7];

const copyOfPrimes = primes.slice();

primes;
// => [2, 3, 5, 7]

copyOfPrimes;
// => [2, 3, 5, 7]`

// applying .slice()with an argument;
const daYs = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 daYs.slice(2,5);
 //We can also provide one or two arguments to .slice(): the first is the index where the slice should begin and the second is the index before which it should end:
 //If no second argument is provided, the slice will run from the index specified to the end of the array.
 //Negative indexes tells JavaScript to start counting the elements from the last end of the array as seen below;

 daYs.slice(-1); //> gives us "Sunday"
 daYs.slice(-3); //> gives us "Friday", "Saturday", "Sunday".
 daYs.slice(0,-3);//> gives us all the days minus the last array element: Monday to Saturday minus Sunday.

 //Using .splice();
 //.splice() allows us to remove elements, add elements, or replace elements (or any combination of the three).They are destructive to arrays.
 days.splice(2);
// => ["Wed", "Thu", "Fri", "Sat", "Sun"] => Monday and Tuesday have been completely removed.

days;
// => ["Mon", "Tue"]
//We can also use a negative same as with .slice();
days.splice(-2);
// => ["Sat", "Sun"]

days;
// => ["Mon", "Tue", "Wed", "Thu", "Fri"]

//When we provide two arguments to .splice(), the first is still the index at which to begin splicing, and the second dictates how many elements we want to remove from the Array. For example, to remove 3 elements, starting with the element at index 2 as seen below;
days.splice(2, 3);
// => ["Wed", "Thu", "Fri"]

days;
// => ["Mon", "Tue", "Sat", "Sun"] =>removed "Wed", "Thu", "Fri".

//Replacing elements in ana array using .splice();
// array.splice(start, deleteCount, item1, item2, ...) is what we use to remove and replace elements in an array.
const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
  ];
  
  cards.splice(2, 1, "Ace of Clubs");
  // => ["Nine of Clubs"]
  
  cards;
  // => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]

  //We can add 0 as the second argument in an array to add an element to an array at any point.
  cards.splice(2, 0, "Queen of Hearts", "Queen of Diamonds");
  // we use bracket notation to replace elements in an array.
  cards[2] = "Queen of Hearts";

//JavaScript Objects;
//Objects are used to store information in a way that is more efficient than using an array.
const object = {}; //empty objects.
const obj = {name: "Chimano"}; //object with a single property.
// We use commas to separate multiple values.
const obj2 = {
    name: "Alfaa",
    age: 30,
    isAlive: true,
}
//We can have nested objects within values;
const obj3 = {
    name: "Alfa",
    age: 30,
    isAlive: true,
    address: {
        city: "Nairobi",
        country: "Kenya",
    },
};

//Multiple properties can have the same values. If the same key is used for multiple properties, only the final value will be retained.
const meals = {
    breakfast: "Avocado Toast",
    breakfast: "Bacon",
    breakfast: "Oatmeal",
    breakfast: "Scrambled eggs",
}
meals; //=> {breakfast: "Scrambled eggs"}.. The last key will be provided as input.
//We can access the value of an object using dot notation.
meals.breakfast;//=> gives  the value of the key breakfast which is "Avocado Toast" e.t.c
//To access a value nested inside the inner object of a key, we simply append the inner key again using dot notation;
obj3.address.city;//=> gives the appended value "Nairobi"

//Bracket Notation;
// You can access key values just as with the dot operator but with bracket notation. The keys are presented as strings within the brackets to get the value.
obj3["name"]; //=>"Alfa"
obj3["address"]["city"]; //=>"Nairobi" and so forth. This is a bit harder to read than dot notation and I should always stick to dot notation.


//Accessing Properties Dynamically.
//Bracket notation also help us compute the value of variables on the fly;
const dishes = {
    breakfast: "Oatmeal",
    lunch: "Pilau",
    dinner: "Chapatti",
}

let mealName = "breakfast";//=> calls the key "breakfast" as a value.
dishes[mealName]; //=> returns the value "Oatmeal"

//JavaScript's Object Methods;
//We can get the list of top level keys in an object using the Object.keys() method;
const alfaMenu = {
    breakfast: "Oatmeal",
    lunch: "Pilau",
    dinner: "Chapatti",
}
Object.keys(alfaMenu);//=> gives us an array of the keys in the object ["breakfast", "lunch", "dinner"]


//Object.values(); helps us get the values of the keys in an object;
Object.values(alfaMenu);//=> gives us an array of the values in the object ["Oatmeal", "Pilau", "Chapatti"]

//Modifying Objects
//We can add a new property to an object using the dot notation or Bracket Notation;
const circle = {};
circle.radius = 10; // this creates key inside circle and sets its value to 10 using the dot notation.
circle; //=> {radius: 10}
circle["diameter"] = 20; // this creates key inside circle and sets its value to 20, using the bracket notation.
circle.circumference = circle.diameter * Math.PI;
circle["area"] = Math.PI * circle.radius ** 2;


//We can update or overwrite existing properties simply by assigning a new value to an existing key:
const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Curly",
    salad: "Cobb",
  };
  
  mondayMenu.fries = "Sweet potato";//=> replaced the value of the key "fries" with "Sweet potato".
  
  mondayMenu;
  //=> { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Cobb" }

  //JavaScript  Loops.
  //For Loop
  for ([initialization]; [condition]; [iteration]) {
    [loopbody]
  }
//Initialization is used to initialize a counter variable.
//Condition is used to determine when the loop should stop;If this expression evaluates to true, the statements in the loop body are executed. If the expression evaluates to false, the loop exits.
//Iteration is used to modify the counter variable in each iteration.
//Loopbody is the code that will be executed in each iteration.
for (let i = 0; i < 587; i++) {
    const element = array[i];
    
}


//THE DOM
//The Document Object Model (DOM) is used in Programming to create and modify content that users see in their browsers and add interactivity to our web pages.
//The window object represents the browser window. The document object represents the HTML document.
window.innerHeight; //=> gives the height of the window.

document.URL; //=> gives the URL of the current document. As an object, "document" has properties.
document.querySelector("h1"); //=> gives the first element that matches the specified CSS selector. this represents "document" methods.
//Select an Element With JavaScript
document.querySelector("h1"); //=>this selects the element with the tag "h1".

//Delete an Element with JavaScript;
document.querySelector("h1").remove(); //=>this deletes the element with the tag "h1".

//Storing Node References in Variables
const header = document.querySelector("h1"); //=> Query methods are expressions that return a value.

//Finding HTML Elements for Dom; class and id attributes makes the node and its  easier to locate 

//Finding Nodes;
getElementById("myId"); //=> returns the node with the id "myId"


getElementsByCLassName("myClass"); //=> returns a collection of nodes with the class "myClass"



getElementsByTagName("h1"); //=> returns a collection of nodes with the tag "h1"

const main = document.getElementsByTagName("main")[0];
const secondChild = main.children[1];
const p = secondChild.getElementsByTagName("p")[0];
p.textContent = "Hello World";
console.log(p.textContent = "Hello World");