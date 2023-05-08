// classes

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  print() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }

  change(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person("john", 30);
john.print();

john.change("john2", 31);
john.print();

class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on the mario website", 250);
const formatted = invOne.format();
console.log(formatted);

const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.format());
});

// access modifiers
/* 
class Invoice2 {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    // this.client = c;
    // this.details = d;
    // this.amount = a;
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}
**/

import { Invoice2 } from "./classes/Invoice2.js";

const invOne2 = new Invoice2("modifier", "work on the mario website", 250);

// invOne2.client = "yoshi"; //error as readonly
console.log(invOne2.format());
