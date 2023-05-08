let greet2: (a: string, b: string) => void;

greet2 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  } else {
    return num1 - num2;
  }
};

console.log(calc(5, 10, "add"));

let logDetails1: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails1 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
