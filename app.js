// let name = "saman";
// let age = 12;
// let isActive = false;
// let address = undefined;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isActive);
// console.log(typeof address);

// //function initialization
// function sample() { 
//     //variable initialization of type var
//     var age = 12;
//     //by default word type is var if not defined
//     word = "name";
//     //variable initialization of type let
//     let x = "saman";
// }

// age = 20;
// console.log(age);

// age = 50;
// console.log(age);

//----------------------------JavaScript Objects---------------------------

//object initialization
// const custom = {} 
// 1. custom is the object reference
// 2. Within the curly brackets{} object is found

//object value initialization
// const customer = {
//     name: "saman" ,
//     age: 20 ,
//     address: "colombo" ,
//     phone: "0712345678" ,
//     email: "saman.com"
// }

// 1. name, age, address, phone, email are attributes
// 2. for each attribute values are assign using colon(:)
// 3. all are let type attributes
// 4. every single value are seperated from a comma(,)
// 5. it is okay to have a comma at the end last item
//      ex:- email: "saman.com",
// 6. this object is more similar to appear like below
//      ex:- const customer = {name: "saman", age: 20, address: "colombo", phone: "0712345678", email: "saman.com",}

//-------------------------------JavaScript Arrays-----------------------------------------

//array initialization
const demo = [];
// 1. demo is the array reference
// 2. within the square brackets[] array items are found

//setting up items in an array
const nameArray = [
    "Kamal",
    "Amal",
    "Bimal",
    "Nimal"
];

// 1. "Kamal", "Amal", "Bimal", "Nimal" are array items
// 2. each array items are indexing from 0 to arraylength-1
//      ex:- 
//          arraylength = 4
//          "Kamal" <--- Appear in index 0
//          "Nimal" <--- Appear in index 3

//===============================================================================================================

//--------------------Assigning items after the array initialization---------------------------

const customer = []; // array initialization with zero items
customer[0] = "Sumal";
customer[1] = 12;
customer[2] = "Colombo";

// like this we can initialize items later

//===============================================================================================================

//------------------------Calling array items seperately------------------------------

console.log(nameArray[0]); // prints "Kamal"
// This line of code reads as,
//          From the reference called "nameArray" grab the data/item in the index 0th position and paste it to console.

console.log(nameArray[1]); // prints "Amal"
console.log(nameArray[2]); // prints "Bimal"
console.log(nameArray[3]); // prints "Nimal"

//===============================================================================================================

//-------------------------------Getting array items into variables--------------------------------

let firstName = nameArray[0];
// What happens here is, we are assigning 0th index value of the reference named "nameArray" to the variable called firstName

//================================================================================================================

//---------------------------------Changing the item value after initialization----------------------------

customer[0] = "Nimal";
nameArray[0] = "Kithmal";

//================================================================================================================