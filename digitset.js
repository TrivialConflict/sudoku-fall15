var _ = require('lodash');

function DigitSet(singleDigit) {
  this.possibilities = [];

  if (singleDigit === ".") {
     this.possibilities = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
   } else {
     this.possibilities = [singleDigit.toString()];
   }

  this.eliminate = function(input) {
    if ( typeof input === "object" ) {

      var self = this;
      function eliminateDigit(str) {
        var location = self.possibilities.indexOf(str);
        if(location >= 0) {
          self.possibilities.splice(location, 1);
        }
      };
      input.forEach(eliminateDigit);
    } else {
      var location = this.possibilities.indexOf(input);
      if(location >= 0) {this.possibilities.splice(location, 1);}
    }
  };

  this.size = function() {
    return this.possibilities.length;
  };

  this.toString = function() {
    return this.possibilities.join();
  };

  this.toArray = function() {
    return this.possibilities;
  };

  this.add = function(input) {
    if ( typeof input === "object" ) {
      var self = this;
      function addDigit(str) {
        self.possibilities.push(str);
      };
      input.forEach(addDigit);
    } else {
        this.possibilities.push(input);
    }
  };

  this.contains = function(digit) {
    return this.possibilities.indexOf(digit) >= 0;
  };

  this.set = function(arrayOfDigits) {
    this.possibilities = arrayOfDigits;
  };

    this.isUncertain = function() {
      if ( this.possibilities.length > 1 ) {
        return true;
      } else {
        return false;
      }
    };

    this.contains = function(digit) {
      if ( this.possibilities.length === 1 && this.possibilities[0]  ===  digit ) {
        return true;
      } else {
        return false;
      }
    };

};


// console.log(DigitSet); // for testing only

module.exports = DigitSet;
