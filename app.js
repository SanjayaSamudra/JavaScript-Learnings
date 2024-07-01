//----------------------------JavaScript Comparison Operators---------------------------

// let x = 5;
// console.log(x == 8); // prints false
// x == 8; // returns false
// // "==" means equals to, that means we are checking '5 equal to 8' which is false.

// console.log(x == 5); // prints true 
// x == 5; // returns true

// console.log(x == "5"); // prints true
// x == "5"; // returns true
// // when "==" this sign uses, it only checks the value not the type

// x === 8;
// // "===" checks the value with its data type, 
// //that means in order to make this statement true both value and datatype should be equal.

// x === 5; // returns true
// console.log(x === 5); // prints true

// x === "5"; // returns false
// console.log(x === "5"); // prints false
// // reason :- checks both value and the type,
// //          In this case even-though value was equal, type was not equal result in giving false. 

//==================================================================

//---------------------Variable Handling-----------------------
// # In JavaScript variable type is dynamic
// Ex:-  let name = "saman"; // give type string
//       let name = 12;      // give type integer
//       let name = true;    // give type boolean
// This means that, for same variable we can assign different data of different types.

// To avoid that happening "TypeScript" came into play.

// let name = "saman";
// let age = 12;
// let isActive = false;
// let address = undefined;

// console.log(typeof name);     //  type "string"
// console.log(typeof age);      //  type "number"
// console.log(typeof isActive); //  type "boolean"
// console.log(typeof address);  //  type "undefined"

//==========================================================================

//----------------------Function Initialization & Handling------------------------------

// function initialization

// function sample() {
//     variable initialization of type var
//     var age = 12;
//     by default word type is var if not defined
//     word = "name";
//     variable initialization of type let
//     let x = "saman";
// }

// let sum = run();

// console.log(sum);

// function run() {
//     return 12+20;
// }

// age = 20;
// console.log(age);

// age = 50;
// console.log(age);

// function initialization - method 1
// function run() {
//     console.log("run");
// }

// function initialization - method 2
// let run = function() {
//     console.log("run");
// }

// function initialization - method 3 (Using "lambda" expression)
// let run = () => {
//     console.log("run");
// }

// function initialization - method 4 (Using "lambda" expression)
// no curly brackets need when we have one print statement
// let run = () => console.log("run");


//==========================================================================

//----------------------------JavaScript Objects---------------------------

//object initialization
// const custom = {}
// 1. custom is the object reference
// 2. Within the curly brackets{} object is found

//object value initialization

// let customer = {
//     name:"Saman",
//     age:12,
//     address:"Gampaha"
// }

// let customer2 = {
//     name:"Kamal",
//     age:22,
//     address:"Colombo"
// }

// console.log(customer);
// console.log(customer2);

// const customer = {
//     name: "Saman" ,
//     age: 20 ,
//     address: "Colombo" ,
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

//=====================================================================================================

//----------------------------------------Objects with classes-------------------------------------
// In JavaScript we can make objects without classes. But that doesn't mean that we can't create classes.

// class Customer{
//     // Customer(){} // Default constructor

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// // When you work with constructors, its enough to begin as constructor() as above.
// // Same name as class name is no need for constructor.

//     // function setName(name) {
//     //         this.name=name;
//     // }
//     // function getName(){
//     //         return this.name;
//     // }

// // When creating functions inside the constructor it is not need to mention function infront of function name.
// // See below

//     setName(name) {
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
// }
// // Correct way of writing functions inside the constructor.

// let customer = new Customer("Amal", 20, "Colombo");
// console.log(customer.getName()); // prints the name of the pass out one from above line. prints "Amal"


// customer.setName("Kamal"); // Update name to new name "Kamal"
// console.log(customer.getName()); // prints "Kamal"

// console.log(customer.getName(customer.setName("Kumudu"))); // Above update and call out within single statement. prints "Kumudu"
// // From this we can identify inner function runs first, then outer function. 
// // But there's a hidden case, that is getName() is parameterless function but we have given one. Let's see later how it works.

// console.log(customer);

//=====================================================================================================

//-------------------------------JavaScript Arrays-----------------------------------------

//array initialization
// const demo = [];
// 1. demo is the array reference
// 2. within the square brackets[] array items are found

//setting up items in an array
// const nameArray = [
//     "Kamal",
//     "Amal",
//     "Bimal",
//     "Nimal"
// ];

// 1. "Kamal", "Amal", "Bimal", "Nimal" are array items
// 2. each array items are indexing from 0 to arraylength-1
//      ex:-
//          arraylength = 4
//          "Kamal" <--- Appear in index 0
//          "Nimal" <--- Appear in index 3

// const array = []; // array initialization
// console.log(array); // Gives array

// console.log(typeof array); // Gives type as "object"

//===============================================================================================================

//---------------------------Assigning items after the array initialization---------------------------

// const customer = []; // array initialization with zero items
// customer[0] = "Sumal";
// customer[1] = 12;
// customer[2] = "Colombo";

// like this we can initialize items later

// after initialization this look similar to,
// const customer = ["Sumal", 12, "Colombo"];


//===============================================================================================================

//------------------------Calling array items seperately------------------------------

// console.log(nameArray[0]); // prints "Kamal"
// This line of code reads as,
//          From the reference called "nameArray" grab the data/item in the index 0th position and paste it to console.

// console.log(nameArray[1]); // prints "Amal"
// console.log(nameArray[2]); // prints "Bimal"
// console.log(nameArray[3]); // prints "Nimal"

//===============================================================================================================

//-------------------------------Getting array items into variables--------------------------------

// let firstName = nameArray[0];
// What happens here is, we are assigning 0th index value of the reference named "nameArray" to the variable called firstName

//================================================================================================================

//---------------------------------Changing the item value after initialization----------------------------

// customer[0] = "Nimal";
// nameArray[0] = "Kithmal";

//================================================================================================================

//-----------------------------Use of loops to print array elements--------------------------------

// Method - 01
// for (let i = 0; i < customer.length; i++) {
//     console.log(customer[i]);
// }

// Method - 02
// for (let i = 0; i < customer.length; i++) {
//     const element = customer[i];
//     console.log(element);
// }

// Method - 03
// let i = 0;
// while (i<customer.length) {
//     console.log(customer[i]);
//     i++;
// }

// Method - 04
// let j = 0;
// while (j<customer.length) {
//     console.log(customer[j++]);
// }

// Method - 05
// for (let i = 0; i < customer.length;) {
//     console.log(customer[i++]);
// }

// Above all gives the same answer, that means will print the elements present in the array which refer customer.

//==============================================================================================================

//-------------------------------Objects inside the array---------------------------

// const customer = [
//     {
//          name: "Saman" ,
//          age: 20 ,
//          address: "Colombo" ,
//          phone: "0712345678" ,
//          email: "saman.com"
//      } ,
//      {
//         name: "Kamal" ,
//         age: 12 ,
//         address: "Panadura" ,
//         phone: "0712345679" ,
//         email: "kamal.com"
//     } ,
//     {
//         name: "Amal" ,
//         age: 43 ,
//         address: "Colombo" ,
//         phone: "0712345673" ,
//         email: "amal.com"
//     }
// ];

// Within each curlybrackets{} object is found
// So any object can be acces with array item accessing method

// console.log(customer[0]); // prints the details of the first object

// let customers = [
//     {
//         name:"saman",
//         age:"12"
//     },
//     {
//         name:"kamal",
//         age:"20"
//     },
//     {
//         name:"vimal",
//         age:"32"
//     },
//     {
//         name:"nimal",
//         age:"15"
//     },
//     {
//         name:"sunil",
//         age:"50",
//         address:"gampaha"
//     },
//     {
//         name:"ranil",
//         age:"30"
//     }
// ]

// Method to print all the data (this instance, objects) inside the array.
// for (let i = 0; i < customers.length; i++) {
//     console.log(customers[i]); 
// }

// Method to print names in each object in an array.
// for (let i = 0 ; i < customers.length ; i++ ){
//     console.log(customers[i].name);
// }

// Method to print names with age in each object in an array.
// for (let i = 0; i < customers.length; i++) {
//     console.log(customers[i].name+" "+customers[i].age); 
// }

//=============================================================================================================

//------------------------Use of loops to print objects inside the array-------------------------------

// for (let i = 0; i < customer.length; i++) {
//     console.log(customer[i]);
// }

//==============================================================================================================

//-----------------------------------Use of pre defined functions with arrays---------------------------------------

// let numbers = [5,8,9,6,10,1,2,3,7,4];

// console.log(numbers.sort()); // prints [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// reason to appear sorted array list as above is,
// it only checks the first number, that's why 10 comes second. 

// let words = ["lol", "ama", "jay", "tik", "tok", "may", "say", "ame"];

// console.log(words.sort()); // prints ['ama', 'ame', 'jay', 'lol', 'may', 'say', 'tik', 'tok'] 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.push(10); // putting a value at the end of the array.
// console.log(numbers); // prints [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.pop(); // removing a value at the end of the array.
// console.log(numbers); // prints [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers.pop(); // removing a value at the end of the array.
// console.log(numbers); // prints [1, 2, 3, 4, 5, 6, 7, 8]

// // passing a object inside the array named as "numbers" 
// numbers.push({
//     name : "Sam",
//     age : 12
// })
// console.log(numbers); // prints [1, 2, 3, 4, 5, 6, 7, 8, {…}]. Thus {...} refers to object, upon clicking {name: 'Sam', age: 12} will appear.

//=======================================================================================================

//-----------------------------------Document manipulation (DOM)----------------------------------

// document.write("Hello World");

document.getElementById("h1").innerHTML="Hello"; // change of HTML document h1 header into name called "Hello"

function btnClick() {
    document.getElementById("h1").innerHTML="Sanjaya";
    addCustomer();
    loadTable();
    // console.log("Button Clicked");
}
// Once button clicked we make it happen to run the function called btnClick()

// function btnHover() {
//     console.log("Button Hover");
// }

// function btnWheel() {
//     console.log("Mouse Wheeled");
// }

// function that runs when button was clicked
function addCustomer(){
    let name =  document.getElementById("txtName").value; // get value of the input text
    let age =  document.getElementById("txtAge").value; // get value of the input text
    let address =  document.getElementById("txtAddress").value; // get value of the input text
 
    console.log(name+"|"+age+"|"+address); // printing the values that got
 
// pushing a new object
    customers.push({
     name,
     age,
     address
    })
 }

let customers = [
    {
        name:"saman",
        age:"12",
        address:"kurunegala"
    },
    {
        name:"kamal",
        age:"20",
        address:"panadura"
    },
    {
        name:"vimal",
        age:"32",
        address:"kurunegala"
    },
    {
        name:"nimal",
        age:"15",
        address:"nuwara"
    },
    {
        name:"sunil",
        age:"50",
        address:"gampaha"
    },
    {
        name:"ranil",
        age:"30",
        address:"mathara"
    }
]

// method to load data into table
function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    let tabelBody =`
        <tr>
            <th>Name</th>
            <th>age</th>
            <th>Address</th>
        </tr>
                `
    
    // use of for-each loop with lambda expression to print data into table
    // easiest way to iterate is table raw.
    customers.forEach(data =>{
        tabelBody += `<tr> 
                        <td>${data.name}</td>
                        <td>${data.age}</td>
                        <td>${data.address}</td>
                    </tr>`
    });

    console.log(tabelBody);
    tblCustomers.innerHTML=tabelBody;
}

