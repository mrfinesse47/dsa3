function sortedSquaredArray(array) {
  const res = [];
  let num1;
  let num2;

  if (array.length === 1) {
    return [array[0] * array[0]];
  }

  for (let i = 0, j = array.length - 1; i <= j; ) {
    num1 = array[i] * array[i];
    num2 = array[j] * array[j];
    if (num1 > num2) {
      res.unshift(num1);
      i++;
    } else {
      res.unshift(num2);
      j--;
    }
  }
  return res;
}

const array = [-9];

console.log(sortedSquaredArray(array));
//should produce a sorted output
