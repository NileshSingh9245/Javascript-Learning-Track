// primitives

/* 7 types : String, Number, Boolean, null, undefined, symbol, BigInt */
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')

const anotherId =  Symbol('123')

console.log( id === anotherId)

const bigNumber = 651684651546656546516545n


//Reference type (Non primitive)

/* Array, Objects, functions */

const heros = ["Shaktiman","Naagraj","doga"];

let myObj={
    name: "Nilesh",
    age: 23,
}
const myfunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myfunction);
console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//########################## MEMORY MANAGEMENT ########################################

// stack(primitve): Here whenever we try to access we get a copy of the variable,
// Heap(Non-Primitive): Here we get to change the original value whenever we access

let mySite = "nileshKsingh.com"

let anotherSite = mySite
anotherSire = "Nilesh Singh"
console.log(anotherSite)


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl",
}

let userTwo = userOne
userTwo.email = "nilesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)