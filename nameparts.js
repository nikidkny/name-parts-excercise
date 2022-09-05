const name = "Peter Heronimous Lind";
// const firstNameEnd = name.indexOf(" ");
const firstName = name.substring(0, name.indexOf(" "));
const middleName = name.substring(name.indexOf(" ") + 1, name.lastIndexOf(" "));
const lastName = name.substring(name.lastIndexOf(" ") + 1);
console.log(firstName);
// console.log(middleNameEnd);
console.log(middleName);
console.log(lastName);
// where the middleName would end up being multimple names like here "Percival Wulfric Brian"
const name1 = "Albus Percival Wulfric Brian Dumbledore";
const middleNames = name1.substring(name1.indexOf(" ") + 1, name1.lastIndexOf(" "));
console.log(middleNames);
