const leapYears = function(year) {
     if (year % 400 === 0) {
    return true;   // Rule 1
  } else if (year % 100 === 0) {
    return false;  // Rule 2
  } else if (year % 4 === 0) {
    return true;   // Rule 3
  } else {
    return false;  // Rule 4
  }
};

// Do not edit below this line
module.exports = leapYears;
