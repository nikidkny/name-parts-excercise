"use strict";
hexToRGB("#c0de25");
function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5), 16);
  console.log(r, g, b);
  // return {r,g,b};
}

rgbToHex(12, 2, 17);
function rgbToHex(r, g, b) {
  // console.log(r, g, b);

  const hex1 = r.toString(16);
  //console.log(hex1);
  const hex2 = g.toString(16);
  const hex3 = b.toString(16);
  // console.log(`rgb: #${hex1}${hex2}${hex3}`);
  if (hex1.lenght >= 0 || hex2.lenght >= 0 || hex3.lenght >= 0) {
    console.log(`rgb: #${hex1}${hex2}${hex3}`);
  }
}
