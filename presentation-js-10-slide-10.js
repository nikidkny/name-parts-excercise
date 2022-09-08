//slide 10
function greeting(firstName1) {
  return `Hello ${firstName1}`;
}
const sayHi = greeting;
console.log("Name: ", sayHi("Niki"));

function test(number) {
  return `Tested number: ${number}`;
}
const someVariableTest = test;

console.log("Test: ", someVariableTest(23));
// slide 16 - callback function in this case setTimout is callback
function congreet(name) {
  console.log("Congrats " + name);
}
console.log("Wait for it.. ");

setTimeout(congreet, 5000, "Niki"); // reference to the function to run it after 5 sec
// slide 18-19
function hire(person) {
  person.hired = true;
}
function fire(person) {
  person.hired = false;
}
//to call it all slide 20
function fireOrHire(action, person) {
  action(person);
} // until this is slide 20
const person1 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: true,
};
const person2 = {
  firstName: "Fred",
  lastName: " Weasley",
  hired: false,
};
console.log("Is Person1 hired?", person1.hired);
fireOrHire(fire, person1);
hire(person2);
console.log("Is person2 hired?", person2.hired);
