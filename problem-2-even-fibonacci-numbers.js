//By considering the terms in the Fibonacci sequence whose values do not exceed n,
// find the sum of the even-valued terms.

function fiboEvenSum(n) {
  let prev = 0;
  let curr = 1;
  let temp;
  let sum = 0;
  while (curr < n) {
    temp = curr;
    curr = curr + prev;
    prev = temp;
    if (curr % 2 === 0) {
      sum += curr;
    }
  }
  return sum;
}