// make the 3rd letter capitalised
const name = "peter";
const thirdLetter = name.substring(0, 2) + name.charAt(2).toUpperCase() + name.substring(3);
console.log(thirdLetter);
//make the 2nd and 3rd letter capitalised
const name1 = "niki";
const secondAndThirdLetter =
  name1.substring(0, 1) +
  name1.charAt(1).toUpperCase() +
  name1.charAt(2).toUpperCase() +
  name1.substring(3);
console.log(secondAndThirdLetter);
//make the 1st and 2nd letter capitalised
const firstAndSecondLetter =
  name1.charAt(0).toUpperCase() + name1.charAt(1).toUpperCase() + name1.substring(2);
console.log(firstAndSecondLetter);
// make last letter cap
const firstLetter = name1.substring(0, 3) + name1.charAt(3).toUpperCase();
console.log(firstLetter);
//make every but 3rd cap
const onlyThirdLower =
  name1.charAt(0).toUpperCase() +
  name1.charAt(1).toUpperCase() +
  name1.substring(2, 3) +
  name1.charAt(3).toUpperCase();
console.log(onlyThirdLower);
