//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.

//array = [3, 5, -4, 8, 11, 1, -1, 6]
//res = 10

// 10-3=7

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const hashMap = {};
  const res = [];

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]] === true) {
      res.push(array[i]);
      res.push(targetSum - array[i]);
    }
    hashMap[targetSum - array[i]] = true;
  }

  return res;
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
