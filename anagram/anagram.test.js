const anagram = require("./anagram");
describe(anagram, () => {
  it("should be a function", () => {
    expect(typeof anagram).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof anagram("ram", "arm")).toEqual("boolean");
  });
  it("should return true if it is an anagram", () => {
    expect(anagram("ram", "arm")).toBeTruthy();
    expect(anagram("cinema", "iceman")).toBeTruthy();
    expect(anagram("tread", "trade")).toBeTruthy();
  });
  it("should return false if it is not an anagram", () => {
    expect(anagram("ewe", "arm")).toBeFalsy();
    expect(anagram("hello", "fellow")).toBeFalsy();
    expect(anagram("cost", "lost")).toBeFalsy();
  });
});
