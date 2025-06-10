//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Spiderman", "Hero", "Doggesh"];
let myObj = {
    name: "Arijit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "something.com"

let anothername = myYoutubename
anothername = "new.youtube.com"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "userOne@gmail.com",
    upi : "userOne@upi"
}

let userTwo = userOne

userTwo.email = "arijit@google.com"

console.log(userOne.email);
console.log(userTwo.email);