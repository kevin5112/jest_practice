const app = require('./app');

test("takes a string 'hello' and returns 'Hello'", () => {
  expect(app.capitalize('hello')).toBe('Hello');
});

test("takes a string 'hello' and returns 'olleh'", () => {
  expect(app.reverseString('hello')).toBe('olleh');
});

test('calculator: adds 1 + 2 to equal 3', () => {
  expect(app.add(1, 2)).toBe(3);
});

test('calculator: subtracts 3 - 2 to equal 1', () => {
  expect(app.subtract(3, 2)).toBe(1);
});

test('calculator: multiplies 3 * 2 to equal 6', () => {
  expect(app.multiply(3, 2)).toBe(6);
});

test('calculator: divides 6 / 2 to equal 3', () => {
  expect(app.divide(6, 2)).toBe(3);
});

test('caesarCipher: takes a string and a shift, returns string with shifted characters', () => {
  expect(app.caesarCipher('abcd', 2)).toBe('cdef');
});

test('caesarCipher: takes a string and a shift, returns string with shifted characters. Test for wrapping past z', () => {
  expect(app.caesarCipher('wxyz', 3)).toBe('zabc');
});

test('analyzeArray: takes an array and returns an object with "average", "min", "max", and "length" properties', () => {
  expect(app.analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
