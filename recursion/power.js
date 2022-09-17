// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()
// - do not worry about negative bases and exponents.

// power(2,0) // 1 ==> base case returns 1
// power(2,1) // 2
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  //base case
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1); // answers accumulate here
}

console.log(power(2, 4));
