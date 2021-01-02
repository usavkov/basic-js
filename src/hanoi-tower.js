const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
// мин кол-во шагов (2 ** n) - 1
  return {
    turns: (2 ** disksNumber) - 1,
    seconds: Math.floor(((2 ** disksNumber) - 1) / (turnsSpeed / 3600))
  }
};
 /*
  // Если психануть и смотреть как передвигаются диски
  // diskNumber четное: 1-2, 1-3, 2-3; нечётноe — 1-3, 1-2, 2-3
  const tower1 = [];
  const tower2 = [];
  const tower3 = [];
  let counter = 0;

  const check = function checkElementIfExistElseZero (elem) {
    if (elem === undefined) {
      return Infinity;
    }

    return elem;
  }

  for (let i = 1; i <= disksNumber; i++) {
    tower1.unshift(i);
  }

  //console.log('init: ', tower1, tower2, tower3);

  while (tower2.length !== disksNumber && tower3.length !== disksNumber) {

    if (check(tower3[tower3.length - 1]) > check(tower1[tower1.length - 1])) {
      tower3.push(tower1.pop());
      counter++;
      console.log(counter, [['first', tower1], ['second', tower2], ['third', tower3]], '1 -> 3');
    } else {
      tower1.push(tower3.pop())
      counter++;
      console.log(counter, [['first', tower1], ['second', tower2], ['third', tower3]], '3 -> 2');
    }

    if (tower2.length !== disksNumber && tower3.length !== disksNumber) {
      if (check(tower2[tower2.length - 1]) > check(tower1[tower1.length - 1])) {
        tower2.push(tower1.pop());
        counter++;
        console.log(counter, [['first', tower1], ['second', tower2], ['third', tower3]], '1 -> 2');
      } else {
        tower1.push(tower2.pop())
        counter++;
        console.log(counter, [['first', tower1], ['second', tower2], ['third', tower3]], '2 -> 1');
      }

      if (tower2.length !== disksNumber && tower3.length !== disksNumber) {
        if (check(tower3[tower3.length - 1]) > check(tower2[tower2.length - 1])) {
          tower3.push(tower2.pop());
          counter++;
          console.log(counter, [['first', tower1], ['second', tower2], ['third', tower3]], '2 -> 3');
        } else {
          tower2.push(tower3.pop())
          counter++;
          console.log(counter, [['first', tower1], ['second', tower2], ['third', tower3]], '3 -> 2');
        }
      }
    }
  }

  return {
    turns: counter,
    seconds: Math.floor(counter / (turnsSpeed / 3600))
  }
};
*/
