// // let, var and const

// var name1 = "world";
// let name2 = "hello";
// // const name3 = "something";

// name3 = "something else";
// if (name2 == "hello") {
//   const name4 = "name4";
//   console.log(name1);
// }

// console.log(name4);

// console.log(student);

var student = "raj";

// function show() {
//   console.log("show something");
// }

// console.log(window);

// console.log(show);

var show = () => {
  console.log("show something from arrow function");
};

// show = 48;
// show();
// console.log(show);

// function first() {
//   console.log("first function is executed");
//   return function second() {
//     console.log("second function is executed");
//     return function third() {
//       console.log("third function is executed");
//     };
//   };
// }

// const secondFunction = first();
// const thirdFunction = secondFunction();
// thirdFunction();
// first()()();

function argument1() {
  console.log("first argument");
}

function higherOrder(name, age, thirdParameter, fouthArgument) {
  console.log(name, age);
  thirdParameter();
  fouthArgument();
}

// higherOrder("Raj", 20, argument1, () => console.log("second argument"));

function normal() {
  console.log("function executed");
}

// let arr = [10, 20, "string", true, 0.001, normal];
// console.log(typeof normal);
// for (var i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "function") {
//     arr[i]();
//   } else {
//     console.log(arr[i]);
//   }
// }
// arr[5]();

// arr[0] = 100;

// console.log(arr);

// arr = 29;

// console.log(arr);

// const arr = [10, 20, 30, 40, 50];

// map
// reduce
// filter
// foreach

// arr.forEach((value) => console.log(value * 2));

// const updatedArray = arr.map(function (value) {
//   return value * 2;
// });

// const updatedArray2 = arr.map((value) => value * 2);

// console.log(arr);
// console.log(updatedArray);

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < arr2.length; i++) {
//   if (arr2[i] % 2 == 0) {
//     console.log(arr2[i]);
//   }
// }

// const evenValues = arr2.filter(function (value) {
//   return value % 2 == 0;
// });

// const evenValues2 = arr2.filter((value) => value % 2 == 0);

// console.log(evenValues);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// arr.forEach((value) => {
//   sum = sum + value;
// });

// console.log(sum);

// const sum = arr.reduce((prev, value) => {
//   prev = prev + value;
//   return prev;
// }, 0);

// console.log(sum);

// const myObj = {
//   "name = ishan": "Raj",
//   roll: 24,
// };

// console.log(myObj.name);
// console.log(myObj.roll);
// console.log(myObj["name = ishan"]);

// myObj["marks english"] = 100;

// console.log(myObj);

// const newObj = {
//   id: 101,
//   name: "Raj",
//   marks: 100,
//   college: "DY Patil",
// };

// const keys = Object.keys(newObj);
// const values = Object.values(newObj);
// console.log(keys, values);

// const timer = setInterval(function () {
//   console.log(Math.random(), "Hello");
// }, 1000);

// setTimeout(function () {
//   clearInterval(timer);
// }, 5000);

// https://github.com/AyushSoni86/MERN-Training
// https://api.freeapi.app/api/v1/public/randomproducts

// const data = fetch("https://api.freeapi.app/api/v1/public/randomproducts");
// console.log(data);

// const resolvedPromise = new Promise(function (resolve, reject) {
//   resolve([10, 20, 30, 40]);
// });

// resolvedPromise.then(function (value) {
//   console.log(value);
// });

// const rejectedPromise = new Promise(function (resolve, reject) {
//   reject("promise rejected manually");
// });

// rejectedPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// const data = fetch("https://api.freeapi0.app/api/v1/public/randomproducts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log(data);

// const response = data.then(function (value) {
//   return value.json();
// });

// response.then((data) => {
//   console.log(data);
// });

// async function callApi() {
//   try {
//     const data = await fetch(
//       "https://api.freeapi.app/api/v1/public/randomproducts"
//     );
//     const response = await data.json();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// callApi();

// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 0);

// console.log("third");

// console.log("fourth");

// for (let index = 0; index < 10; index++) {
//   setTimeout(() => {
//     console.log(Math.random(), index);
//   }, index * 1000);
// }

// const newObj = {
//   id: 101,
//   name: "Raj",
//   marks: 100,
//   college: "DY Patil",
// };

// const clonedObject = { ...newObj };

// console.log("newObject", newObj);
// console.log("clonedObject", clonedObject);

// newObj.name = "Patil";

// console.log("newObject", newObj);
// console.log("clonedObject", clonedObject);

const product = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  ],
};

// const ProductDescription = product.description;

const { title: productTitle, description } = product;

console.log(productTitle);
