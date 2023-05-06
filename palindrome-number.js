/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const reversedNumber = x.toString().split("").reverse().join("");
  return reversedNumber === x.toString();
};
