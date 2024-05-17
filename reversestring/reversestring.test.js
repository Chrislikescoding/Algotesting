const reverseString = require("./reversestring");
describe(reverseString, () => {
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function");
  });
  it("should return a string", () => {
    expect(typeof reverseString("hello")).toEqual("string");
  });
  it("should reverse the string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("wow")).toEqual("wow");
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});
