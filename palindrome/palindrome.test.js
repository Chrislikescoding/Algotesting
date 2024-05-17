const palindrome = require("./palindrome");
describe(palindrome, () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });
  it("should return true if it is a palindrome", () => {
    expect(palindrome("kayak")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
    expect(palindrome("reviver")).toBeTruthy();
  });
  it("should return false if it is not a palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("goodbye")).toBeFalsy();
    expect(palindrome("false")).toBeFalsy();
  });
  it("should return false if it has spaces", () => {
    expect(palindrome(" wow")).toBeFalsy();
    expect(palindrome(" kayak")).toBeFalsy();
    expect(palindrome("did ")).toBeFalsy();
  });
});
