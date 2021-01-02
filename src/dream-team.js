const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const res = []

  if (!Array.isArray(members)) {
    return false
  }

  for (let name of members) {
    if (typeof name === 'string') {
      res.push(name.trim().split('')[0])
    }

  }
  
  return  res.map((e) => e.toUpperCase()).sort().join('');
};
