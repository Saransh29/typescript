/** 
const rnd_time = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime: Date;

setTimeout(() => {
  endTime = new Date();
}, rnd_time);
*/

// return types
/**
 * function add(a: number, b: number): number {
  return a + b;
}

const res = add(add(3, 6), 6);
console.log(res); 
*/

type Car = {
  brand: string;
  make: string;
  year: number;
  battery?: number;
};

function printCar(car: Car) {
  let str = `${car.brand} ${car.make} ${car.year}`;
  return str;
}

const res1 = printCar({ brand: "BMW", make: "M3", year: 2019 });
console.log(res1);

const user = {
  name: "Daniel",
  age: 26,
  sex: "female",
};
