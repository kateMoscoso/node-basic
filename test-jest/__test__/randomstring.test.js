const randomStrings = require("../randomstring");

describe("Test randomString function", () => {
  test("It should return a string", () => {
    expect(typeof randomStrings()).toBe("string");
  });
  test("Check if a city does not exits", () => {
    expect(randomStrings()).not.toMatch(/Soria/);
  });
});