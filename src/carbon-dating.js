const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) === 'string')
  {
    sampleActivity = parseFloat(sampleActivity);
      if(sampleActivity > 15 || sampleActivity <= 0 || isNaN(sampleActivity))
        return false;
    let k = 0.693 / HALF_LIFE_PERIOD;
    let diff = MODERN_ACTIVITY / sampleActivity;
    return Math.ceil(Math.log(diff)/k);
  } else return false;

};
