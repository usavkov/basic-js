const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  if (repeatTimes === undefined) {
    return ''
  }

  let strReps = [];
  const sepReps = [];

  for (let i = 0; i < repeatTimes; i++) {
    strReps.push(str);
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    sepReps.push(`${addition}`);
  }

  const addSepStr = sepReps.join(additionSeparator);

  strReps = strReps.map((e) => e + addSepStr)
  return strReps.join(separator);
};