// arrays

let names = ["luigi", "mario", "yoshi"];
names.push("toad");
// names.push(3); // error
// names[0] = 1; // error

let test: any[] = ["luigi", 25, true];
test.push("toad");
test.push(3);
test[0] = 1;

// objects

let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

// ninja.age = "hello"; // error
