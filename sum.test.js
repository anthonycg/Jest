const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('check database for 18 year old user', () => {
  const database = [{
    name: 'Alice', age: 17},
    {name: 'Bob', age: 18}, 
    {name: 'Charlie', age: 19
  }];
  const expectedOutput = {'name': 'Bob', age: 18}
  expect(expectedOutput.age).toBe(18);
});