"use strict";
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

// putting this inside a function:Make sure that the function creates three new strings:
// firstName, middleName and lastName. Console.log them at the end of the function.
//You can console.log them as an object to make it easier, like console.log( { firstName, middleName, lastName } );
const fullName = "Peter Heronimous Lind";
getNameParts(fullName);
function getNameParts(fullName) {
  const firstName = fullName.substring(0, fullName.indexOf(" "));
  const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
  const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

  // const firstName = capitalise(fullName.substring(0, fullName.indexOf(" ")));
  // const middleName = capitalise(
  //   fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "))
  // );
  // const lastName = capitalise(fullName.substring(fullName.lastIndexOf(" ") + 1));
  if (middleName == null) {
    console.log(firstName, lastName);
  } else {
    console.log(firstName, middleName, lastName);
  }
  //fullName1();
}
//Create a function called fullName, that receives three parameters:
//lastName, firstName, and middleName (in that order!)
//The function should combine the three names into a new string, the full name,
// with a single space between each, but ignoring the middleName completely if it wasn't given.
//The function should write the new string to the console.
fullName1("Potter", "Harry", "James"); //should console.log "Harry James Potter"
//fullName1("Potter", "Harry"); should console.log "Harry Potter"
// fullName1("Harry", "Potter"); should console.log "Potter Harry"
// fullName1 ("Potter", "Harry", "James", "Pottypotpot");should console.log "Harry James Potter"
function fullName1(lastName, firstName, middleName) {
  if (middleName) {
    // console.log(`${firstName} ${middleName} ${lastName}`);
    //try returning it insted
    return `${firstName} ${middleName} ${lastName}`;
  } else {
    // console.log(`${firstName}  ${lastName}`);
    //try returning it insted
    return `${firstName}  ${lastName}`;
  }
}

// try for return
console.log("fullName1 test 1: ", fullName1("Lind", "Peter"));
console.log("fullName1 test 1: ", fullName1("Lind", "Peter", "Heronimous"));
