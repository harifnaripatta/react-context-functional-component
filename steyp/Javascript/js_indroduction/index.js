// console.log("Hello World");

// alert("Hello, Hai dear ");

// let fname = "harif";
// let lname = " narippatta";
// console.log(fname + lname);
// console.log(`My first name is ${fname} and my last name is ${lname} `);

// let myList = ["harif", "haris", "hashir"];
// console.log(myList[1]);
// console.log(myList);
// let num = "hello";
// console.log(myList.length);

// myList[3] = "Jazim Aman";
// console.log(myList);
// myList.push("Ayan Shaz");
// console.log(myList);
// myList.pop();
// console.log(myList);

// Adding in array
/*
let myList = ["harif", "haris", "hashir", 123, 567, 234];
myList[3] = "abc"; // add new item in the last position in array
myList.push("Jazim Aman"); //add new item in the last position in array
myList.pop(); // remove last item
myList.splice(0, 2); //remove first 2 items
myList.splice(0, 0, "Hello", "Hai");
console.log(myList);
let myList2 = ["harif", "haris", "hashir", 123, 567, 234];
myList1 = myList2.slice(0, 2);
let myList3 = ["abc", "def", "ghi"];
let myList4 = ["jkl", "mno", "pqr"];
console.log(myList1);
console.log(myList2.sort());
console.log(myList2.reverse());
console.log(myList.concat(myList3, myList4));

let employees = {
  name: "haif",
  age: 35,
};

console.log(employees);
console.log(employees.name);
employees["fname"] = "abc";
console.log(employees);
delete employees.name;
console.log(employees);

try {
  // let a = 20;
  console.log(a);
} catch (error) {
  console.log(error.message);
}

function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw "Not a number";
  }
  return a + b;
}
try {
  let x = add(10, "A");
  console.log(x);
} catch (error) {
  console.log(error);
} finally {
  console.log("common area!!!");
}

console.log(Math.floor(Math.random() * 10) + 1);


const today = new Date();
const someDay = new Date(2024, 10, 10);
console.log(today.getDay());


// let str = '{ "name": "Gogul", "age": 21, "city": "NewYork" }';
let str = '{ name: "Gogul", age: 21, city: "NewYork" }';
// const json_obj = JSON.parse(str);
const json_obj = JSON.stringify(str);
console.log(json_obj);
*/
try {
  myFunction();
} catch (error) {
  console.log(error.message);
}
