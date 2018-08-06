//Gallons to Liters
var myNumber = parseFloat(prompt("Please enter a number in gallons?"));
function convert(myNumber) {
  return myNumber*3.785;
}

alert(convert(myNumber)+" liters.");
