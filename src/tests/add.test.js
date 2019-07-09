const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  // if (result !== 7) {
  //   throw new Error(`u added 4 and 3 the result was  ${result} expected 7`);
  // }
  expect(result).toBe(7);
});

test("should generate greeting from name", () => {
  const result = generateGreeting("mike");
  expect(result).toBe("hello mike");
});

test("should generate greeting from name", () => {
  const result = generateGreeting();
  expect(result).toBe("hello Anonymous");
});
