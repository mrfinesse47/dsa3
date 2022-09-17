// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  if (str.length === 2) {
    return true;
  }
  if (!isPalindrome(str.slice(1, -1))) {
    return false;
  } else {
    return true;
  }
}

console.log(isPalindrome('tacocat'));
