// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, cb) {
  const num = arr.shift();

  if (cb(num) === true) {
    return true;
  }
  if (arr.length === 0) {
    return false;
  }
  return someRecursive(arr, cb);
}

console.log(someRecursive([8, 1, 6, 4], isOdd));
