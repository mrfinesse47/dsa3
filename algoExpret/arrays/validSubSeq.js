// array = [5, 1, 22, 25, 6, -1, 8, 10];
// seq = [1, 6, -1, 10];
//true

function isValidSubsequence(array, sequence) {
  for (let i = 0; i < array.length; i++) {
    if (sequence[0] === array[i]) {
      sequence.shift();
    }
    console.log(sequence);
    if (sequence.length === 0) {
      return true;
    }
  }
  return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
