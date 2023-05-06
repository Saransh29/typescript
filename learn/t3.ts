// explicit types

let character1: string;
let age1: number;
let isLoggedIn: boolean;

// block scoped variables are across the files.

age1 = 30;
isLoggedIn = false;

// arrays

let ninjas: string[] = [];

ninjas.push("yoshi");

let mixed: string[] | number[] = [];

let uid: string | number;
uid = "123";
uid = 123;

let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: "mario",
  age: 20,
  beltColour: "black",
};
