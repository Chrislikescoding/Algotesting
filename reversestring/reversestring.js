function reverseString(str) {
  const words = Array.from(str);
  let reversed = [];
  for (let i = words.length - 1; i > -1; i--) {
    reversed = reversed + words[i];
    // console.log(reversed);
  }
  return reversed;
}
module.exports = reverseString;
