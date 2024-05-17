// function palindrome(str) {
//   const backwards = str.split("").reverse().join("");

//   return str === backwards;
// }

function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}
module.exports = palindrome;
