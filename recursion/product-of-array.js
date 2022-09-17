// Write a function called productOfArray which takes in an array
//  of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  const firstEl = arr.shift();
  if (arr.length === 0) {
    //base case
    return firstEl;
  }
  return firstEl * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3, 10]));
