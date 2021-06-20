//! INTERFACES
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// the benefit is to have different objects of IsPerson
const me: IsPerson = {
  name: "shaun",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
  // skills: [] this will be an error, different structure than the original interface
};

// enforces the IsPerson rule to future variables
let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

// greetPerson({ name: "shaun" }); this will not work because of different interface structure
greetPerson(me);

console.log(me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
