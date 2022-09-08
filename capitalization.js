"use strict";
const name1 = "MaDEliNE";
const firstLetter = name1.charAt(0).toUpperCase() + name1.substring(1).toLowerCase();
console.log(firstLetter);

capitalise(name1);
function capitalise(name1) {
  name1 = name1.charAt(0).toUpperCase() + name1.substring(1).toLowerCase();
  return `My name is ${name1}`;
}
const cap = capitalise("niki");
console.log(cap);
