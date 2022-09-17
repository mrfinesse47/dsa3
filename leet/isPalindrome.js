var isPalindrome = function (x) {
  const str = String(x); //typecast

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
};

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

console.log(isPalindrome(1));
