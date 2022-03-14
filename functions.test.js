let myFunctions = require('./functions')

// test("Return Two test", () => {
//     expect(myFunctions.returnTwo()).toBe(2)

//  });

 test('2 should equal 2', () => {
    expect(2).toBe(2);
  });

 test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello James.')
    expect(myFunctions.greeting('Jill')).toBe('Hello Jill.')
});

test("Addition Test", () => {
    expect(myFunctions.add(1, 2)).toBe(3)
    expect(myFunctions.add(5, 9)).toBe(14)
});

describe("Math Challenge!", () => {
  test("Add", () => {
    expect(myFunctions.add(7, 3)).toBe(10)
  });

  test("Subtract", () => {
    expect(myFunctions.subtract(10, 7)).toBe(3)
  });

  test("Multiply", () => {
    expect(myFunctions.multiply(5, 5)).toBe(25)
  });

  test("Divide", () => {
    expect(myFunctions.divide(15, 5)).toBe(3)
  })
})