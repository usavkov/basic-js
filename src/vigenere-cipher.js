const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (direct = true) {
    this.direct = direct
  }

  encrypt(msg, key) {
    /*cj = (mj + kj) % n*/

    if (!msg || !key) {
      throw Error('Check input parametrs!')
    }

    const spMsg = msg.toLowerCase().split('');
    let spKey = key.toLowerCase();

    while (spMsg.length > spKey.length) {
      spKey += spKey;
    }

    spKey = spKey.split('');
    let trigger = 0;
    const res = [];

    for (let l of spMsg) {
      if (/[a-z]/i.test(l)) {
        res.push(String.fromCharCode((((l.charCodeAt(0) - 97) + (spKey[trigger++].charCodeAt(0) - 97)) % 26) + 97).toUpperCase());
      } else {
        res.push(l)
      }
    }
    
    return this.direct ? res.join('') : res.reverse().join('');
  }    

  decrypt(enMsg, key) {
    /* mj = (cj + n - kj) % n */

    if (!enMsg || !key) {
      throw Error('Check input parametrs!')
    }

    const spEnMsg = enMsg.toLowerCase().split('');
    let spKey = key.toLowerCase();

    while (spEnMsg.length > spKey.length) {
      spKey += spKey;
    }

    spKey = spKey.split('');
    let trigger = 0;
    const res = [];

    for (let l of spEnMsg) {
      if (/[a-z]/i.test(l)) {
        res.push(String.fromCharCode((((l.charCodeAt(0) - 97) + (26 - (spKey[trigger++].charCodeAt(0) - 97))) % 26) + 97).toUpperCase());
      } else {
        res.push(l)
      }
    }
    
    return this.direct ? res.join('') : res.reverse().join('');


    // String.fromCharCode(((('e'.charCodeAt(0) - 97) + (26 - ('l'.charCodeAt(0) - 97))) % 26) + 97);
  }
}

module.exports = VigenereCipheringMachine;