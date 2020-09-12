const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsToFinish = Math.pow(2, disksNumber) - 1;
  let time = parseInt(turnsToFinish /(turnsSpeed / 3600));
  return {
    'turns' : turnsToFinish,
    'seconds' : time,
  };

};
