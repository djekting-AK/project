"use strict";

//////////////////////////////////////////////////////////////////

let str = "some";
let strObj = new String(str);

console.log(typeof str);
console.log(typeof strObj);

console.log([1, 2, 3]);

const solder = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

// const john = {
//   health: 100,
//   __proto__: solder, // такая запить прототипа устарела
// };

const john = Object.create(solder);

Object.setPrototypeOf(john, solder);
console.log(john.armor);
john.sayHello();

//////////////////////////////////////////////////////////////////
