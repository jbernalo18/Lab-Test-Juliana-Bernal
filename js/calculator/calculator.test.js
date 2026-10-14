const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//pruebas multiplicar

test('multiply 3 * -7 to equal -21',()=>{
  expect(calculator.multiply(3,-7)).toBe(-21);
});

test('multiply 5 * 6 to equal 30',()=>{
  expect(calculator.multiply(5,6)).toBe(30);
});

test('multiply 5 * 0 to equal 0',()=>{
  expect(calculator.multiply(5,0)).toBe(0);
});



//pruebas dividir
test('divide 12/4 to equals 3',()=>{
  expect(calculator.divide(12,4)).toBe(3);
});

test('divide -20/5 to equals -4',()=>{
  expect(calculator.divide(-20,5)).toBe(-4);
});

//*Expected: 0 | Received: Infinity*/
test('divide 5 / 0 to equal undefined',()=>{
  expect(calculator.divide(5,0)).toBe("Error, no se puede dividir por 0");
});


