const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) { 
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch(err) {
    throw new Error(err);
  }

  const month = date.getMonth() + 1;
  switch (month) {
    case 1:
    case 2:
    case 12:
      return 'winter';
    case 3:
    case 4:
    case 5:
      return 'spring';
    case 6:
    case 7:
    case 8:
      return 'summer';
    case 9:
    case 10:
    case 11:
       return 'autumn';
  }
};
