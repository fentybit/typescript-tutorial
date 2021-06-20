//! GENERICS
// it allows to utilize re-usable codes
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// generics
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// console.log(docOne.name);
// when we pass the object, properties not defined yet
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 40 });
// let docTwo = addUID("yoshi"); it has to be an object
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" },
};
const docFour = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk", "toilet roll"],
};
console.log(docThree, docFour);
