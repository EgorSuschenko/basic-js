const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = { 'repeatTimes': 0, 'separator': '+', "addition": '', 'additionRepeatTimes': 0, 'additionSeparator': '|' }) {
  let form = str;
  let template = { 'repeatTimes': 1, 'separator': '+', "addition": '', 'additionRepeatTimes': 0, 'additionSeparator': '|' };
  if (options.addition || typeof options.addition === 'boolean' || options.addition === null)
    if (options.additionRepeatTimes === 1 || options.additionRepeatTimes === undefined) {
      form += `${options.addition}`;
    }
    else {
      if (!options.additionSeparator) {
        options.additionSeparator = '|';
        for (let i = 0; i < options.additionRepeatTimes; i++)
          form += `${options.addition}${options.additionSeparator}`;
      } else
        for (let i = 0; i < options.additionRepeatTimes; i++)
          form += `${options.addition}${options.additionSeparator}`;
        form = form.substring(0, form.length - options.additionSeparator.length)
    }
  if (!options.separator)
    options.separator = `+`;
  form += `${options.separator}`;
  let res = form;
  for (let i = 0; i < options.repeatTimes - 1; i++)
    res += form;




  return res.substring(0, res.length - options.separator.length);
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
