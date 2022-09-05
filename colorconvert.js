"use strict";
const hex = "#c0de25";
convertColour(hex);
function convertColour(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5), 16);
  console.log(r, g, b);
}
