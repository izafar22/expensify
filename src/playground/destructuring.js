//Array destructuring

const address = ["1299 south juniper street", , "pennsylvania", "19147"];

//const [street, city, state, zip] = address;

const [, city = "New York", state] = address;

console.log(`you are in ${city} ${state}`);

//----object Destructuring--------------
// console.log("destructutring");

// const person = {
//   name: "Andrew",
//   age: 26,
//   location: {
//     city: "New York",
//     temperature: 93
//   }
// };

// const { name = "myname", age } = person;
// person.name = "radha";
// console.log(`the name is ${name} and age is ${age}`);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
// const { name: publisherName = "self published" } = book.publisher;
// console.log(publisherName);
