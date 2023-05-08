// DOM

const anchor = document.querySelector("a")!;
// ! used to tell TS that anchor will never be null

console.log(anchor.href);

// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
