var _ = require('lodash');



function DigitSet(singleDigit) {
  this.possibilities = [];
  this.removePossibleValue = function(digit) {};
  this.size = function() {
    return this.possibilities.length;
  };

  if ( singleDigit === ".") {
     this.possibilities = ["1","2","3","4","5","6","7","8","9"];
   } else {
     this.possibilities = [singleDigit];
   }
}

//console.log(DigitSet);// for testing only

module.exports = DigitSet;
