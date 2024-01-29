function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function caesarCipher(str, shift) {
  let newString = '';

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i) + shift;
    if (charCode > 122) {
      charCode -= 26;
    }
    newString += String.fromCharCode(charCode);
  }
  return newString;
}

// console.log(capitalize('hello'));
// console.log(reverseString('hello'));

// caesarCipher('abcd', 2);
// caesarCipher('wxyz', 3);

function analyzeArray(array) {
  return {
    average: getAvg(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
}

function getAvg(array) {
  return sum(array) / array.length;
}

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function getMin(array) {
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function getMax(array) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

module.exports = {
  capitalize: capitalize,
  reverseString: reverseString,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  caesarCipher: caesarCipher,
  analyzeArray: analyzeArray,
};
